"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import images from "@/contants/images";
import { LinkNavigation } from "@/lib/link_navigation";

const navLinks: { id: string; name: string }[] = [
	{ id: "/", name: "Início" },
	{ id: "about", name: "Sobre" },
	{ id: "features", name: "Áreas de atuação" },
	{ id: "projects", name: "Projetos" },
	{ id: "contact", name: "Contato" },
];

export function Navbar() {
	const [toggle, setToggle] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isDarkMode, setIsDarkMode] = useState(true);
	const router = useRouter();

	const handleLinkClick = (id: string) => {
		router.push(`/#${id}`);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (window.scrollY > 0) {
			setPrevScrollPos(1);
		}

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			setPrevScrollPos(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<div className="fixed left-0 z-20 h-20 w-screen shadow-md transition-all duration-300 lg:block lg:h-24">
			<nav className="flex h-full w-full ">
				<div className="z-40 flex h-full w-full items-center justify-around gap-2 bg-[#00000080] px-6 text-base-title transition-all duration-300">
					<div className="h-12 gap-1 lg:w-[240px]">
						<Link
							href="/"
							className="flex-center h-full w-fit flex-col text-center font-alt"
						>
							<img
								src="/png/logo_gradient.png"
								alt="Lenzi e Barbosa"
								className="object-contain w-20"
							/>
						</Link>
					</div>

					<div className="flex-center gap-12">
						<ul className="hidden gap-10 text-sm uppercase tracking-wider lg:flex">
							{navLinks.map((item, i) => (
								<li
									key={item.id}
									className="border-b-2 border-t-2 border-transparent text-zinc-100 transition-all duration-300 hover:border-b-primary"
								>
									<>
										<LinkNavigation id={item.id}>{item.name}</LinkNavigation>
									</>
								</li>
							))}
						</ul>
					</div>

					{/* Mobile */}
					<div
						className={`${
							prevScrollPos === 0 ? "text-white" : "text-base-title"
						}
            } lg:hidden`}
					>
						{/* Hamburguer & X icon */}
						<button
							type="button"
							onClick={() => {
								setToggle(!toggle);
							}}
						>
							<div className="flex flex-col gap-2.5 transition-all duration-300">
								<span
									className={`${toggle ? "rotate-45 " : "w-[30px]"} h-0.5 w-[34.5px] origin-top-left bg-base-title 
                transition-all duration-300 `}
								/>
								<span
									className={`${
										toggle ? "w-0" : "w-[34.5px]"
									} h-0.5 bg-base-title transition-all duration-300 `}
								/>
								<span
									className={`${
										toggle ? "-rotate-45" : "w-[30px]"
									} h-0.5 w-[34.5px] origin-bottom-left bg-base-title  transition-all duration-300 `}
								/>
							</div>
						</button>
					</div>
				</div>
				<div
					className={`${
						toggle
							? "top-[79px] shadow-md"
							: "pointer-events-none -top-[30%] opacity-0 shadow-none"
					} fixed left-0 right-0 z-10 flex flex-col items-start justify-evenly transition-all duration-300 lg:hidden`}
				>
					{/* List */}
					<ul className="flex-center w-full flex-col gap-3 bg-base-background px-6 pb-6 pt-2 font-main text-xl font-thin text-base-title transition-all duration-300">
						{navLinks.map((item, i) => (
							<li key={item.id} className="">
								<Link
									onClick={() => {
										setToggle(false);
										handleLinkClick(item.id);
									}}
									href="#"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}
