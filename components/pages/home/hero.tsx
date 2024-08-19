import { Container } from "@/components/_ui/Container";
import images from "@/contants/images";
import Image from "next/image";

export function Hero() {
	return (
		<Container>
			<div className="relative w-full h-[900px]">
				<img
					src="/png/hero_logo.png"
					alt="Hero"
					className="absolute left-0 top-1/2 w-96"
				/>
			</div>
		</Container>
	);
}
