import Image from "next/image";

import FlpImage from '../../assets/flpImg.jpeg'

export default function About() {
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
          Minha conexão com desenvolvimento começou pelo Discover da <span className="text-gray-100 italic">Rocketseat</span>, migrei para o Explorer onde pude me desafiar ainda mais e logo depois ganhei uma bolsa para cursar o <span className="text-gray-100 italic">Ignite</span> onde estudo atualmente e tenho o foco em <strong className="text-violet-600">Desenvolvimento Front-End</strong> com <span className="text-gray-100 italic">ReactJS</span> . Busco me tornar um desenvolvedor Full-Stack.
        </p>
        
      </div>

      <h2 className="mt-10 mb-5 text-left text-2xl font-bold">Bio</h2>
      <blockquote className="pl-5 text-gray-400 italic max-w-xl border-l border-gray-400">
        Desenvolvedor Front-End React no caminho para o primeiro trabalho na área! Estudante do Ignite na Rocketseat.
      </blockquote>
    </div>
  )
}




/* export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/FelipePEduardo`)
  const data = await res.json()

  console.log(data)

  return { props: { data } }
} */