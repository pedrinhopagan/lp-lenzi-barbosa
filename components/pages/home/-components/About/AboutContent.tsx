import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import images from "@/contants/images";

export function AboutContent() {
	return (
		<Container className=" bg-white">
			{/* Header */}
			<div className="flex flex-col gap-10 px-6 py-12">
				{/* Title */}
				<div>
					<Title className="font-alt text-4xl">QUEM SOMOS</Title>
				</div>

				{/* Images */}
				<div className="flex flex-col lg:flex-row justify-evenly gap-10 pt-32">
					{/* Mirella */}
					<div className="flex flex-col gap-8 items-center justify-center">
						{/* Image */}
						<Image
							className="object-cover size-64 rounded-full z-10"
							src={images.aboutMirella}
							alt="Amanda"
						/>

						{/* Name */}
						<div className="flex flex-col items-center gap-2">
							<Title className="text-2xl">Mirella Marson Lenzi</Title>
							<Text className="text-center">
								Especialista em Direito Penal e Processo Penal
							</Text>
							<Button variant="ghost">Conheça Mais</Button>
						</div>
					</div>

					{/* Amanda */}
					{/* Image */}
					<div className="flex flex-col gap-8 items-center justify-center">
						{/* Image */}
						<Image
							className="object-cover size-64 rounded-full z-10"
							src={images.aboutAmanda}
							alt="Amanda"
						/>

						{/* Name */}
						<div className="flex flex-col items-center gap-2">
							<Title className="text-2xl">Amanda Liza Barbosa</Title>
							<Text className="text-center">
								Especialista em Direito Civil e Processo Civil
							</Text>
							<Button variant="ghost">Conheça Mais</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
