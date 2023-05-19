import Header from "./header"
import Middle from "./middle"
import Footer from "./footer"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Middle />
      <main>{children}</main>
      <Footer />
    </>
  )
}
