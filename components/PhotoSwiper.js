/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'

import Image from 'next/image'

import img1 from '../public/images/front.jpg'

export default function PhotoSwiper({images}) {
  console.log(images)
  const [screenWidth, setScreenWidth] = useState(0)
  const [numOfSlides, setNumOfSlides] = useState(1)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
      console.log(screenWidth)
      if (screenWidth < 640) setNumOfSlides(1)
      if (screenWidth > 640 && screenWidth < 768) setNumOfSlides(2)
      if (screenWidth > 768) setNumOfSlides(3)
    }

    changeWidth()
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [screenWidth])

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="swiper">
      {images.map((image, index) => {
        return (
          <SwiperSlide key="index">
            <div className="swiper-slide">
              <figure className="w-full h-auto">
                <Image
                  layout="responsive"
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={250}
                  className="object-cover w-full h-auto rounded-md"
                />
                <figcaption className="mt-2 text-center dark:text-white">
                  {image.alt}
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

/*
 <figure className="w-full h-auto border border-secondary">
            <Image
              layout="responsive"
              src={img1}
              alt="Image 1"
              width={400}
              height={250}
              className="object-cover w-full h-auto rounded-md"
            />
            <figcaption className="mt-2 dark:text-white">Caption 1</figcaption>
          </figure>
*/
