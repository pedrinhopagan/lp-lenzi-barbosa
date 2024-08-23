import { HomeComponents as Components } from "./-components";

export function HomePage() {
	return (
		<>
			<Components.Hero.Bg />
			<Components.Hero.Content />
			<Components.About.Content />
		</>
	);
}
