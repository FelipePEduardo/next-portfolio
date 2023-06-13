import Image from "next/image";

import FlpImage from '../../assets/flpImg.jpeg'

type User = {
  bio: string
}

export default async function About() {
  const response = await fetch('https://api.github.com/users/FelipePEduardo')

  const data: User = await response.json()

  return (
    <div className="flex flex-col pt-5">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#80ffea] to-[#d49ef5] bg-clip-text text-transparent mb-10 ">Sobre mim</h1>

      <div className="flex flex-col items-left  md:flex-row gap-14">

        <div>
          <Image 
            src={FlpImage} 
            alt="" 
            width={300} 
            height={300} 
            className="rounded-lg w-full md:max-w-80"
            priority
            quality={100}
            />
        </div>

        
        <p className="md:max-w-sm leading-8 text-gray-400">
          Me chamo <span className="text-gray-100 italic">Felipe Pereira Eduardo</span>, tenho 21 anos e moro em Santo André, São Paulo.
          <br />
          <br />
          Sou desenvolvedor front-end buscando minha primeira vaga. 
          Minha conexão com desenvolvimento começou pelo Discover da <span className="text-gray-100 italic">Rocketseat</span>, migrei para o Explorer onde pude me desafiar ainda mais e logo depois ganhei uma bolsa para cursar o <span className="text-gray-100 italic">Ignite</span> onde estudo atualmente.
          <br />
          <br />
          Tenho <strong className="text-violet-500">conhecimento em tecnologias</strong> como: <span className="text-gray-100 italic">ReactJS</span>, <span className="text-gray-100 italic">Next.js</span>, <span className="text-gray-100 italic">TypeScript</span> . Busco me tornar um desenvolvedor Full-Stack no futuro.
        </p>
        
      </div>

      <h2 className="mt-10 mb-5 text-left text-2xl font-bold">Bio</h2>
      <blockquote className="pl-5 text-gray-400 italic max-w-xl border-l border-gray-400">
        {
          data.bio
        }
      </blockquote>
    </div>
  )
}