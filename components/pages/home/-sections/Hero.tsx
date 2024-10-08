import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import images from "@/contants/images";
import { LinkNavigation } from "@/lib/link_navigation";
import Image from "next/image";
import { WaveDivider } from "../-components/WaveDivider";

const logo = images.logoCircleGradient;

export function Hero() {
	return (
		<Container
			id="hero"
			className="p-0 pt-8 relative overflow-hidden !max-h-[1200px] lg:min-h-[900px] h-fit"
		>
			{/* WaveDivider */}
			<WaveDivider position="bottom" />

			{/* Imagem de fundo transparente */}
			<Image
				src={images.heroBgTransparent}
				alt="Escritório Lenzi e Barbosa"
				fill
				className="hidden md:block object-cover absolute top-0 left-0 z-0 max-h-[1200px]"
			/>

			{/* Gradiente de fundo */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-zinc-100 z-10 max-h-[1200px]" />

			{/* Conteúdo principal */}
			<div
				id="hero-card"
				className="relative z-20 flex flex-col lg:flex-row items-center justify-between mt-12 md:mt-20 lg:mt-32 bg-zinc-50/70 rounded-md p-8 lg:p-6 xl:p-16 gap-12 mx-auto max-w-7xl pb-80 sm:pb-[440px] max-md:min-h-[80vh] max-h-[1200px] shadow-md"
			>
				{/* Coluna de texto */}
				<div className="lg:w-1/2 gap-8 h-full flex flex-col justify-center max-lg:items-center">
					{/* Texto pequeno no topo */}
					<p className="text-xs text-blue-400 mb-2 text-center lg:text-left hidden md:block">
						Escritório de Advocacia
					</p>

					{/* Título principal */}
					<h1 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 text-center lg:text-left max-w-lg pb-1">
						Protegendo Seus Direitos com Integridade e Dedicação
					</h1>

					{/* Descrição */}
					<p className="text-lg lg:text-xl text-blue-500 text-center lg:text-left max-w-lg">
						No escritório Lenzi e Barbosa, trabalhamos com profissionalismo e
						respeito, oferecendo soluções jurídicas personalizadas para cada
						cliente.
					</p>

					{/* Botões de ação */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<Button
							asChild
							variant="default"
							className=" bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition duration-300"
						>
							<LinkNavigation id="contact">Agende uma Consulta</LinkNavigation>
						</Button>
						<Button
							asChild
							variant="outline"
							className="bg-transparent hover:bg-blue-400 hover:text-white text-blue-400 font-bold py-2 px-6 rounded-full border-2 border-blue-400 transition duration-300"
						>
							<LinkNavigation id="services">
								Conheça Nossos Serviços
							</LinkNavigation>
						</Button>
					</div>

					{/* Texto pequeno na base */}
					<p className="text-xs text-blue-300 mt-4 text-center lg:text-left hidden lg:block">
						Atendimento personalizado e eficiente
					</p>
				</div>

				{/* Logo */}
				<Image
					src={logo}
					alt="Logo Lenzi e Barbosa"
					width={100}
					height={100}
					className="object-contain absolute top-8 right-8 -z-10 hidden lg:block"
				/>

				{/* Imagem mobile */}
				<div className="lg:hidden w-full h-[300px] sm:h-[440px] absolute bottom-0">
					<Image
						src={images.heroBgTransparentMobile}
						alt="Escritório Lenzi e Barbosa"
						fill
						className="lg:hidden bottom-0 rounded-lg object-contain"
					/>
				</div>

				{/* Imagem desktop */}
				<Image
					src={images.heroBgTransparent}
					alt="Escritório Lenzi e Barbosa"
					fill
					className="hidden lg:block rounded-lg object-contain absolute top-0 left-0 -z-10"
				/>
			</div>
		</Container>
	);
}
