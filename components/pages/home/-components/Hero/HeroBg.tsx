import Image from "next/image";
import images from "@/contants/images";

export function HeroBg() {
	return (
		<div className="relative w-screen h-full min-h-screen min-w-[100vw] opacity-80 overflow-x-hidden">
			<Image
				src={images.heroImage}
				alt="Hero"
				className="object-cover object-[61%] h-full absolute left-0 right-0 w-full max-h-screen"
			/>
			<div className="absolute left-0 h-full w-full bg-[#00000060] transition-all duration-300 lg:hidden" />
			<div className="absolute pointer-events-none h-[220%] w-[170%] bg-[#00000010] transition-all duration-300 rotate-45 -left-[110%]" />
		</div>
	);
}
