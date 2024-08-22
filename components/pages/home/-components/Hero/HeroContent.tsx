import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";

export function HeroContent() {
	return (
		<Container className="absolute top-1/2 -translate-y-1/2">
			<div className="relative w-full h-[900px] flex items-center">
				<div className="flex flex-col justify-center gap-12 w-full max-w-[470px] -translate-x-12">
					<div className="flex flex-col gap-4">
						<Title className="text-zinc-100 text-4xl font-semibold">
							Protegendo Seus Direitos com Integridade e Dedicação
						</Title>
						<Text className="text-zinc-200 text-md">
							No escritório Lenzi e Barbosa, trabalhamos com profissionalismo e
							respeito, oferecendo soluções jurídicas personalizadas para cada
							cliente.
						</Text>
					</div>

					<div className="flex gap-8">
						<Button variant="outline" className="border-zinc-500 text-zinc-200">
							Conheça Nossos Serviços
						</Button>

						<Button>Agente uma Consulta</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
