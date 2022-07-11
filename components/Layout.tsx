import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="flex space-x-8 p-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default Layout
