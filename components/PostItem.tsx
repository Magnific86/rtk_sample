import { useDeletePostMutation } from "@/api/apiSlice"
import { IPost } from "@/types/postTypes"
import React, { FC, useState } from "react"
import { PatchPostModal } from "./PatchPostModal"

export const PostItem: FC<IPost> = ({ title, body, id }) => {
  const [deletePost] = useDeletePostMutation()
  const [open, setopen] = useState(false)

  const toggleOpenHandler = () => {
    setopen(open ? false : true)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button
        onClick={() => {
          console.log("id to delete: ", id)
          deletePost(id)
        }}
      >
        delete
      </button>
      <button onClick={toggleOpenHandler}>edit</button>
      {open && <PatchPostModal title={title} body={body} id={String(id)} toggle={toggleOpenHandler} />}
    </div>
  )
}
