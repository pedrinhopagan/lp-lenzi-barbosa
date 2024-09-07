import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className }: Props) {
	return (
		<section className={cn("section-spacing w-full min-h-[900px] max-w-[1980px] mx-auto", className)}>
			{children}
		</section>
	);
}
