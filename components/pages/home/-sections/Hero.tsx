import { Container } from "@/components/_ui/Container";
import { Navbar } from "@/components/_ui/Navbar";
import { Button } from "@/components/ui/button";
import images from "@/contants/images";
import Image from "next/image";

const img1 = images.heroImage;
const img2 = images.logoCircleGradient;

export function Hero() {
	return (
		<Container className="pt-16 min-h-[95vh] relative overflow-hidden">
			{/* Gradiente de fundo */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-zinc-100 z-10"></div>
			
			{/* Conteúdo principal */}
			<div id="hero-card" className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full mt-12 md:mt-20 lg:mt-32 bg-zinc-50 rounded-md p-12 lg:p-16 gap-12">
				{/* Coluna de texto */}
				<div className="lg:w-1/2 space-y-8 h-full flex flex-col justify-center">
					{/* Texto pequeno no topo */}
					<p className="text-xs text-blue-400 mb-2 text-center lg:text-left">Escritório de Advocacia</p>
					
					{/* Título principal */}
					<h1 className="text-3xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 text-center lg:text-left">
						Protegendo Seus Direitos com Integridade e Dedicação
					</h1>
					
					{/* Descrição */}
					<p className="text-lg lg:text-xl text-blue-500 text-center lg:text-left">
						No escritório Lenzi e Barbosa, trabalhamos com profissionalismo e respeito, oferecendo soluções jurídicas personalizadas para cada cliente.
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
					<p className="text-xs text-blue-300 mt-4 text-center lg:text-left">Atendimento personalizado e eficiente</p>
				</div>
				
				{/* Coluna da imagem */}
				<div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col items-center justify-center h-full">
					{/* Texto pequeno no topo */}
					<p className="text-xs text-blue-400 mb-4 text-center lg:text-right w-full">Experiência e Confiança</p>
					
					<div className="relative w-full h-[440px]">
						<Image
							src={img1}
							alt="Escritório Lenzi e Barbosa"
							fill
							className="rounded-lg shadow-2xl object-cover"
						/>
						<div className="absolute top-4 left-4 w-32 h-24">
							<Image
								src={img2}
								alt="Logo Lenzi e Barbosa"
								fill
								className="object-contain"
							/>
						</div>
					</div>
					
					{/* Texto pequeno na base */}
					<p className="text-xs text-blue-300 mt-4 text-center lg:text-right w-full">Compromisso com a excelência jurídica</p>
				</div>
			</div>
		</Container>
	)
}