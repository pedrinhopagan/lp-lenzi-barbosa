import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/_ui/Navbar";
import { BackToTop } from "@/components/_ui/BackToTop";
import { WppButton } from "@/components/_ui/WppButton";
import { Footer } from "@/components/_ui/Footer";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-main",
	weight: ["400"],
});
const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-alt",
	weight: ["400", "700"],
});
export const metadata: Metadata = {
	title: "Lenzi e Barbosa - Advocacia",
	description: "Escritório de advocacia com mais de 10 anos de experiência.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${playfair.variable} ${montserrat.variable} font-alt bg-zinc-100 antialiased overflow-x-hidden`}
			>
				<Navbar />
				{children}
				{/* <Analytics /> */}
				<Footer />
				<BackToTop />
				<WppButton />
			</body>
		</html>
	);
}
