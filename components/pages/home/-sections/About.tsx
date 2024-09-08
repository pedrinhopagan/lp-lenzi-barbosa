import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import images from "@/contants/images";
import Image from "next/image";
import {
	Scale,
	Handshake,
	Award,
	Users,
	Lightbulb,
	Heart,
	Briefcase,
	X,
} from "lucide-react";
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

export function About() {
	return (
		<Container className="py-12 lg:py-24">
			<span id="about" className="element-to-navigate" />

			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 text-center">
					Nossa Equipe, Seu Suporte Jurídico
				</h2>

				<div className="grid md:grid-cols-2 gap-16 mt-12 lg:mt-20 mb-16">
					{lawyers.map((lawyer, index) => (
						<div
							key={lawyer.name}
							className="bg-zinc-50 p-8 rounded-lg shadow-lg"
						>
							<Image
								src={index === 0 ? images.aboutMirella : images.aboutAmanda}
								alt={lawyer.name}
								width={150}
								height={150}
								className="rounded-full mx-auto mb-6 max-w-[150px] max-h-[150px] object-cover"
							/>
							<h3 className="text-2xl font-bold mb-4 text-blue-500 text-center">
								{lawyer.name}
							</h3>
							<p className="text-blue-400 mb-6">{lawyer.description}</p>
							<ul className="text-blue-400">
								{lawyer.specialties.map((specialty, idx) => (
									<li key={specialty} className="mb-2 flex items-center">
										<Scale className="mr-2 w-5 h-5 text-blue-500" /> {specialty}
									</li>
								))}
							</ul>
							<div className="mt-6 grid grid-cols-2 gap-4">
								<Button variant="outline" className="w-full">
									Contato
								</Button>
								<Dialog>
									<DialogTrigger asChild>
										<Button className="w-full">Mais Informações</Button>
									</DialogTrigger>
									<DialogContent className="max-w-2xl bg-zinc-50 max-h-[80vh] overflow-y-auto">
										<DialogHeader className="bg-zinc-50 z-10 pb-4 sticky top-0 w-fit max-w-[95%] text-start">
											<div className="flex justify-between items-center ">
												<DialogTitle className="w-fit">
													{lawyer.name}
												</DialogTitle>
											</div>
											<DialogDescription>{lawyer.title}</DialogDescription>
										</DialogHeader>

										<p className="text-blue-400">{lawyer.description}</p>
										<h4 className="text-lg font-semibold text-blue-500">
											Formação
										</h4>
										<ul className="list-disc list-inside text-blue-400">
											{lawyer.education.map((edu, idx) => (
												<li key={edu}>{edu}</li>
											))}
										</ul>
										<h4 className="text-lg font-semibold text-blue-500">
											Áreas de Atuação
										</h4>
										<ul className="grid grid-cols-2 gap-2">
											{lawyer.expertise.map((exp, idx) => (
												<li key={exp} className="flex items-center">
													<Briefcase className="mr-2 w-4 h-4 text-blue-500" />{" "}
													{exp}
												</li>
											))}
										</ul>
									</DialogContent>
								</Dialog>
							</div>
						</div>
					))}
				</div>

				{/* Seção de valores */}
				<div className="text-center bg-zinc-50 p-8 rounded-lg shadow-lg">
					<h3 className="text-2xl font-bold mb-6 text-blue-500">
						Nossos Valores
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
						{[
							{ icon: Award, text: "Ética" },
							{ icon: Users, text: "Transparência" },
							{ icon: Lightbulb, text: "Excelência" },
							{ icon: Heart, text: "Compromisso" },
						].map((valor, index) => (
							<div
								key={valor.text}
								className="bg-zinc-100 p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:bg-zinc-200 hover:shadow-md"
							>
								<valor.icon className="w-8 h-8 mb-2 text-blue-500" />
								<p className="text-base font-semibold text-blue-500">
									{valor.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
}
