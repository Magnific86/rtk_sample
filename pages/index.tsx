import { PostList } from "@/components/PostList"
import { useState } from "react"

export default function Home() {
  const [stage, setStage] = useState(1)

  const toggle = () => {
    setStage(stage === 1 ? 2 : 1)
  }
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
