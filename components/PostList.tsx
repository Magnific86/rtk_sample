import { useGetAllPostsQuery } from "@/api/apiSlice"
import { IPost } from "@/types/postTypes"
import React from "react"
import { PostItem } from "./PostItem"
import { AddPostForm } from "./AddPostForm"

export const PostList = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery("")

  return (
    <div>
      <AddPostForm />
      {isLoading && <div className="loader" />}
      {error && <h3>Error...</h3>}
      {posts?.length > 0 &&
        posts.map(({ id, title, body }: IPost) => {
          return <PostItem title={title} body={body} key={id} id={id} />
        })}
    </div>
  )
}
