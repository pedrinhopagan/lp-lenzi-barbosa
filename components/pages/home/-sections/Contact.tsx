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
} from "lucide-react";

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

export function Contact() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nome: "",
			email: "",
			telefone: "",
			mensagem: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// Aqui você pode adicionar a lógica para enviar o formulário
	}

	return (
		<Container className="py-16 lg:py-24 bg-gradient-to-b from-zinc-100 to-zinc-50">
			<span id="contact" className="element-to-navigate" />

			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
				<div className="lg:w-1/2 space-y-8">
					<h2 className="text-5xl lg:text-6xl font-bold text-blue-700 ">
						Vamos conversar sobre o seu caso
					</h2>
					<p className="text-xl text-blue-600">
						Estamos aqui para ajudar. Entre em contato conosco e descubra como
						podemos auxiliar você.
					</p>
					<div className="space-y-6">
						<div className="flex items-center space-x-4">
							<Mail className="w-6 h-6 text-blue-500" />
							<span className="text-lg text-blue-700">
								contato@lenziebarbosa.com
							</span>
						</div>
						<div className="flex items-center space-x-4">
							<Phone className="w-6 h-6 text-blue-500" />
							<span className="text-lg text-blue-700">(00) 1234-5678</span>
						</div>
						<div className="flex items-center space-x-4">
							<MapPin className="w-6 h-6 text-blue-500" />
							<span className="text-lg text-blue-700">
								Rua Exemplo, 123 - Cidade, Estado
							</span>
						</div>
					</div>
					<div className="flex space-x-6">
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 transition-colors"
						>
							<Facebook className="w-8 h-8" />
						</a>
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 transition-colors"
						>
							<Instagram className="w-8 h-8" />
						</a>
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 transition-colors"
						>
							<Linkedin className="w-8 h-8" />
						</a>
					</div>
				</div>

				<div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
					<h3 className="text-2xl font-bold mb-6 text-blue-700">
						Envie-nos uma mensagem
					</h3>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="nome"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input placeholder="Seu nome completo" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>E-mail</FormLabel>
										<FormControl>
											<Input placeholder="seu@email.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="telefone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Telefone</FormLabel>
										<FormControl>
											<Input placeholder="(00) 00000-0000" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="mensagem"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mensagem</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Digite sua mensagem aqui"
												className="resize-none"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
							>
								Enviar Mensagem
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</Container>
	);
}
