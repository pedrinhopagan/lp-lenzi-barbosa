import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className }: Props) {
	return (
		<section
			className={cn(
				"max-w-screen-xl section-spacing w-full min-h-[900px]",
				className,
			)}
		>
			{children}
		</section>
	);
}
