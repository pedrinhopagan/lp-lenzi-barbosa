import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className, ...props }: Props) {
	return (
		<section
			className={cn(
				"element-to-navigate section-spacing w-full min-h-[900px] mx-auto",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}
