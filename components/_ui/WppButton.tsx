"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { PHONE_NUMBER } from "@/contants/home-page";

export function WppButton() {
	return (
		<a
			href={`https://wa.me/${PHONE_NUMBER}`}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-4 left-4 z-50"
		>
			<Button
				className="bg-gradient-to-bl from-green-400 to-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
				size="icon"
			>
				<MessageCircle size={24} />
			</Button>
		</a>
	);
}
