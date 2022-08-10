import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header'>
         <Link href="/">Home</Link>
         <Link href="/About">About</Link>
         <Link href="/Register">User-Register</Link>
         <Link href="Login" >Login</Link>

    </div>
  )
}

export default Header