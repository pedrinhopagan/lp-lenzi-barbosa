import { Hero } from "./-sections/Hero";
import { About } from "./-sections/About";

export function HomePage() {
	return (
		<main className="home-page">
			<Hero />
			<About />
		</main>
	)
}