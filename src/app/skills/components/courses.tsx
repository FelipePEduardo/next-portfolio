export function Courses() {
  return (

    <div className='w-full flex gap-8 p-5'>

      <div className='flex flex-col items-center'>
        <span className="italic underline text-lg">Ignite - Rocketseat</span>
        <p className='bg-purpleDark-700 p-5 rounded-xl mt-2 '> 
          Programa focado na especialização de stacks como ReactJS utilizando
          ferramentas como Next.js, TypeScript, Context Api, React Hooks,
          Styled-Components, Stitches e outras coisas.
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <span className="italic underline text-lg">Explorer - Rocketseat</span>
        <p className='bg-purpleDark-700 p-5 rounded-xl mt-2'> 
          Programa focado na especialização de stacks como ReactJS utilizando
          ferramentas como Next.js, TypeScript, Context Api, React Hooks,
          Styled-Components, Stitches e outras coisas.
        </p>
      </div>

    </div> 
  )
}

{/* <Accordion.Root type='single' collapsible className='w-96 rounded-md bg-purpleDark-800 shadow-md divide-y divide-purpleDark-700'  >

          <Accordion.Item value='item-1' className='mt-0 rounded-md'>
            <Accordion.Trigger className='w-full flex items-center justify-between p-5 italic underline'>
              Ignite - Rocketseat
              <FiChevronDown />
            </Accordion.Trigger>
            <Accordion.Content className='bg-purpleDark-700 overflow-hidden'>
              <div className='p-5'>
                Programa focado na especialização de stacks como ReactJS utilizando
                ferramentas como Next.js, TypeScript, Context Api, React Hooks,
                Styled-Components, Stitches e outras coisas.
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value='item-2'>
            <Accordion.Trigger className='w-full flex items-center justify-between p-5 italic underline'>
              Explorer - Rocketseat
              <FiChevronDown />
            </Accordion.Trigger>
            <Accordion.Content className='bg-purpleDark-700 overflow-hidden'>
              <div className='p-5'>
                Programa da Rocketseat focado em formar e desenvolver habilidades
                técnicas e comportamentais com foco na primeira oportunidade como
                programador. <br />
                <br />
                Conteúdos técnicos abordados: <br />
                - HTML e CSS <br />
                - JavaScript <br />
                - Git e GitHub <br />
                - Node.js <br />
                - ReactJS <br />
                - APIs <br />
                - Deploy <br />- Desafio final &#40;Desenvolvimento de um Cardápio
                Digital utilizando os conceitos técnicos abordados no decorrer da
                formação&#41;.
              </div>
            </Accordion.Content>
          </Accordion.Item>

        </Accordion.Root> */}