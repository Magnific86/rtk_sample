import { ApiProvider } from "@reduxjs/toolkit/query/react"

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { apiSlice } from "../api/apiSlice"
import { MyHeader } from "@/components/MyHeader"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={apiSlice}>
      <MyHeader />
      <Component {...pageProps} />
    </ApiProvider>
  )
}
