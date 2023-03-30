import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from "next/link";

export function MobileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='relative w-9 h-12 bg-none border-none cursor-pointer md:hidden'>
          <div className='relative w-full h-1 bg-violet-100 rounded leading-none after:content-[""] after:absolute after:w-full after:left-0 after:h-1 after:bg-violet-100 after:rounded after:top-2 before:content-[""] before:absolute before:w-full before:left-0 before:h-1 before:bg-violet-100 before:rounded before:-top-2'></div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-violet-400 shadow-2xl shadow-black p-5 flex flex-col gap-1 rounded md:hidden'>
          <DropdownMenu.Item >
            <Link href="/about" className='text-white border-y-2 border-transparent'>Sobre</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item >
            <Link href="/skills" className='text-white border-y-2 border-transparent'>Habilidades</Link>            
          </DropdownMenu.Item>

          <DropdownMenu.Item >
            <Link href="/projects" className='text-white border-y-2 border-transparent'>Projetos</Link>            
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className='fill-violet-400'/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}