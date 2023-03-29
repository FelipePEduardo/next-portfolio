'use client'

import { useEffect, useState } from "react";
import { Project } from "./components/project";

interface repos {
  id: number
  name: string
  description: string
  html_url: string
}

export default function Projects() { 
  const [repos, setRepos] = useState<repos[]>([])

  async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/FelipePEduardo/repos?sort=pushed&per_page=12')
    const data = await res.json()

    setRepos(data)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <div className="w-full flex flex-col pt-5">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#f2555a] to-[#d49ef5] bg-clip-text text-transparent mb-10 text-left">Projetos</h1>
      <p className="text-gray-200 mb-10">
        Essa página lista os <span className="text-gray-50">12</span> principais projetos que venho desenvolvendo durante a minha jornada como desenvolvedor.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {
          repos.map(repo => <Project key={repo.id} onRepo={repo}/>)
        }
      </div>
    </div>
  )
}