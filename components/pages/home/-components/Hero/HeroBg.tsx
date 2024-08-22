import Image from "next/image";
import images from "@/contants/images";

export function HeroBg() {
	return (
		<div className="relative w-screen h-full min-h-screen min-w-[100vw] opacity-80">
			<Image
				src={images.heroImage}
				alt="Hero"
				className="object-cover absolute left-0 right-0 w-full max-h-screen"
			/>
			<div className="absolute left-0 h-full w-full bg-[#00000060] transition-all duration-300" />
			<div className="absolute h-full w-[170%] bg-[#00000030] transition-all duration-300 rotate-45 -left-full" />
		</div>
	);
}
