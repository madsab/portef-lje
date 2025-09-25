import Link from "next/link"
import { FC } from "react"

interface NavLinksProps {
  links: {
    href: string
    title: string
  }[]
}

const NavLinks: FC<NavLinksProps> = ({ links }) => {
  return (
    <div className="grow flex justify-end gap-6 text-2xl max-sm:hidden">
      {links.map((link) => {
        return (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
