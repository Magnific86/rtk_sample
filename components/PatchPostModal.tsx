import { usePatchPostMutation } from "@/api/apiSlice"
import { ChangeEvent, FC, FormEvent, useState } from "react"

interface PatchModalProps {
  id: string
  toggle: () => void
  title: string
  body: string
}

export const PatchPostModal: FC<PatchModalProps> = ({ id, toggle, title, body }) => {
  const [patchPost] = usePatchPostMutation()
  const [postData, setPostData] = useState({
    title,
    body,
  })

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const bodyToPatch = {
      title: postData?.title,
      body: postData?.body,
      id: id,
    }
    patchPost(bodyToPatch)
    toggle()
  }

  const changeDataHandler = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    setPostData({ ...postData, [key]: val })
  }

  return (
    <div onClick={toggle} className="modal_mask">
      <form onClick={(e) => e.stopPropagation()} className="form_container" onSubmit={submitHandler}>
        <h1 onClick={toggle}>X</h1>
        <label htmlFor="title">Title:</label>
        <input value={postData?.title} onChange={(e) => changeDataHandler("title", e)} type="text" name="title" />
        <label htmlFor="body">Body:</label>
        <input value={postData?.body} onChange={(e) => changeDataHandler("body", e)} type="text" name="body" />
        <input type="submit" value="post" />
      </form>
    </div>
  )
}
