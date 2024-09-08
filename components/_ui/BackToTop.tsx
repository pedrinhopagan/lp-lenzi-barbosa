"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LinkNavigation } from "@/lib/link_navigation";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Mostra o botão quando a rolagem passar da metade da altura da janela
			if (window.scrollY > window.innerHeight / 2) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<LinkNavigation id="hero" className="fixed bottom-4 right-4 z-50">
			<Button
				variant="link"
				size="icon"
				className="rounded-full bg-blue-500 hover:bg-blue-600 text-white"
			>
				<ArrowUp size={20} />
			</Button>
		</LinkNavigation>
	);
}
