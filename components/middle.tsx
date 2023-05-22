import React, { useState } from "react"
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"

export default function Middle() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div className={styles.signedInStatus}>
    {!session && (
     <>
       <h1>Steps</h1>

       <Link href="/twinfo">
         <p>A. Twitter Data Fetch &rarr;</p>
       </Link>

       <Link href="https://cpone-zkproof.vercel.app">
         <p>B. Zero Knowledge Proof (Mina) &rarr;</p>
       </Link>

       <Link href="https://cpone-starmint.vercel.app">
         <p>C. NFT Minting (Ethereum) &rarr;</p>
       </Link>
     </>
     )}
    </div>
  )
}