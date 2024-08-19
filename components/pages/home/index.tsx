import { Hero } from "./hero";
import Image from "next/image";
import images from "@/contants/images";

export function HomePage() {
	return (
		<>
			{/* BG Image */}
			<div className="absolute left-0 right-0 w-screen h-fit min-w-[100vw] opacity-80">
				<Image
					src={images.heroImage}
					alt="Hero"
					className="object-contain absolute left-0 right-0 w-full"
				/>
				<div className="absolute left-0 h-full w-full bg-[#00000040] transition-all duration-300" />
			</div>

			{/* Sections */}
			<Hero />
		</>
	);
}
