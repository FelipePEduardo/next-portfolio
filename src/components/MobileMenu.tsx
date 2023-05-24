import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { NavLink } from './NavLink';

export function MobileMenu() {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className='relative w-7 h-12 bg-none border-none cursor-pointer md:hidden group'>
          <div className='relative w-full h-1 bg-violet-100 rounded leading-none after:content-[""] after:absolute after:w-full after:left-0 after:h-1 after:bg-violet-100 after:rounded after:top-2 before:content-[""] before:absolute before:w-full before:left-0 before:h-1 before:bg-violet-100 before:rounded before:-top-2 group-data-[state=open]:bg-transparent group-data-[state=open]:after:-rotate-45 group-data-[state=open]:after:top-0 group-data-[state=open]:before:rotate-45 group-data-[state=open]:before:top-0 transition-all after:transition-all before:transition-all'></div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-purpleDark-700 shadow-2xl shadow-black p-5 flex flex-col gap-1 rounded md:hidden'>
          <DropdownMenu.Item >
            <NavLink href="/about">Sobre</NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item >
            <NavLink href="/skills">Habilidades</NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Item >
            <NavLink href="/projects">Projetos</NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className='fill-violet-400'/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}