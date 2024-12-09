import {
	Scale,
	Briefcase,
	Users,
	Lightbulb,
	Heart,
	Home,
	Globe,
	Star,
	Brain,
	ShoppingCart,
	Shield,
} from "lucide-react";
import images from "./images";

// -------------------------------------------------------------------------------------------------
// ----------------------------------- Crucial Information -----------------------------------------
// -------------------------------------------------------------------------------------------------

export const PHONE_NUMBER = "5519989061324";

// -------------------------------------------------------------------------------------------------
// ----------------------------------- EmailJS Config ----------------------------------------------
// -------------------------------------------------------------------------------------------------

export const emailJSConfig = {
	serviceID: "service_id",
	templateID: "template_id",
	publicKey: "public_key",
};

// -------------------------------------------------------------------------------------------------
// ----------------------------------- NavLinks ---------------------------------------------------
// -------------------------------------------------------------------------------------------------

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
		name: "Mirella Marson Lenzi",
		title: "Advogada especializada em Direito Penal e Defesa da Mulher",
		description:
			"Dra. Mirella Marson Lenzi é advogada formada em Direito pela PUC-Campinas e pós graduada em Direito Penal e Processo Penal pela Escola Brasileira de Direito.",
		image: images.aboutMirella,
		specialties: [
			"Direito Criminal",
			"Consultoria em Defesa da Mulher",
			"Direito do Consumidor",
		],
		education: [
			"Graduação em Direito - PUC-Campinas",
			"Especialização em Direito Penal e Processo Penal - Escola Brasileira de Direito",
		],
		expertise: [
			"Direito Criminal",
			"Consultoria em Defesa da Mulher",
			"Direito do Consumidor",
			"Direito de Família",
			"Direito Civil",
			"Direito Empresarial",
		],
	},
	{
		name: "Amanda Barbosa",
		title: "Especialista em Direito do Trabalho e Previdenciário",
		description:
			"Dra. Amanda Barbosa é advogada formada em Direito pela PUC-Campinas e pós graduada em Direito Processual Civil pela PUC-SP.",
		image: images.aboutAmanda,
		specialties: ["Direito da Saúde", "Direito Civil", "Direito Médico"],
		education: [
			"Graduação em Direito - PUC-Campinas",
			"Especialização em Direito Processual Civil - PUC-SP",
			"Cursos de Extensão em Direito Digital e Proteção de Dados - PUC-SP",
			"Direito para Startups - FGV",
		],
		expertise: [
			"Direito da Saúde",
			"Direito Civil",
			"Direito Médico",
			"Direito Digital",
			"Direito de Proteção de Dados",
			"Propriedade Intelectual",
		],
	},
];

// -------------------------------------------------------------------------------------------------
// ----------------------------------- Services --------------------------------------------------
// -------------------------------------------------------------------------------------------------

export const diferenciais = [
	{
		icon: Globe,
		title: "Atendimento à Distância",
		description:
			"Consultoria e acompanhamento jurídico remoto para sua comodidade.",
	},
	{
		icon: Star,
		title: "Experiência Especializada",
		description:
			"Profissionais com vasta experiência em casos complexos e abordagem humanizada.",
	},
	{
		icon: Users,
		title: "Atendimento Personalizado",
		description:
			"Soluções jurídicas adaptadas às necessidades específicas de cada cliente.",
	},
];

export const areasAtuacao = [
	{
		icon: Heart,
		title: "Direito Médico e da Saúde",
		description:
			"Assistência em questões relacionadas à saúde e medicina, incluindo defesa de médicos e enfermeiros.",
	},
	{
		icon: Shield,
		title: "Direito Penal",
		description:
			"Assessoria em questões criminais, defesa de acusados e defesa de vítimas.",
	},
	{
		icon: Scale,
		title: "Direito Civil",
		description:
			"Consultoria e resolução de disputas contratuais, danos morais e questões de responsabilidade civil.",
	},
	{
		icon: Users,
		title: "Direito de Família",
		description:
			"Acompanhamento em processos de divórcio, guarda, pensão alimentícia e adoção.",
	},
	{
		icon: Brain,
		title: "Propriedade Intelectual",
		description:
			"Assistência em questões relacionadas à propriedade intelectual, patentes e marcas.",
	},
	{
		icon: ShoppingCart,
		title: "Direito do Consumidor",
		description:
			"Assistência em questões relacionadas ao consumo de produtos e serviços, incluindo defesa de consumidores e reclamações.",
	},
];

// -------------------------------------------------------------------------------------------------
// ----------------------------------- Testimonials ----------------------------------------------
// -------------------------------------------------------------------------------------------------

export const testimonials = [
	{
		text: "Atendimento de alta qualidade! Fui muito bem recepcionado desde o início do meu processo. Me senti muito seguro e amparado! Recomendo fortemente!",
		author: "Pedro Antônio Pagan",
		role: "Cliente de Direito Civil",
		source: "Google Reviews",
	},
	{
		text: "Excelentes profissionais!! Foram muito atenciosas e me senti seguro o tempo todo de que estava em boas mãos.",
		author: "Victor Marcelino Nunes",
		role: "Cliente de Direito Penal",
		source: "Google Reviews",
	},
	{
		text: "Profissionais super qualificadas, educadas e atenciosas. Ótimo atendimento!",
		author: "Beatriz Avancini",
		role: "Cliente de Direito Trabalhista",
		source: "Google Reviews",
	},
	{
		text: "A Dra. Amanda é uma profissional extremamente qualificada e preparada nas suas atuações, o que reflete em um trabalho excelente e confiável. Recomendo.",
		author: "Eduardo Ferraz",
		role: "Cliente de Direito da Saúde",
		source: "Google Reviews",
	},
	{
		text: "Ótimas advogadas, atendimento excelente. São super competentes e resolveram meu problema!",
		author: "Beatriz Pereira Vieira",
		role: "Cliente de Direito de Propriedade Intelectual",
		source: "Google Reviews",
	},
	{
		text: "Excelente escritório. As advogadas são atenciosas e profissionais. Recomendo..",
		author: "Natália Vollet",
		role: "Cliente de Direito do Consumidor",
		source: "Google Reviews",
	},
];
