import { Container } from "@/components/_ui/Container";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/contants/home-page";

export function Testimonials() {
	return (
		<Container className="pt-16 pb-10 lg:pb-[72px] lg:pt-24 bg-gradient-to-b from-zinc-50 to-zinc-100">
			<span id="testimonials" className="element-to-navigate" />

			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 text-center">
					O Que Nossos Clientes Dizem
				</h2>

				<p className="text-blue-600 text-center mb-12 max-w-3xl mx-auto">
					A confiança de nossos clientes é o nosso maior patrimônio. Veja o que
					algumas pessoas têm a dizer sobre a experiência de trabalhar com o
					escritório Lenzi e Barbosa. Estamos sempre comprometidos em fornecer
					um serviço jurídico de excelência, focado em resultados e no bem-estar
					de nossos clientes.
				</p>

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full max-w-5xl mx-auto"
				>
					<CarouselContent>
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={testimonial.author}
								className="md:basis-1/2 lg:basis-1/3"
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
												<p className="text-sm text-blue-500">
													{testimonial.role}
												</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<div className="flex justify-center mt-4 gap-4">
						<CarouselPrevious className="text-blue-500 static translate-y-0" />
						<CarouselNext className="text-blue-500 static translate-y-0" />
					</div>
				</Carousel>
			</div>
		</Container>
	);
}
