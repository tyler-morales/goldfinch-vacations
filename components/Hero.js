import Layout from './Layout'
import Image from 'next/image'

import HeroImage from '../public/images/front.jpg'

export default function Hero() {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold m-auto md:w-[20ch] text-center mb-4 md:leading-[80px] dark:text-white">
          Where is your summer Vacation Headed?
        </h1>
        <p className="md:text-2xl text-center m-auto md:w-[40ch] leading-relaxed dark:text-gray">
          Rent our 7 bedroom, 5 bathroom, Spa and Hot Tub Vacation Rental in
          Southwest Michigan
        </p>
        {/* <span className="block text-sm text-center">Visit</span> */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <a
            data-splitbee-event="Open AirBnb"
            href="https://www.airbnb.com/rooms/48884474?preview_for_ml=true&source_impression_id=p3_1644869232_F11AuBXqNcFC5inH"
            rel="noreferrer"
            target="_blank"
            className="transition-all hover:-translate-y-1 py-4 text-xl font-bold rounded-md bg-secondary w-[140px] text-center">
            AirBnb
          </a>
          <span className="dark:text-gray">Or</span>
          <a
            data-splitbee-event="Open Vrbo"
            href="https://www.vrbo.com/2586981?unitId=3157337"
            rel="noreferrer"
            target="_blank"
            className="transition-all hover:-translate-y-1
            py-4 text-xl font-bold rounded-md bg-secondary w-[140px]
            text-center">
            {' '}
            Vrbo
          </a>
        </div>
        <figure className="w-full mt-16">
          <Image
            layouts="responsive"
            src={HeroImage}
            width={1200}
            height={600}
            alt="Kissman House front"
            className="object-cover rounded-lg"
          />
          <figcaption className="mt-2 text-sm text-center dark:text-white">
            Front of the Kissman House
          </figcaption>
        </figure>
      </div>
    </Layout>
  )
}
