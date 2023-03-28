import Link from "next/link";

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 px-8 py-4 flex items-center justify-between backdrop-blur">
      <Link href="/" className="text-zinc-100 text-4xl font-bold">&lt;Portfólio &frasl;&gt;</Link>

      <nav>
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link href="/about" className="text-gray-400 hover:text-gray-100 transition-colors tracking-wide uppercase">Sobre</Link>
          </li>
          <li>
            <Link href="/skills" className="text-gray-400 hover:text-gray-100 transition-colors tracking-wide uppercase">Habilidades</Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-400 hover:text-gray-100 transition-colors tracking-wide uppercase">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}