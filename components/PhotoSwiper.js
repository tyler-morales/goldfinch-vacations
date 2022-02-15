/* eslint-disable @next/next/no-img-element */
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'

import Image from 'next/image'

export default function PhotoSwiper({images}) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination, Navigation]}
      className="w-full h-auto">
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="px-4 md:pb-16 swiper-slide">
              <figure className="w-full h-auto">
                <Image
                  layout="responsive"
                  src={image.url}
                  alt={image.alt}
                  width={400}
                  height={image.position == 'vertical' ? 600 : 300}
                  className="object-cover object-center w-full h-auto rounded-md bg-gray"
                />
                <figcaption className="px-4 mt-4 text-center dark:text-white">
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
