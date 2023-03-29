'use client';

import { skills } from "@/data/skills"
import { Skill } from "./components/skill"
import { Courses } from "./components/courses";


export default function Skills() {
  return (
    <div className="flex flex-col gap-12 pt-5">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#56ffa5] to-[ #fff] bg-clip-text text-transparent mb-5">Cursos</h1>
        <p className="mb-4">
          Estes são os cursos que fiz. Em 2022 foi o ano que comecei minha jornada no Explorer e atualmente estou focado no Ignite!
        </p>

        <Courses />
      </div>
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#56d8ff] to-[#fff] bg-clip-text text-transparent mb-5">Habilidades</h2>
        <p className="mb-4">
          Essas são algumas das habilidades que venho aprendendo e desenvolvendo nos meu projetos mais recentes.
        </p>

        <div className="w-full shadow-2xl rounded-lg bg-purpleDark-800 grid gap-5 justify-items-center p-10 md:grid-cols-2 xl:grid-cols-3">
          {
            skills.map( skill => (
              <Skill key={skill.id} title={skill.title}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}