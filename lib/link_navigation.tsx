"use client";

interface LinkNavigationProps {
	id: string;
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export function LinkNavigation({
	id,
	className,
	children,
	onClick,
}: LinkNavigationProps) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		if (onClick) {
			onClick();
		}
	};

	return (
		<a href={`#${id}`} className={className} onClick={handleClick}>
			{children}
		</a>
	);
}
