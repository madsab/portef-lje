"use client"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { FC, useState } from "react"

interface NavLinksProps {
  links: {
    href: string
    title: string
  }[]
}

const MobileNavLinks: FC<NavLinksProps> = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="grow flex justify-end gap-6 text-2xl sm:hidden ">
      <Icon
        icon={open ? "line-md:menu-to-close-transition" : "line-md:close-to-menu-alt-transition"}
        className="size-10"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute top-14 flex flex-col p-5 gap-6 rounded-md from-blue-950 to-black bg-gradient-to-bl ">
          {links.map((link) => {
            return (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MobileNavLinks
