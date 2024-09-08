import images from "./images";

// -------------------------------------------------------------------------------------------------
// ----------------------------------- NavLinks ---------------------------------------------------
// -------------------------------------------------------------------------------------------------

export const PHONE_NUMBER = "5519989061324";

export const navLinks = [
	{ id: "hero", name: "Início" },
	{ id: "about", name: "Sobre" },
	{ id: "services", name: "Áreas de atuação" },
	{ id: "testimonials", name: "Depoimentos" },
	{ id: "contact", name: "Contato" },
];

// -------------------------------------------------------------------------------------------------
// ----------------------------------- Lawyers ---------------------------------------------------
// -------------------------------------------------------------------------------------------------

export const lawyers = [
	{
		name: "Mirella Lenzi",
		title: "Advogada especializada em Direito Civil e Empresarial",
		description:
			"Dra. Mirella Lenzi é uma advogada com mais de 10 anos de experiência, conhecida por sua abordagem estratégica em casos complexos.",
		image: images.aboutMirella,
		specialties: [
			"Direito Civil",
			"Direito Empresarial",
			"Consultoria Jurídica",
		],
		education: [
			"Graduação em Direito - USP",
			"Mestrado em Direito Empresarial - FGV",
			"Especialização em Contratos Internacionais - Harvard Law School",
		],
		expertise: [
			"Contratos e Direito Societário",
			"Fusões e Aquisições",
			"Compliance e Governança",
			"Resolução de Disputas",
		],
	},
	{
		name: "Amanda Barbosa",
		title: "Especialista em Direito do Trabalho e Previdenciário",
		description:
			"Dra. Amanda Barbosa é reconhecida por sua abordagem humanizada e soluções inovadoras em casos trabalhistas e previdenciários.",
		image: images.aboutAmanda,
		specialties: [
			"Direito do Trabalho",
			"Direito Previdenciário",
			"Resolução de Conflitos",
		],
		education: [
			"Graduação em Direito - UFRJ",
			"Especialização em Direito do Trabalho - PUC-RJ",
			"Mestrado em Direito Previdenciário - USP",
		],
		expertise: [
			"Direito Trabalhista",
			"Direito Previdenciário",
			"Negociações Sindicais",
			"Compliance e Auditoria",
		],
	},
];

// -------------------------------------------------------------------------------------------------
// ----------------------------------- Testimonials ----------------------------------------------
// -------------------------------------------------------------------------------------------------

export const testimonials = [
	{
		text: "O atendimento do escritório Lenzi e Barbosa superou minhas expectativas. Sempre disponíveis e com soluções claras e eficazes, eles foram fundamentais para o sucesso do meu processo.",
		author: "Carolina M.",
		role: "Cliente de Direito Civil",
	},
	{
		text: "Mirella Lenzi e Amanda Barbosa foram extremamente profissionais e atenciosas durante todo o processo. Me senti seguro e bem representado em cada etapa.",
		author: "João P.",
		role: "Cliente de Direito Empresarial",
	},
	{
		text: "A equipe do escritório é muito dedicada e competente. Resolvi minha questão trabalhista de maneira rápida e eficiente, graças à sua expertise.",
		author: "Lucas F.",
		role: "Cliente de Direito Trabalhista",
	},
	{
		text: "A abordagem personalizada e o conhecimento jurídico profundo da Lenzi e Barbosa foram cruciais para o sucesso do meu caso de direito de família. Recomendo fortemente seus serviços.",
		author: "Mariana S.",
		role: "Cliente de Direito de Família",
	},
	{
		text: "Enfrentei um processo complexo de propriedade intelectual, mas a equipe da Lenzi e Barbosa simplificou tudo. Sua expertise nessa área é verdadeiramente impressionante.",
		author: "Rafael T.",
		role: "Cliente de Direito de Propriedade Intelectual",
	},
	{
		text: "Quando precisei de assistência em direito imobiliário, a Lenzi e Barbosa foi excepcional. Sua atenção aos detalhes e comunicação clara tornaram todo o processo tranquilo.",
		author: "Beatriz L.",
		role: "Cliente de Direito Imobiliário",
	},
];
