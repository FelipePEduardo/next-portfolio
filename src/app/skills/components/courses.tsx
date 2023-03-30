export function Courses() {
  return (
    <div className='flex flex-col gap-8 p-5'>

      <div className='flex flex-col items-center'>
        <span className="italic underline text-lg">Ignite - Rocketseat</span>
        <p className='bg-purpleDark-700 p-5 rounded-xl mt-2 '> 
          Programa focado na especialização de stacks como ReactJS utilizando
          ferramentas como <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Context Api</strong>, <strong>React Hooks</strong>, <strong>Styled-Components</strong>, <strong>Stitches</strong> e outras coisas.
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <span className="italic underline text-lg">Explorer - Rocketseat</span>
        <p className='bg-purpleDark-700 p-5 rounded-xl mt-2 flex flex-col gap-2'> 
        Programa da Rocketseat focado em formar e desenvolver habilidades técnicas e comportamentais com foco na primeira oportunidade como programador.

        <strong>
          Conteúdos técnicos abordados:
        </strong>
        
        <span>
          - HTML e CSS
        </span>

        <span>
          - JavaScript
        </span>

        <span>
          - Git e GitHub
        </span>
        
        <span>
          - Node.js
        </span>
        
        <span>
          - ReactJS
        </span>
        
        <span>
          - APIs
        </span>
        
        <span>
          - Deploy
        </span>
        
        <span>
          - Desafio final (Desenvolvimento de um Cardápio Digital utilizando os conceitos técnicos abordados no decorrer da formação).
        </span>
        </p>

      </div>

    </div> 
  )
}