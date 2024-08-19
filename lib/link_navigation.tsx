"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface LinkNavigationProps {
	id: string;
	children?: ReactNode;
	className?: string;
}

export function LinkNavigation(props: LinkNavigationProps) {
	const router = useRouter();
	return (
		<Link
			href="#"
			onClick={() => {
				router.push(`#${props.id}`);
			}}
			className={props.className}
		>
			{props.children}
		</Link>
	);
}
