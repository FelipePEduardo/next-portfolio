import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-14 pt-5 md:flex-row">
      <div className=" bg-purpleDark-800 flex items-center justify-center rounded-full p-5">
        <Image 
          src="https://github.com/FelipePEduardo.png" 
          alt=""
          width={360}
          height={360}
          className='rounded-full'
          priority
          quality={100}
        />
      </div>

      <div>
        <span className="text-lg font-medium text-gray-400">Seja bem-vindo</span>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7938b2] to-[#d49ef5] bg-clip-text text-transparent mt-2">Felipe Pereira Eduardo</h1>
        <p className="mt-1 text-xl">Desenvolvedor Front-End</p>
      </div>
    </div>
  )
}