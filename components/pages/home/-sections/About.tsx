"use client";

import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import images from "@/contants/images";
import Image from "next/image";
import { Award, ChevronRight, Search, Star, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { lawyers } from "@/contants/home-page";
import { WaveDivider } from "../-components/WaveDivider";

export function About() {
	return (
		<Container className="relative py-12 lg:py-24 bg-gradient-to-b from-blue-900 to-indigo-900">
			<span id="about" className="element-to-navigate" />

			<div className="max-w-6xl mx-auto">
				<div className="text-white p-2 md:p-8 xl:p-12 rounded-3xl">
					<h4 className="text-sm font-semibold text-blue-300 text-center mb-2">
						Nossa Equipe
					</h4>
					<h2 className="text-4xl font-bold mb-8 text-center">
						Seu Suporte Jurídico
					</h2>
					<p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
						Contamos com profissionais altamente qualificados e dedicados para
						oferecer o melhor suporte jurídico.
					</p>

					<div className="grid md:grid-cols-2 gap-8 mb-16">
						{lawyers.map((lawyer, index) => (
							<motion.div
								key={lawyer.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
							>
								<Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-blue-800/30 backdrop-blur-sm border-blue-400 group">
									<CardContent className="p-0">
										<div className="relative">
											<Image
												src={
													index === 0 ? images.aboutMirella : images.aboutAmanda
												}
												alt={lawyer.name}
												width={500}
												height={300}
												className="w-full h-64 object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
												<motion.h2
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.2 }}
													viewport={{ once: true }}
													className="text-2xl font-bold text-white"
												>
													{lawyer.name}
												</motion.h2>
											</div>
										</div>
										<div className="p-6">
											<motion.p
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.4 }}
												viewport={{ once: true }}
												className="text-indigo-200 mb-4"
											>
												{lawyer.description}
											</motion.p>
											<ul className="text-blue-200 mb-4">
												{lawyer.specialties.map((specialty, idx) => (
													<motion.li
														key={specialty}
														initial={{ opacity: 0, y: 20 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ delay: 0.6 + idx * 0.2 }}
														viewport={{ once: true }}
														className="mb-2 flex items-center"
													>
														<ChevronRight className="mr-2 w-4 h-4 text-blue-300" />{" "}
														{specialty}
													</motion.li>
												))}
											</ul>
											<Dialog>
												<DialogTrigger asChild>
													<Button className="w-full bg-white text-blue-900 hover:bg-blue-100">
														Ver Perfil Completo{" "}
														<ChevronRight className="ml-2 h-4 w-4" />
													</Button>
												</DialogTrigger>
												<DialogContent className="max-w-2xl bg-blue-900 text-white">
													<DialogHeader>
														<DialogTitle className="text-2xl font-bold">
															{lawyer.name}
														</DialogTitle>
														<DialogDescription className="text-blue-200">
															{lawyer.title}
														</DialogDescription>
													</DialogHeader>
													<div className="mt-4">
														<h4 className="text-lg font-semibold mb-2">
															Formação
														</h4>
														<ul className="list-disc list-inside text-blue-200">
															{lawyer.education.map((edu) => (
																<li key={edu}>{edu}</li>
															))}
														</ul>
													</div>
													<div className="mt-4">
														<h4 className="text-lg font-semibold mb-2">
															Áreas de Atuação
														</h4>
														<ul className="grid grid-cols-2 gap-2">
															{lawyer.expertise.map((exp) => (
																<li
																	key={exp}
																	className="flex items-center text-blue-200"
																>
																	<ChevronRight className="mr-2 w-4 h-4 text-blue-400" />
																	{exp}
																</li>
															))}
														</ul>
													</div>
												</DialogContent>
											</Dialog>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Seção de valores */}
					<div className="mt-16">
						<h4 className="text-sm font-semibold text-blue-300 text-center mb-2">
							O que acreditamos
						</h4>
						<h3 className="text-4xl font-bold mb-4 text-center">
							Nossos valores
						</h3>
						<p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
							Acreditamos que uma equipe pequena, altamente motivada e focada
							pode causar um impacto duradouro em qualquer área.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									title: "Ética",
									icon: Award,
									description:
										"Mantemos os mais altos padrões de integridade em todas as nossas ações.",
								},
								{
									title: "Foco",
									icon: Target,
									description:
										"Concentramos nossos esforços para alcançar os melhores resultados para nossos clientes.",
								},
								{
									title: "Curiosidade",
									icon: Search,
									description:
										"Buscamos constantemente novos conhecimentos e abordagens inovadoras.",
								},
								{
									title: "Qualidade",
									icon: Star,
									description:
										"Comprometemo-nos com a excelência em cada aspecto do nosso trabalho.",
								},
							].map((valor) => (
								<div key={valor.title} className="relative group">
									<div className="absolute inset-0 bg-blue-800/30 backdrop-blur-sm rounded-lg transform transition-all duration-300 group-hover:scale-105" />
									<div className="relative p-6 z-10">
										<valor.icon className="w-8 h-8 text-blue-300 mb-4" />
										<h5 className="text-xl font-semibold mb-2">
											{valor.title}
										</h5>
										<p className="text-blue-200 text-sm">{valor.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
