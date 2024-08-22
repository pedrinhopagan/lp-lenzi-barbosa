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
				<div className="flex flex-col justify-center gap-12 w-full max-w-[470px] -translate-x-12">
					<div className="flex flex-col gap-10">
						<Image
							className="w-full brightness-0 invert"
							alt="Logo Lenzi e Barbosa advocacia"
							src={images.heroLogoLightBlue}
						/>

						<div className="flex flex-col gap-2">
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
						<Button variant="outline" className="border-zinc- text-zinc-200">
							Conheça Nossos Serviços
						</Button>

						<Button>Agente uma Consulta</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
