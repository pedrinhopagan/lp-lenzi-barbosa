import { Hero } from "./-sections/Hero";
import { About } from "./-sections/About";
import { Services } from "./-sections/Services";
import { Testimonials } from "./-sections/Testimonials";
import { Contact } from "./-sections/Contact";

export function HomePage() {
	return (
		<main className="home-page">
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<Contact />
		</main>
	);
}
