import Link from 'next/link'
import React from 'react'
export default function Header(){

    return(
        <header className="p-4 bg-green-500 text-4xl">
        <h1>Cookie Stand Admin</h1>
        <Link href="/overview"><a style = {{marginLeft : '1350px'}}>Overview</a></Link>
      </header>
    )
} 

