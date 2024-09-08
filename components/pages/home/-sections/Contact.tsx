"use client";

import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Instagram,
	Linkedin,
	MessageCircle,
	Globe,
} from "lucide-react";
import { PHONE_NUMBER } from "@/contants/home-page";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "@/contants/home-page";
import { useState } from "react";

// Definição do esquema de validação do formulário
const formSchema = z.object({
	nome: z.string().min(2, {
		message: "O nome deve ter pelo menos 2 caracteres.",
	}),
	email: z.string().email({
		message: "Por favor, insira um endereço de e-mail válido.",
	}),
	telefone: z.string().min(10, {
		message: "Por favor, insira um número de telefone válido.",
	}),
	mensagem: z.string().min(10, {
		message: "A mensagem deve ter pelo menos 10 caracteres.",
	}),
});

// Componente principal da seção de Contato
export function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Configuração do formulário usando react-hook-form e zod
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nome: "",
			email: "",
			telefone: "",
			mensagem: "",
		},
	});

	// Função atualizada para lidar com o envio do formulário
	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		emailjs
			.send(
				emailJSConfig.serviceID,
				emailJSConfig.templateID,
				{
					from_name: values.nome,
					from_email: values.email,
					phone: values.telefone,
					message: values.mensagem,
				},
				emailJSConfig.publicKey,
			)
			.then((response) => {
				console.log(
					"E-mail enviado com sucesso!",
					response.status,
					response.text,
				);
				form.reset();
				// Aqui você pode adicionar uma notificação de sucesso
			})
			.catch((err) => {
				console.error("Erro ao enviar e-mail:", err);
				// Aqui você pode adicionar uma notificação de erro
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	}

	return (
		<Container className="relative py-16 lg:py-24 bg-gradient-to-b from-blue-400 to-blue-900">
			<span id="contact" className="element-to-navigate" />

			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
				{/* Coluna de informações de contato */}
				<div className="lg:w-1/2 space-y-8">
					<h2 className="text-5xl lg:text-6xl font-bold text-white">
						Vamos conversar sobre o seu caso
					</h2>

					<p className="text-xl text-blue-200">
						Estamos aqui para ajudar. Entre em contato conosco e descubra como
						podemos auxiliar você.
					</p>

					<div className="space-y-6">
						{/* Informações de contato */}
						<div className="flex items-center space-x-4">
							<Mail className="w-6 h-6 text-blue-300" />
							<a
								href="mailto:contato@lenziebarbosa.com"
								className="text-lg text-blue-200 hover:underline"
							>
								contato@lenziebarbosa.com
							</a>
						</div>

						<div className="flex items-center space-x-4">
							<Phone className="w-6 h-6 text-blue-300" />
							<a
								href={`tel:${PHONE_NUMBER}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg text-blue-200 hover:underline"
							>
								{PHONE_NUMBER.replace(
									/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/,
									"+$1 ($2) $3 $4-$5",
								)}
							</a>
						</div>

						<div className="flex flex-col space-y-2">
							<div className="flex items-center space-x-4">
								<MapPin className="w-6 h-6 text-blue-300 flex-shrink-0" />
								<span className="text-lg text-blue-200">
									Atendimento presencial em{" "}
									<span className="font-bold text-white">Amparo</span>,{" "}
									<span className="font-bold text-white">Campinas</span> e
									região
								</span>
							</div>

							<div className="flex items-center space-x-4">
								<Globe className="w-6 h-6 text-blue-300 flex-shrink-0" />
								<span className="text-lg text-blue-200">
									Atendimento virtual para todo o{" "}
									<span className="font-bold text-white">Brasil</span>
								</span>
							</div>
						</div>
					</div>

					{/* Botões de ação */}
					<div className="flex space-x-4 mt-6">
						<Button
							asChild
							className="flex-1 bg-green-500 text-white hover:bg-green-600 font-semibold py-2 px-4 rounded-md transition duration-300"
						>
							<a
								href={`https://wa.me/${PHONE_NUMBER}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle className="w-5 h-5 mr-2 inline-block" />
								WhatsApp
							</a>
						</Button>

						<Button
							asChild
							variant="ghost"
							className="flex-1 text-blue-300 hover:text-blue-700 border border-blue-300 hover:border-blue-100 font-semibold py-2 px-4 rounded-md transition duration-300 group"
						>
							<a
								href="https://www.instagram.com/lenziebarbosa/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram className="w-5 h-5 mr-2 inline-block" />
								Instagram
							</a>
						</Button>
					</div>
				</div>

				{/* Coluna do formulário de contato */}
				<div className="lg:w-1/2 bg-blue-800/30 backdrop-blur-sm p-8 rounded-lg shadow-lg">
					<h3 className="text-2xl font-bold mb-6 text-white">
						Envie-nos uma mensagem
					</h3>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							{/* Campo de nome */}
							<FormField
								control={form.control}
								name="nome"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Nome</FormLabel>
										<FormControl>
											<Input
												placeholder="Seu nome completo"
												{...field}
												className="bg-white/90 text-blue-900 placeholder-blue-400"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Campo de e-mail */}
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">E-mail</FormLabel>
										<FormControl>
											<Input
												placeholder="seu@email.com"
												{...field}
												className="bg-white/90 text-blue-900 placeholder-blue-400"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Campo de telefone */}
							<FormField
								control={form.control}
								name="telefone"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Telefone</FormLabel>
										<FormControl>
											<Input
												placeholder="(00) 00000-0000"
												{...field}
												className="bg-white/90 text-blue-900 placeholder-blue-400"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Campo de mensagem */}
							<FormField
								control={form.control}
								name="mensagem"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white">Mensagem</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Digite sua mensagem aqui"
												className="resize-none bg-white/90 text-blue-900 placeholder-blue-400"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Botão de envio atualizado */}
							<Button
								type="submit"
								className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-3 px-4 rounded-md transition duration-300"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Enviando..." : "Enviar Mensagem"}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</Container>
	);
}
