import * as Accordion from '@radix-ui/react-accordion'
import { FiChevronDown, FiArrowRight } from 'react-icons/fi'

export function Courses() {
  return (
    <Accordion.Root 
      type="single" 
      collapsible 
      className='rounded-md bg-purpleDark-800 shadow-lg md:w-2/4'
    >
      <Accordion.Item 
      value="item-1" 
      className='first:mt-0 first:rounded-t-lg last:rounded-b-lg focus-within:relative focus-within:z-10 focus-within:shadow-sm'
      >
        <Accordion.Trigger className='w-full flex items-center justify-between bg-transparent text-gray-100 rounded-none p-5 italic underline group border-b border-purpleDark-700'>
          Ignite - Rockeseat
          <FiChevronDown className="group-data-[state=open]:rotate-180 transition-transform" />
        </Accordion.Trigger>
        <Accordion.Content className='bg-purpleDark-700 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'>
          <div className="flex flex-col gap-2 p-5">
            Programa focado na especialização de stacks como ReactJS utilizando
            ferramentas como Next.js, TypeScript, Context Api, React Hooks,
            Styled-Components, Stitches e outras coisas.
            <a 
              href="https://drive.google.com/file/d/1Y_qRbLU5ii05ffxMKOcLf3GhHRn6RiJf/view?usp=share_link"
              target='_blank'
              className='flex items-center gap-1  underline motion-reduce:animate-pulse'
            >
              Ver certificado <FiArrowRight />
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item 
        value="item-2"
        className='first:mt-0 first:rounded-t-lg last:rounded-b-lg focus-within:relative focus-within:z-10 focus-within:shadow-sm'  
      >
        <Accordion.Trigger className='w-full flex items-center justify-between bg-transparent text-gray-100 rounded-none p-5 italic underline group'>
          Explorer - Rocketseat
          <FiChevronDown className="group-data-[state=open]:rotate-180 transition-transform" />
        </Accordion.Trigger>
        <Accordion.Content className='bg-purpleDark-700 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'>
          <div className="flex flex-col gap-2 p-5">
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
            <a 
              href="https://drive.google.com/file/d/10NUUepU8PDgVVU4PyynTRFd1LxUNpg2y/view?usp=sharing"
              target='_blank'
              className='flex items-center gap-1  underline motion-reduce:animate-pulse'
            >
              Ver certificado <FiArrowRight />
            </a>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}