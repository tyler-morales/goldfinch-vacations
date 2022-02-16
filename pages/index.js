import Head from 'next/head'
import Hero from '../components/Hero'
import Inside from '../components/Inside'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        {/* Title */}
        <title>
          Goldfinch Vacations | Rental Vacations in Southwest Michigan
        </title>
        <meta
          property="og:title"
          content="Goldfinch Vacations | Rental Vacations in Southwest Michigan"
        />

        {/* Description */}
        <meta
          name="description"
          content="Goldfinch Vacations is a rental vacation rental company in Southwest Michigan. We offer a wide variety of rental vacation rentals in Southwest Michigan. Located in the beautiful city of Union Pier, Michigan, we are a full service rental vacation rental company that specializes in providing you with the best vacation rental experience."
        />

        <meta
          property="og:description"
          content="Goldfinch Vacations is a rental vacation rental company in Southwest Michigan. We offer a wide variety of rental vacation rentals in Southwest Michigan. Located in the beautiful city of Union Pier, Michigan, we are a full service rental vacation rental company that specializes in providing you with the best vacation rental experience."
        />

        {/* Misc */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://goldfinchvacations.com /" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tyler-morales/portfolio-v5/main/public/images/og.png"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main className="grid gap-20 mt-10 md:mt-20">
        <Hero />
        <Inside />
        <Newsletter />
      </main>
    </>
  )
}
