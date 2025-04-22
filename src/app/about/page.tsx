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
          Me chamo <span className="text-gray-100 italic">Felipe Pereira Eduardo</span>, tenho 23 anos e moro em Santo André, São Paulo.
          <br />
          <br />
          Atualmente estou atuando como desenvolvedor Full-Stack Pleno na
          <a href="https://www.linkedin.com/company/tbdcagro/posts/?feedView=all" className="mx-1 text-violet-500">
            @TBDC AgroSoftware
          </a>
            Atuo utilizando ferramentas como <span className="text-gray-100 italic">Vuejs</span>, <span className="text-gray-100 italic">Nodejs</span>, <span className="text-gray-100 italic">Typescript</span>,
            desenvolvendo features, aplicando refatorações e manutenções em
            sistema web.
          <br />
          <br />
          Me considero uma pessoa focada, persistente em aprender uma nova
          linguagem e me adaptar à qualquer mudança. Estou pronto para superar
          qualquer desafio, sempre disposto a aprender e ensinar.
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