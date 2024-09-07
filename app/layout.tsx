import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/_ui/Navbar";

const roboto = Roboto({
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
	description: "Página de ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${montserrat.variable} font-alt bg-zinc-100 antialiased overflow-x-hidden`}
			>
				<Navbar />
				{children}
				{/* <Analytics /> */}
				{/* <BackToTop /> */}
			</body>
		</html>
	);
}
