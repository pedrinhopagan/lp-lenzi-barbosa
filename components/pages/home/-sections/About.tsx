import { Container } from "@/components/_ui/Container"
import { Button } from "@/components/ui/button"
import images from "@/contants/images"
import Link from "next/link"
import Image from "next/image"
import { Scale, Handshake, Award, Users, Lightbulb, Heart } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MirellaDialogContent, AmandaDialogContent } from "../-components/AboutDialogContent"	

export function About() {
  const imgMirella = images.aboutMirella
  const imgAmanda = images.aboutAmanda

  return (
    <Container className="py-24">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-500 text-center">
          Nossa Equipe, Seu Suporte Jurídico
        </h2>


        {/* Grid de perfis */}
        <div className="grid md:grid-cols-2 gap-16 mt-12 lg:mt-20 mb-16">
          {/* Perfil Mirella */}
          <div className="bg-zinc-50 p-8 rounded-lg shadow-lg">
            <Image
              src={imgMirella}
              alt="Mirella Lenzi"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-500 text-center">Mirella Lenzi</h3>
            <p className="text-blue-400 mb-6">
              Especialista em Direito Civil e Empresarial, com mais de 10 anos de experiência em consultoria jurídica para empresas de diversos setores.
            </p>
            <ul className="text-blue-400">
              <li className="mb-2 flex items-center"><Scale className="mr-2 w-5 h-5 text-blue-500" /> Direito Civil</li>
              <li className="mb-2 flex items-center"><Scale className="mr-2 w-5 h-5 text-blue-500" /> Direito Empresarial</li>
              <li className="flex items-center"><Handshake className="mr-2 w-5 h-5 text-blue-500" /> Consultoria Jurídica</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">Contato</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Mais Informações</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-zinc-50">
                  <DialogHeader>
                    <DialogTitle>Mirella Lenzi</DialogTitle>
                    <DialogDescription>
                      Informações detalhadas sobre a experiência e atuação de Mirella Lenzi.
                    </DialogDescription>
                  </DialogHeader>
                  <MirellaDialogContent />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Perfil Amanda */}
          <div className="bg-zinc-50 p-8 rounded-lg shadow-lg">
            <Image
              src={imgAmanda}
              alt="Amanda Barbosa"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-500 text-center">Amanda Barbosa</h3>
            <p className="text-blue-400 mb-6">
              Especializada em Direito do Trabalho e Previdenciário, Amanda tem vasta experiência em casos complexos e uma abordagem humanizada na resolução de conflitos.
            </p>
            <ul className="text-blue-400">
              <li className="mb-2 flex items-center"><Scale className="mr-2 w-5 h-5 text-blue-500" /> Direito do Trabalho</li>
              <li className="mb-2 flex items-center"><Scale className="mr-2 w-5 h-5 text-blue-500" /> Direito Previdenciário</li>
              <li className="flex items-center"><Handshake className="mr-2 w-5 h-5 text-blue-500" /> Resolução de Conflitos</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">Contato</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Mais Informações</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-zinc-50">
                  <DialogHeader>
                    <DialogTitle>Amanda Barbosa</DialogTitle>
                    <DialogDescription>
                      Informações detalhadas sobre a experiência e atuação de Amanda Barbosa.
                    </DialogDescription>
                  </DialogHeader>
                  <AmandaDialogContent />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>


        {/* Seção de valores */}
	        <div className="text-center bg-zinc-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-blue-500">Nossos Valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, text: "Ética" },
              { icon: Users, text: "Transparência" },
              { icon: Lightbulb, text: "Excelência" },
              { icon: Heart, text: "Compromisso" }
            ].map((valor, index) => (
              <div key={index} className="bg-zinc-100 p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:bg-zinc-200 hover:shadow-md">
                <valor.icon className="w-8 h-8 mb-2 text-blue-500" />
                <p className="text-lg font-semibold text-blue-500">{valor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
