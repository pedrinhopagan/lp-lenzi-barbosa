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
				"element-to-navigate section-spacing w-full mx-auto",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}
