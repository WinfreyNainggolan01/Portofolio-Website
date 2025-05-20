"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "project",
    path: "/project",
  },
  // {
  //   name: "about",
  //   path: "/about",
  // },
  
]

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path}
          className={`${
            link.path === pathname && "text-green-600 border-b-2 border-green-600"} capitalize font-medium hover:text-green-600 transition-all`} 
        >
          {link.name}
        </Link>
      ))}
      <Link 
        href="/hire"
      >
        <Button>Hire Me</Button>
      </Link>
  </nav>

  )
}

export default Nav