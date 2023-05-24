'use client'

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 px-8 py-4 backdrop-blur saturate-150 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-zinc-100 text-3xl md:text-4xl font-bold">&lt;Portfólio &frasl;&gt;</Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <NavLink 
                href="/about"
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/skills"
              >
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/projects"
              >
                Projetos
              </NavLink>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}