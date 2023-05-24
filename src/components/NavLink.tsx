'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  children: string
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref == href} 
      href={href} 
      className="text-gray-400 hover:text-gray-100 transition-colors tracking-wide text-base data-[active=true]:border-b data-[active=true]:text-white data-[active=true]:border-white"
    >
      {children}
    </Link>
  )
}