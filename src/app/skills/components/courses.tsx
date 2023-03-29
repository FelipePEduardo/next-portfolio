export function Courses() {
  return (
    <div className='flex flex-col gap-8 p-5'>

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