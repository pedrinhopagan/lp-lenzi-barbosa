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

	const router = useRouter();

	const handleLinkClick = (id: string) => {
		router.push(`/#${id}`);
	};

	return (
		<div className="fixed left-0 z-20 h-16 w-screen shadow-md transition-all duration-300 lg:block">
			<nav className="flex h-full w-full ">
				<div className="z-40 flex h-full w-full items-center justify-around gap-2 bg-[#000000CC] px-6 text-base-title transition-all duration-300">
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
									className="border-b-2 border-t-2 border-transparent text-zinc-100 transition-all duration-300 hover:border-b-primary cursor-pointer"
								>
									<>
										<LinkNavigation id={item.id}>{item.name}</LinkNavigation>
									</>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
