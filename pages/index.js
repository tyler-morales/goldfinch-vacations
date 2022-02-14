import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="grid gap-20 mt-10 md:mt-20">
      <Hero />
    </main>
  )
}
