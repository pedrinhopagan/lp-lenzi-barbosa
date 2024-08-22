import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
	children?: React.ReactNode;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
	({ children, as: Component = "h1", className, ...props }, ref) => {
		return (
			<Component
				ref={ref}
				className={cn("text-base/4 font-medium text-slate-800", className)}
				{...props}
			>
				{children}
			</Component>
		);
	},
);
Title.displayName = "Title";

export { Title };
