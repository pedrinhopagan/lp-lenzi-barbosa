"use client";

import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import {
	Scale,
	Briefcase,
	Users,
	Lightbulb,
	Heart,
	Globe,
	Star,
	Home,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { WaveDivider } from "../-components/WaveDivider";

export function Services() {
	const areasAtuacao = [
		{
			icon: Scale,
			title: "Direito Civil",
			description:
				"Consultoria e resolução de disputas contratuais, danos morais e questões de responsabilidade civil.",
		},
		{
			icon: Briefcase,
			title: "Direito Trabalhista",
			description:
				"Defesa dos direitos de trabalhadores e empresas em ações judiciais e extrajudiciais.",
		},
		{
			icon: Users,
			title: "Direito de Família",
			description:
				"Acompanhamento em processos de divórcio, guarda, pensão alimentícia e adoção.",
		},
		{
			icon: Lightbulb,
			title: "Direito Empresarial",
			description:
				"Auxílio a empresas com planejamento jurídico, contratos e questões societárias.",
		},
		{
			icon: Heart,
			title: "Direito Previdenciário",
			description:
				"Orientação e defesa em questões relacionadas à aposentadoria e benefícios do INSS.",
		},
		{
			icon: Home,
			title: "Direito Imobiliário",
			description:
				"Assessoria em compra, venda e locação de imóveis, regularização e disputas de propriedade.",
		},
	];

	const diferenciais = [
		{
			icon: Globe,
			title: "Atendimento à Distância",
			description:
				"Consultoria e acompanhamento jurídico remoto para sua comodidade.",
		},
		{
			icon: Star,
			title: "Experiência Especializada",
			description:
				"Profissionais com vasta experiência em casos complexos e abordagem humanizada.",
		},
		{
			icon: Users,
			title: "Atendimento Personalizado",
			description:
				"Soluções jurídicas adaptadas às necessidades específicas de cada cliente.",
		},
	];

	return (
		<Container className="py-12 lg:py-24 bg-gradient-to-b from-zinc-100 to-zinc-50 relative">
			<WaveDivider inverted color="fill-indigo-900" />
			<span id="services" className="element-to-navigate" />

			<div className="max-w-6xl mx-auto">
				<h4 className="text-sm font-semibold text-blue-500 text-center mb-2">
					Nossos Serviços
				</h4>
				<h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-400 text-center">
					Soluções Jurídicas Personalizadas
				</h2>

				<p className="text-blue-600 text-center mb-12 max-w-2xl mx-auto">
					No escritório Lenzi e Barbosa, oferecemos soluções jurídicas
					personalizadas e eficientes, com atendimento especializado e de
					confiança.
				</p>

				<div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16">
					<div className="md:w-1/2">
						<h3 className="text-2xl font-bold mb-6 text-blue-700">
							Nossos Diferenciais
						</h3>
						<div className="grid grid-cols-1 gap-6">
							{diferenciais.map((diferencial, index) => (
								<motion.div
									key={diferencial.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.2 }}
									className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400"
								>
									<div className="flex items-center mb-3">
										<diferencial.icon className="w-10 h-10 text-blue-600 mr-3 duration-300" />
										<h4 className="text-xl font-bold text-blue-700">
											{diferencial.title}
										</h4>
									</div>
									<p className="text-blue-600">{diferencial.description}</p>
								</motion.div>
							))}
						</div>
					</div>

					<div className="md:w-1/2">
						<h3 className="text-2xl font-bold mb-6 text-blue-700">
							Áreas de Atuação
						</h3>
						<Accordion
							type="single"
							collapsible
							className="w-full"
							defaultValue="item-0"
						>
							{areasAtuacao.map((area, index) => (
								<AccordionItem key={area.title} value={`item-${index}`}>
									<AccordionTrigger className="text-xl font-bold text-blue-800 hover:text-blue-600 data-[state=open]:text-blue-400 transition-colors duration-300">
										<div className="flex items-center">
											<area.icon className="w-8 h-8 mr-4 transition-colors duration-300" />
											<span className="group-data-[state=open]:text-blue-400 transition-colors duration-300">
												{area.title}
											</span>
										</div>
									</AccordionTrigger>
									<AccordionContent className="text-blue-700">
										<p>{area.description}</p>
										<Button
											variant="link"
											className="mt-2 text-blue-500 hover:text-blue-700 p-0"
										>
											Saiba mais →
										</Button>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>

				<div className="mt-12 text-center">
					<Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition duration-300">
						Agende uma Consulta Online
					</Button>
				</div>

				<p className="text-blue-500 text-center mt-8 italic">
					Atendimento personalizado e eficiente, adaptado às suas necessidades,
					onde quer que você esteja.
				</p>
			</div>
		</Container>
	);
}
