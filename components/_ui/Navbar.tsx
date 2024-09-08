"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LinkNavigation } from "@/lib/link_navigation";
import images from "@/contants/images";
import Image from "next/image";
import { navLinks } from "@/contants/home-page";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		const body = document.body;
		const mainHeader = navRef.current;

		if (isMenuOpen) {
			body.classList.add("overflow-hidden");
			mainHeader?.classList.remove("bg-blue-700/40");
			mainHeader?.classList.add("bg-blue-700");
		} else {
			body.classList.remove("overflow-hidden");
			mainHeader?.classList.add("bg-blue-700/40");
			mainHeader?.classList.remove("bg-blue-700");
		}
	}, [isMenuOpen]);

	return (
		<nav
			ref={navRef}
			className="section-spacing fixed left-0 top-0 z-30 w-full bg-blue-900/70 backdrop-blur-md shadow-md transition-colors duration-300"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<Image
								src={images.logoName}
								alt="Lenzi e Barbosa"
								className="h-12 w-auto brightness-0 invert"
							/>
						</Link>
					</div>

					<div className="hidden lg:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navLinks.map((item) => (
								<LinkNavigation
									key={item.id}
									id={item.id}
									className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
								>
									{item.name}
								</LinkNavigation>
							))}
						</div>
					</div>

					<button
						type="button"
						id="mobile-menu-button"
						className="lg:hidden relative w-10 h-10 flex items-center justify-center"
						aria-label="Menu"
						onClick={toggleMenu}
					>
						<span className="relative flex flex-col justify-around w-6 h-5 hamburger-icon">
							<span
								className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
									isMenuOpen ? "rotate-45 top-2.5" : "top-0"
								}`}
							/>
							<span
								className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
									isMenuOpen ? "opacity-0 top-2.5" : "top-2"
								}`}
							/>
							<span
								className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
									isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
								}`}
							/>
						</span>
					</button>
				</div>
			</div>

			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navLinks.map((item) => (
						<LinkNavigation
							key={item.id}
							id={item.id}
							className="text-blue-100 hover:text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
							onClick={toggleMenu}
						>
							{item.name}
						</LinkNavigation>
					))}
				</div>
			</div>
		</nav>
	);
}
