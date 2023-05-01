import { useAddPostMutation } from "@/api/apiSlice"
import { FormEvent, useRef } from "react"

export const AddPostForm = () => {
  const [addPost] = useAddPostMutation()
  const tRef = useRef<HTMLInputElement>(null)
  const bRef = useRef<HTMLInputElement>(null)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const title = tRef?.current?.value
    const body = bRef?.current?.value
    if (title && body) {
      const bodyToPost = {
        title,
        body: formData.get("body"),
      }
      console.log("bodyToPost: ", bodyToPost)

      addPost(bodyToPost)
      tRef.current.value = ""
      bRef.current.value = ""
    }
  }

  return (
    <form className="form_container" onSubmit={submitHandler}>
      <label htmlFor="title">Title:</label>
      <input ref={tRef} type="text" name="title" />
      <label htmlFor="body">Body:</label>
      <input ref={bRef} type="text" name="body" />
      <input type="submit" value="post" />
    </form>
  )
}
