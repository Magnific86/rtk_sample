import Link from "next/link"
import React from "react"

export const MyHeader = () => {
  return (
    <nav>
      <Link href={"/posts"}>posts</Link>
      <br />
      <Link href={"/about"}>about</Link>
    </nav>
  )
}
