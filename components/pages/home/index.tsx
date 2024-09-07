import { Hero } from "./-sections/Hero";
import { About } from "./-sections/About";
import { Services } from "./-sections/Services";

export function HomePage() {
	return (
		<main className="home-page">
			<Hero />
			<About />
			<Services />
		</main>
	)
}