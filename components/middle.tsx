import React, { useState } from "react"
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"

export default function Middle() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div className={styles.signedInStatus}>
    {session?.user && (
     <>
       <br/>
       <Link href="/twinfo">
         <p>Twitter Data Fetch &rarr;</p>
       </Link>
       <br/>
       <Link href="https://cpone-starmint.vercel.app">
         <p>NFT Minting (Ethereum) &rarr;</p>
       </Link>
     </>
     )}
    </div>
  )
}