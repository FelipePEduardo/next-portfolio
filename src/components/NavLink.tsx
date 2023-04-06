'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  children: string
  href: string
  className: string
}

export function NavLink({ children, href, className }: NavLinkProps) {
  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref == href} 
      href={href} 
      className={className}
    >
      {children}
    </Link>
  )
}

/* 
  "text-gray-400 hover:text-gray-100 transition-colors tracking-wide uppercase data-[active=true]:border-b data-[active=true]:text-white data-[active=true]:border-white"
*/