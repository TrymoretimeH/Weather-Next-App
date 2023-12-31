import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-center w-full'>
      <Head>
        <title>Weather Next App</title>
      </Head>
      <p>Hello, It is a weather next app with google login.</p>
      <button className='underline mt-4'><Link href="/login" >Login Page</Link></button>
    </div>
  )
}
