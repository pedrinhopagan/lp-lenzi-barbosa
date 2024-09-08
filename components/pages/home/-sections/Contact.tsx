"use client";

import { Container } from "@/components/_ui/Container";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
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
		<Container className="py-12 lg:py-24 bg-gradient-to-b from-zinc-50 to-zinc-100">
			<span id="contact" className="element-to-navigate" />

			<div className="max-w-3xl mx-auto">
				<h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 text-center">
					Entre em Contato
				</h2>

				<p className="text-blue-600 text-center mb-12">
					Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em
					contato o mais breve possível.
				</p>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 lg:space-y-8"
					>
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
							className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
						>
							Enviar Mensagem
						</Button>
					</form>
				</Form>
			</div>
		</Container>
	);
}
