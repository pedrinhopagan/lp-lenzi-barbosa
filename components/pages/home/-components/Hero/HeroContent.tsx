import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import images from "@/contants/images";

export function HeroContent() {
	return (
		<Container className="absolute top-1/2 -translate-y-1/2">
			<div className="relative w-full h-[900px] flex items-center">
				<div className="flex flex-col justify-center items-center lg:items-end gap-12 w-full max-w-[470px] lg:-translate-x-12">
					<div className="flex flex-col gap-10">
						<Image
							className="w-full brightness-0 invert lg:invert-0"
							alt="Logo Lenzi e Barbosa advocacia"
							src={images.heroLogoLightBlue}
						/>

						<div className="flex flex-col gap-2 text-center lg:text-end">
							<Title className="text-zinc-100 lg:text-zinc-800 text-2xl font-semibold">
								Protegendo Seus Direitos com Integridade e Dedicação
							</Title>
							<Text className="text-zinc-300 lg:text-zinc-700 text-md">
								No escritório Lenzi e Barbosa, trabalhamos com profissionalismo
								e respeito, oferecendo soluções jurídicas personalizadas para
								cada cliente.
							</Text>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex flex-col lg:flex-row gap-8">
						<Button
							size="lg"
							variant="ghost"
							className="text-zinc-100 lg:text-zinc-800"
						>
							Conheça Nossos Serviços
						</Button>

						<Button
							variant="default"
							size="lg"
							className="relative overflow-hidden bg-gradient-to-r from-[#583682] via-[#3B4F9D] to-[#0C77A9] bg-[length:200%_200%] bg-left-top px-6 py-3 text-white font-bold rounded-lg transition-all duration-500 hover:bg-right-bottom "
						>
							Agende uma Consulta
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
