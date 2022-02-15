import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Inside from '../components/Inside'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <main className="grid gap-20 mt-10 md:mt-20">
      <Hero />
      <Inside />
      <Newsletter />
    </main>
  )
}
