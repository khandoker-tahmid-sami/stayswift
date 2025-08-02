"use client"
import React from 'react'
import { signOut } from 'next-auth/react'

const Logout = () => {
const handleSignOut = () =>{
    signOut({callbackUrl: "http://localhost:3000/login"})
}
  return (
    <button className='cursor-pointer' onClick={handleSignOut}>
        Sign Out
    </button>
  )
}

export default Logout
