import React from 'react'
import Image from 'next/image'

import Logo from '../public/images/logo.svg'
import Layout from './Layout'

export default function Nav() {
  return (
    <nav className="py-1 m-auto bg-primary ">
      <div className="flex justify-center dark:border-b-2 dark:border-white">
        <Image
          src={Logo}
          height={100}
          width={250}
          alt="Logo"
          className="m-auto"
        />
      </div>
    </nav>
  )
}
