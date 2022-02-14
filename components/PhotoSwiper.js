import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'

import Image from 'next/image'

import img1 from '../public/images/front.jpg'

export default function PhotoSwiper() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mt-8">
      <SwiperSlide>
        <figure>
          <Image src={img1} alt="Image 1" />
          <figcaption className="mt-2 dark:text-white">Caption 1</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <Image src={img1} alt="Image 1" />
          <figcaption className="mt-2 dark:text-white">Caption 2</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <Image src={img1} alt="Image 1" />
          <figcaption className="mt-2 dark:text-white">Caption 3</figcaption>
        </figure>
      </SwiperSlide>
    </Swiper>
  )
}
