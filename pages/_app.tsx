import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import type {  } from "next-auth/next"

export default function App({ Component, pageProps, session }: { Component: any, pageProps: any, session: any}) {
  return (
    <SessionProvider session={session}>
      {" "}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
