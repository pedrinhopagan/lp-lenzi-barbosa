"use client";

import { Container } from "@/components/_ui/Container";
import { LinkNavigation } from "@/lib/link_navigation";
import Image from "next/image";
import images from "@/contants/images";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks, PHONE_NUMBER } from "@/contants/home-page";

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
							src={images.logoNameLight}
							alt="Lenzi e Barbosa"
							className="h-12 w-auto mb-6"
						/>
						{/* Descrição do escritório */}
						<p className="text-sm text-blue-300 text-center lg:text-left mb-6">
							Advocacia especializada com integridade e dedicação.
						</p>
						{/* Informações de contato */}
						<div className="flex flex-col items-center lg:items-start gap-2">
							<h3 className="text-xl font-semibold mb-4 text-blue-200">
								Contato
							</h3>
							<div className="flex items-center space-x-4">
								<Mail className="w-5 h-5 text-blue-300" />
								<a
									href="mailto:contato@lenziebarbosa.com"
									className="text-sm text-blue-300 hover:underline"
								>
									contato@lenziebarbosa.com
								</a>
							</div>
							<div className="flex items-center space-x-4">
								<Phone className="w-5 h-5 text-blue-300" />
								<a
									href={`tel:${PHONE_NUMBER}`}
									className="text-sm text-blue-300 hover:underline"
								>
									{PHONE_NUMBER.replace(
										/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/,
										"+$1 ($2) $3 $4-$5",
									)}
								</a>
							</div>
							<div className="flex items-center space-x-4">
								<Instagram className="w-5 h-5 text-blue-300" />
								<a
									href="https://www.instagram.com/lenziebarbosa/"
									className="text-sm text-blue-300 hover:underline"
									aria-label="Instagram"
								>
									@lenziebarbosa
								</a>
							</div>
						</div>
					</div>

					{/* Coluna direita: Links rápidos */}
					<div className="flex flex-col items-center lg:items-end">
						<h3 className="text-xl font-semibold mb-6 text-blue-200 text-center lg:text-end">
							Links Rápidos
						</h3>
						<nav>
							<ul className="flex flex-col md:flex-wrap gap-2">
								{navLinks.map((link) => (
									<li key={link.id}>
										<Button
											variant="link"
											asChild
											className="p-0 w-full justify-center lg:justify-end"
										>
											<LinkNavigation
												id={link.id}
												className="text-blue-100 hover:text-blue-200 transition-colors"
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
