import { Container } from "@/components/_ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/contants/home-page";
import { Quote } from "lucide-react";
import { WaveDivider } from "../-components/WaveDivider";

export function Testimonials() {
	return (
		<Container className="pt-16 pb-10 lg:pb-[72px] lg:pt-24 bg-gradient-to-b from-zinc-50 to-zinc-100 relative">
			<span id="testimonials" className="element-to-navigate" />

			{/* WaveDivider */}
			<WaveDivider position="bottom" color="fill-blue-400" />

			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 text-center">
						O Que Nossos Clientes Dizem
					</h2>

					<p className="text-blue-600 text-center mb-12 max-w-3xl mx-auto">
						A confiança de nossos clientes é o nosso maior patrimônio. Veja o
						que algumas pessoas têm a dizer sobre a experiência de trabalhar com
						o escritório Lenzi e Barbosa. Estamos sempre comprometidos em
						fornecer um serviço jurídico de excelência, focado em resultados e
						no bem-estar de nossos clientes.
					</p>
				</div>

				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
					className="w-full mx-auto"
				>
					<CarouselContent className="pb-8">
						{testimonials.map((testimonial) => (
							<CarouselItem
								key={testimonial.author}
								className="basis-[85%] sm:basis-[45%] lg:basis-[30%] pl-2 md:pl-4"
							>
								<div className="p-1">
									<Card className="bg-white border-blue-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
										<CardContent className="flex flex-col aspect-square p-6">
											<Quote className="w-8 h-8 text-blue-400 mb-4" />
											<p className="text-blue-700 flex-grow">
												{testimonial.text}
											</p>
											<div className="mt-4">
												<p className="font-semibold text-blue-800">
													{testimonial.author}
												</p>
												<div className="flex items-center gap-2 text-sm text-blue-500">
													<div className="flex">{"★".repeat(5)}</div>
													<a
														href="https://www.google.com.br/maps/place/Lenzi+%26+Barbosa+Advogados+Associados/@-22.7017821,-46.7705559,17z/data=!3m1!4b1!4m6!3m5!1s0x94c9211262c5b84f:0x22d3e2cbf564e6ec!8m2!3d-22.7017871!4d-46.767981!16s%2Fg%2F11tdck2bz6?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
														className="text-xs"
													>
														Importada de google.com
													</a>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<div className="flex justify-center gap-4">
						<CarouselPrevious className="text-blue-500 static translate-y-0" />
						<CarouselNext className="text-blue-500 static translate-y-0" />
					</div>
				</Carousel>
			</div>
		</Container>
	);
}
