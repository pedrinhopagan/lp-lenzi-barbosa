import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Briefcase, X } from "lucide-react";

export function MirellaDialogContent() {
	return (
		<DialogContent className="max-w-2xl bg-zinc-50 max-h-[80vh] overflow-y-auto">
			<DialogHeader className="bg-zinc-50 z-10 pb-4 sticky top-0 w-full">
				<DialogTitle>Mirella Lenzi</DialogTitle>
				<DialogDescription>
					Advogada especializada em Direito Civil e Empresarial
				</DialogDescription>
			</DialogHeader>

			<p className="text-blue-400">
				Dra. Mirella Lenzi é uma advogada com mais de 10 anos de experiência,
				conhecida por sua abordagem estratégica em casos complexos.
			</p>
			<h4 className="text-lg font-semibold text-blue-500">Formação</h4>
			<ul className="list-disc list-inside text-blue-400">
				<li>Graduação em Direito - USP</li>
				<li>Mestrado em Direito Empresarial - FGV</li>
				<li>Especialização em Contratos Internacionais - Harvard Law School</li>
			</ul>
			<h4 className="text-lg font-semibold text-blue-500">Áreas de Atuação</h4>
			<ul className="grid grid-cols-2 gap-2">
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Contratos e
					Direito Societário
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Fusões e
					Aquisições
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Compliance e
					Governança
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Resolução de
					Disputas
				</li>
			</ul>
		</DialogContent>
	);
}

export function AmandaDialogContent() {
	return (
		<div className="space-y-4">
			<DialogHeader className="bg-zinc-50 z-10 pb-4 sticky top-0">
				<div className="flex justify-between items-center">
					<DialogTitle>Amanda Barbosa</DialogTitle>
					<DialogClose className="rounded-full hover:bg-zinc-200 p-2">
						<X className="h-4 w-4" />
					</DialogClose>
				</div>
				<DialogDescription>
					Especialista em Direito do Trabalho e Previdenciário
				</DialogDescription>
			</DialogHeader>

			<p className="text-blue-400">
				Dra. Amanda Barbosa é reconhecida por sua abordagem humanizada e
				soluções inovadoras em casos trabalhistas e previdenciários.
			</p>
			<h4 className="text-lg font-semibold text-blue-500">Formação</h4>
			<ul className="list-disc list-inside text-blue-400">
				<li>Graduação em Direito - UFRJ</li>
				<li>Especialização em Direito do Trabalho - PUC-RJ</li>
				<li>Mestrado em Direito Previdenciário - USP</li>
			</ul>
			<h4 className="text-lg font-semibold text-blue-500">Áreas de Atuação</h4>
			<ul className="grid grid-cols-2 gap-2">
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Direito
					Trabalhista
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Direito
					Previdenciário
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Negociações
					Sindicais
				</li>
				<li className="flex items-center">
					<Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Compliance e
					Auditoria
				</li>
			</ul>
		</div>
	);
}
