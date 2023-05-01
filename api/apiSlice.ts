import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Posts"],
  endpoints: (buider) => ({
    getAllPosts: buider.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getCurrentPost: buider.query({
      query: (postId) => `/posts/${postId}`,
      providesTags: ["Posts"],
    }),
    addPost: buider.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: buider.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    patchPost: buider.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
})

export const {
  useGetAllPostsQuery,
  useGetCurrentPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  usePatchPostMutation,
} = apiSlice
