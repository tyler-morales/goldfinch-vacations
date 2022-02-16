import Layout from './Layout'
import PhotoSwiper from './PhotoSwiper'

const living_areas = [
  {
    url: '/images/kissman/living_areas/01.jpeg',
    alt: 'Backyard swimming pool and deck',
  },
  {
    url: '/images/kissman/living_areas/02.jpeg',
    alt: 'Spa: Hot tub (fits 4-6 people)',
  },
  {
    url: '/images/kissman/living_areas/03.jpg',
    alt: 'Fire-pit in backyard overlooking the back of the house',
  },
  {
    url: '/images/kissman/living_areas/04.jpeg',
    alt: 'Grill',
  },
  {
    url: '/images/kissman/living_areas/05.jpg',
    alt: 'Main living room upstairs',
  },
  {
    url: '/images/kissman/living_areas/06.jpg',
    alt: 'Full kitchen upstairs',
  },
  {
    url: '/images/kissman/living_areas/07.jpg',
    alt: 'Dining room table (fits 8-10 people)',
  },
  {
    url: '/images/kissman/living_areas/08.jpg',
    alt: 'Game room #1 (upstairs). Connected to backyard and bedrooms #4 and #5',
  },
  {
    url: '/images/kissman/living_areas/09.jpg',
    alt: 'Basement kitchen',
  },
  {
    url: '/images/kissman/living_areas/10.jpg',
    alt: 'Basement family room with 70" TV (view 1/2)',
  },
  {
    url: '/images/kissman/living_areas/11.jpg',
    alt: 'Basement family room with 70" TV (view 2/2)',
  },
  {
    url: '/images/kissman/living_areas/12.jpg',
    alt: 'Game room #2',
  },
]

const beds = [
  {
    url: '/images/kissman/beds/01.jpg',
    alt: 'Bedroom #1: King bed with private bathroom (main floor)',
  },
  {
    url: '/images/kissman/beds/02.jpg',
    alt: 'Bedroom #2: Double bed (main floor)',
  },
  {
    url: '/images/kissman/beds/03.jpg',
    alt: 'Bedroom #3: Double bed (main floor)',
  },
  {
    url: '/images/kissman/beds/04.jpg',
    alt: 'Bedroom #4: Double bed (main floor)',
  },
  {
    url: '/images/kissman/beds/05.jpg',
    alt: 'Bedroom #5: Bunk bed and twin bed (main floor)',
  },
  {
    url: '/images/kissman/beds/06.jpg',
    alt: 'Bedroom #6 Double bed  with private bathroom (basement)',
  },
  {
    url: '/images/kissman/beds/07.jpg',
    alt: 'Bedroom #7: Double bed (basement)',
  },
]

const bathrooms = [
  {
    url: '/images/kissman/bathrooms/01.jpg',
    alt: 'Bathroom #1: Private full bathroom (2 sinks, bath, and shower) for Bedroom #1',
    position: 'vertical',
  },
  {
    url: '/images/kissman/bathrooms/02.jpg',
    alt: 'Bathroom #2: Private full bathroom for Bedroom #6 (view 1/2)',
    position: 'vertical',
  },
  {
    url: '/images/kissman/bathrooms/05.jpg',
    alt: 'Bathroom #4 Full bathroom (basement)',
    position: 'vertical',
  },
  {
    url: '/images/kissman/bathrooms/04.jpg',
    alt: 'Bathroom #5: Private full bathroom for Bedroom #6 (view 2/2)',
    position: 'vertical',
  },
]

export default function Inside() {
  return (
    <>
      <Layout>
        <h2 className="text-3xl font-bold dark:text-white">Living areas</h2>
      </Layout>
      <PhotoSwiper images={living_areas} />
      <Layout>
        <h2 className="text-3xl font-bold dark:text-white">7 Bedrooms</h2>
      </Layout>
      <PhotoSwiper images={beds} />
      <Layout>
        <h2 className="text-3xl font-bold dark:text-white">5 Bathrooms</h2>
      </Layout>
      <PhotoSwiper images={bathrooms} />
    </>
  )
}
