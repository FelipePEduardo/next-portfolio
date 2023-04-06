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