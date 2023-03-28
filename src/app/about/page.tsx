import Image from "next/image";

import FlpImage from '../../assets/flpImg.jpeg'

export default function About() {
  return (
    <div className="flex flex-col pt-5">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-10 text-center">Sobre mim</h1>

      <div className="flex flex-col items-center md:flex-row gap-14">

        <div>
          <Image src={FlpImage} alt="" width={300} height={300} className="rounded-lg w-max md:w-80"/>
        </div>

        
        <p className="w-96 leading-7 text-gray-400">
          Me chamo <span className="text-gray-100 italic">Felipe Pereira Eduardo</span>, tenho 21 anos e moro em Santo André, São Paulo.
          <br />
          <br />
          Minha conexão com desenvolvimento começou pelo Discover da <span className="text-gray-100 italic">Rocketseat</span>, migrei para o Explorer onde pude me desafiar ainda mais e logo depois ganhei uma bolsa para cursar o <span className="text-gray-100 italic">Ignite</span> onde estudo atualmente e tenho o foco em <strong className="text-violet-600">Desenvolvimento Front-End</strong> com <span className="text-gray-100 italic">ReactJS</span> . Busco me tornar um desenvolvedor Full-Stack.
        </p>
        
      </div>

      <h2 className="my-5 text-left text-2xl font-bold">Bio</h2>
      <blockquote className="pl-5 text-gray-400 italic max-w-xl">
        Desenvolvedor Front-End React no caminho para o primeiro trabalho na área! Estudante do Ignite na Rocketseat.
      </blockquote>
    </div>
  )
}