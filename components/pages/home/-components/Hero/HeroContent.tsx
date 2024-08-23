import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import images from "@/contants/images";

export function HeroContent() {
	return (
		<Container className="absolute top-1/2 -translate-y-1/2 z-20">
			<div className="relative w-full h-[900px] flex items-center">
				<div className="flex flex-col justify-center items-end gap-12 w-full max-w-[470px] -translate-x-12">
					<div className="flex flex-col gap-10">
						<Image
							className="w-full brightness-0 invert"
							alt="Logo Lenzi e Barbosa advocacia"
							src={images.heroLogoLightBlue}
						/>

						<div className="flex flex-col gap-2 text-end">
							<Title className="text-zinc-300 text-2xl font-semibold">
								Protegendo Seus Direitos com Integridade e Dedicação
							</Title>
							<Text className="text-zinc-400 text-md">
								No escritório Lenzi e Barbosa, trabalhamos com profissionalismo
								e respeito, oferecendo soluções jurídicas personalizadas para
								cada cliente.
							</Text>
						</div>
					</div>

					<div className="flex gap-8">
						<Button
							size="lg"
							variant="ghost"
							className="border-zinc- text-zinc-200"
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
