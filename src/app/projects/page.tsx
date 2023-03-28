import { Project } from "./components/project";

export default function Projects() {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent mb-10 text-left">Projetos</h1>
      <p className="text-gray-200 mb-10">
        Essa página lista os <span className="text-gray-50">12</span> principais projetos que venho desenvolvendo durante a minha jornada como desenvolvedor.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}