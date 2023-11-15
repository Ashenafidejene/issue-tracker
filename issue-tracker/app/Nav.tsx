'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";
import classNames from 'classnames';
import { Console } from 'console';

const Nav = () => {
   const currentPath = usePathname();
   //console.log(currentPath)
    const Links=[
        {label:'Dashboard',href:'/'},
        {label:'Issue',href:'/issue'},
    ]
  return (
    
   <nav className='flex space-x-6 border-b-2 mb-3 h-16 items-center text-lg px-12'>
   <Link href='/'><FaBug /></Link>
   <ul className='flex space-x-6 '>
    {Links.map(links=><Link key={links.href} className={classNames({
        'text-zinc-900':currentPath===links.href,
        'text-zinc-500':currentPath!==links.href,
        ' hover:text-zinc-800 transition-color ':true
    })}  href={links.href}>{links.label}</Link>)} 
   </ul>
   </nav>
  )
}

export default Nav
