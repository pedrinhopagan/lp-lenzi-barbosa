"use client";

import { Container } from "@/components/_ui/Container";
import { LinkNavigation } from "@/lib/link_navigation";
import Image from "next/image";
import images from "@/contants/images";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks } from "@/contants/home-page";

export function Footer() {
	return (
		<footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
			<Container className="py-16">
				{/* Grid principal do footer */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Coluna esquerda: Logo, descrição e informações de contato */}
					<div className="flex flex-col items-center lg:items-start">
						{/* Logo */}
						<Image
							src={images.logoName}
							alt="Lenzi e Barbosa"
							className="h-12 w-auto brightness-0 invert mb-6"
						/>
						{/* Descrição do escritório */}
						<p className="text-sm text-blue-200 text-center lg:text-left mb-6">
							Advocacia especializada com integridade e dedicação.
						</p>
						{/* Informações de contato */}
						<div className="flex flex-col items-center lg:items-start">
							<h3 className="text-xl font-semibold mb-4 text-blue-100">
								Contato
							</h3>
							<p className="text-sm text-blue-200 mb-2">
								contato@lenziebarbosa.com
							</p>
							<p className="text-sm text-blue-200 mb-6">(00) 1234-5678</p>
							{/* Ícones de redes sociais */}
							<div className="flex space-x-4">
								<a
									href="https://www.facebook.com/lenziebarbosa"
									className="text-blue-200 hover:text-white transition-colors"
									aria-label="Facebook"
								>
									<Facebook size={24} />
								</a>
								<a
									href="https://www.instagram.com/lenziebarbosa/"
									className="text-blue-200 hover:text-white transition-colors"
									aria-label="Instagram"
								>
									<Instagram size={24} />
								</a>
								<a
									href="https://www.linkedin.com/in/lenziebarbosa/"
									className="text-blue-200 hover:text-white transition-colors"
									aria-label="LinkedIn"
								>
									<Linkedin size={24} />
								</a>
							</div>
						</div>
					</div>

					{/* Coluna direita: Links rápidos */}
					<div className="flex flex-col items-center lg:items-end">
						<h3 className="text-xl font-semibold mb-6 text-blue-100 text-center lg:text-end">
							Links Rápidos
						</h3>
						<nav>
							<ul className="flex flex-col md:flex-wrap gap-4">
								{navLinks.map((link) => (
									<li key={link.id}>
										<Button
											variant="link"
											asChild
											className="p-0 w-full justify-center lg:justify-end"
										>
											<LinkNavigation
												id={link.id}
												className="text-blue-200 hover:text-white transition-colors"
											>
												{link.name}
											</LinkNavigation>
										</Button>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
				{/* Rodapé com direitos autorais */}
				<div className="w-full mt-12 pt-8 border-t border-blue-800 text-center flex flex-col md:flex-row justify-center lg:justify-between items-center gap-4">
					<p className="text-sm text-blue-300">
						© {new Date().getFullYear()} Lenzi e Barbosa Advocacia.
					</p>
					<p className="text-sm text-blue-300">Todos os direitos reservados.</p>
				</div>
			</Container>
		</footer>
	);
}
