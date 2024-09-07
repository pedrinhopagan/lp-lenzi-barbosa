
import {Briefcase} from 'lucide-react'



// Componente para o conteúdo do dialog de Mirella Lenzi
export function MirellaDialogContent() {
  return (
    <div className="space-y-4">
      <p className="text-blue-400">
        Dra. Mirella Lenzi é uma advogada renomada com mais de 10 anos de experiência em Direito Civil e Empresarial. Sua abordagem estratégica e soluções inovadoras têm sido fundamentais para o sucesso de seus clientes em casos complexos.
      </p>
      <h4 className="text-lg font-semibold text-blue-500">Formação Acadêmica</h4>
      <ul className="list-disc list-inside text-blue-400">
        <li>Graduação em Direito - Universidade de São Paulo (USP)</li>
        <li>Mestrado em Direito Empresarial - Fundação Getúlio Vargas (FGV)</li>
        <li>Especialização em Contratos Internacionais - Harvard Law School</li>
      </ul>
      <h4 className="text-lg font-semibold text-blue-500">Áreas de Atuação</h4>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Contratos Nacionais e Internacionais</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Direito Societário</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Fusões e Aquisições</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Compliance e Governança Corporativa</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Resolução de Disputas Empresariais</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Consultoria Jurídica Estratégica</li>
      </ul>
      <p className="text-blue-400">
        Dra. Mirella é reconhecida por sua habilidade em desenvolver estratégias jurídicas personalizadas, alinhadas aos objetivos de negócios de seus clientes. Sua expertise abrange desde startups inovadoras até grandes corporações multinacionais.
      </p>
    </div>
  )
}

// Componente para o conteúdo do dialog de Amanda Barbosa
export function AmandaDialogContent() {
  return (
    <div className="space-y-4">
      <p className="text-blue-400">
        Dra. Amanda Barbosa é uma especialista altamente respeitada em Direito do Trabalho e Previdenciário. Com uma carreira dedicada à defesa dos direitos dos trabalhadores, ela se destaca por sua abordagem humanizada e soluções inovadoras em casos complexos.
      </p>
      <h4 className="text-lg font-semibold text-blue-500">Formação Acadêmica</h4>
      <ul className="list-disc list-inside text-blue-400">
        <li>Graduação em Direito - Universidade Federal do Rio de Janeiro (UFRJ)</li>
        <li>Especialização em Direito do Trabalho - Pontifícia Universidade Católica (PUC-RJ)</li>
        <li>Mestrado em Direito Previdenciário - Universidade de São Paulo (USP)</li>
      </ul>
      <h4 className="text-lg font-semibold text-blue-500">Áreas de Atuação</h4>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Direito Trabalhista Individual e Coletivo</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Direito Previdenciário</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Negociações Sindicais</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Mediação de Conflitos Trabalhistas</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Compliance Trabalhista</li>
        <li className="flex items-center"><Briefcase className="mr-2 w-4 h-4 text-blue-500" /> Auditoria Trabalhista e Previdenciária</li>
      </ul>
      <p className="text-blue-400">
        Dra. Amanda é conhecida por sua habilidade em encontrar soluções criativas e eficazes para questões trabalhistas e previdenciárias complexas. Sua atuação vai além da representação legal, focando na prevenção de litígios e na construção de relações de trabalho saudáveis e produtivas.
      </p>
    </div>
  )
}