"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface LinkNavigationProps {
	id: string;
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export function LinkNavigation({ id, className, children, onClick }: LinkNavigationProps) {
	const router = useRouter();
	return (
		<Link
			href={`/#${id}`}
			className={className}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
