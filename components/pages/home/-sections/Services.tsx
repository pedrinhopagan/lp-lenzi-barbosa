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
import { useState } from "react";

export function Services() {
	const [openItem, setOpenItem] = useState<string | undefined>("item-0");

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
		<Container className="py-24 bg-gradient-to-b from-zinc-100 to-zinc-50">
			<span id="services" className="element-to-navigate" />

			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 text-center">
					Nossos Serviços
				</h2>

				<p className="text-blue-600 text-center mb-12">
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
								<div
									key={diferencial.title}
									className="group bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer border-l-4 border-blue-400"
								>
									<div className="flex items-center mb-3">
										<diferencial.icon className="w-10 h-10 text-blue-600 mr-3 transition-all duration-300" />
										<h4 className="text-xl font-bold text-blue-700">
											{diferencial.title}
										</h4>
									</div>
									<p className="text-blue-600">{diferencial.description}</p>
								</div>
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
							onValueChange={(value) => setOpenItem(value)}
						>
							{areasAtuacao.map((area, index) => (
								<AccordionItem key={area.title} value={`item-${index}`}>
									<AccordionTrigger className="text-xl font-bold text-blue-800 hover:text-blue-600 data-[state=open]:text-blue-400 transition-colors duration-300">
										<div className="flex items-center">
											<area.icon
												className={`w-8 h-8 mr-4 transition-colors duration-300 ${
													openItem === `item-${index}`
														? "text-blue-400"
														: "text-blue-700"
												}`}
											/>
											<span className="group-data-[state=open]:text-blue-400 transition-colors duration-300">
												{area.title}
											</span>
										</div>
									</AccordionTrigger>
									<AccordionContent className="text-blue-700">
										{area.description}
										<div className="mt-4 text-blue-600 font-semibold">
											Saiba mais →
										</div>
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

				<p className="text-blue-500 text-center mt-8">
					Atendimento personalizado e eficiente, adaptado às suas necessidades,
					onde quer que você esteja.
				</p>
			</div>
		</Container>
	);
}
