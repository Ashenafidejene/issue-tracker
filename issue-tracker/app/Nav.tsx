import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
const Nav = () => {
    const Links=[
        {label:'Dashboard',href:'/'},
        {label:'Issue',href:'/Issue'},
    ]
  return (
    
   <nav className='flex space-x-6 border-b-2 mb-3 h-16 items-center text-lg px-12'>
   <Link href='/'><FaBug /></Link>
   <ul className='flex space-x-6 '>
    {Links.map(links=><Link key={links.href} className='text-zinc-500 hover:text-zinc-800 transition-color ' href={links.href}>{links.label}</Link>)}
    
   </ul>
   </nav>
  )
}

export default Nav
