import { Container } from "@/components/_ui/Container";
import { Navbar } from "@/components/_ui/Navbar";
import { Button } from "@/components/ui/button";
import images from "@/contants/images";
import Image from "next/image";

const img1 = images.heroImage;
const img2 = images.logoCircleGradient;

export function Hero() {
	return (
		<Container className="p-0 pt-8 lg:pt-16 relative overflow-hidden !max-h-[1200px]">
			{/* Imagem de fundo */}
			<Image
				src={images.heroBgTransparent}
				alt="Escritório Lenzi e Barbosa"
				fill
				className="hidden md:block object-cover absolute top-0 left-0 z-0 max-h-[1200px]"
			/>

			{/* Gradiente de fundo */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-zinc-100 z-10 max-h-[1200px]" />

			{/* Conteúdo principal */}
			<div
				id="hero-card"
				className="relative z-20 flex flex-col lg:flex-row items-center justify-between mt-12 md:mt-20 lg:mt-32 bg-zinc-50/70 rounded-md p-8 xl:p-16 lg:p-20 gap-12 mx-auto max-w-7xl pb-80 max-md:min-h-[80vh] max-h-[1200px]"
			>
				{/* Coluna de texto */}
				<div className="lg:w-1/2 space-y-8 h-full flex flex-col justify-center max-lg:items-center">
					{/* Texto pequeno no topo */}
					<p className="text-xs text-blue-400 mb-2 text-center lg:text-left">
						Escritório de Advocacia
					</p>

					{/* Título principal */}
					<h1 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 text-center lg:text-left max-w-lg">
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
						<Button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition duration-300">
							Conheça Nossos Serviços
						</Button>
						<Button className="bg-transparent hover:bg-blue-400 hover:text-white text-blue-400 font-bold py-2 px-6 rounded-full border-2 border-blue-400 transition duration-300">
							Agende uma Consulta
						</Button>
					</div>

					{/* Texto pequeno na base */}
					<p className="text-xs text-blue-300 mt-4 text-center lg:text-left hidden lg:block">
						Atendimento personalizado e eficiente
					</p>
				</div>

				<Image
					src={img2}
					alt="Logo Lenzi e Barbosa"
					width={100}
					height={100}
					className="object-contain absolute top-8 right-8 -z-10 hidden lg:block"
				/>

				<div className="lg:hidden w-full h-[300px] sm:h-[440px] absolute bottom-0">
					<Image
						src={images.heroBgTransparentMobile}
						alt="Escritório Lenzi e Barbosa"
						fill
						className="lg:hidden bottom-0 rounded-lg shadow-2xl object-contain"
					/>
				</div>

				<Image
					src={images.heroBgTransparent}
					alt="Escritório Lenzi e Barbosa"
					fill
					className="hidden lg:block rounded-lg shadow-2xl object-contain absolute top-0 left-0 -z-10"
				/>
			</div>
		</Container>
	);
}
