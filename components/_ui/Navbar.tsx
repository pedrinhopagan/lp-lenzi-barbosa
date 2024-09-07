"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkNavigation } from "@/lib/link_navigation";

const navLinks = [
	{ id: "/", name: "Início" },
	{ id: "about", name: "Sobre" },
	{ id: "features", name: "Áreas de atuação" },
	{ id: "projects", name: "Projetos" },
	{ id: "contact", name: "Contato" },
];

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="fixed left-0 top-0 z-30 w-full bg-blue-700/40 backdrop-blur-md shadow-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<img
								src="/png/logo_gradient.png"
								alt="Lenzi e Barbosa"
								className="h-12 w-auto"
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
									onClick={toggleMenu}
								>
									{item.name}
								</LinkNavigation>
							))}
						</div>
					</div>
					
					<button
						id="mobile-menu-button"
						className="lg:hidden relative w-10 h-10 flex items-center justify-center"
						aria-label="Menu"
						onClick={toggleMenu}
					>
						<span
							className="relative flex flex-col justify-around w-6 h-5 hamburger-icon"
						>
							<span
								className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
									isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'
								}`}
							></span>
								<span
									className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
										isMenuOpen ? 'opacity-0 top-2.5' : 'top-2'
									}`}
								></span>
								<span
									className={`absolute w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ease-in-out ${
										isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
									}`}
								></span>
						</span>
					</button>
				</div>
			</div>

			<div className={`lg:hidden bg-blue-700/40 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navLinks.map((item) => (
						<LinkNavigation
							key={item.id}
							id={item.id}
							className="text-blue-100 hover:text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
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
