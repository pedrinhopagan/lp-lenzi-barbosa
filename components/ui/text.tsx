import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
	children?: React.ReactNode;
	as?: "p" | "span";
};

const Text = forwardRef<HTMLParagraphElement, TextProps>(
	({ children, as: Component = "p", className, ...props }, ref) => {
		return (
			<Component
				ref={ref}
				className={cn("text-sm text-slate-500", className)}
				{...props}
			>
				{children}
			</Component>
		);
	},
);
Text.displayName = "Text";

export { Text };
