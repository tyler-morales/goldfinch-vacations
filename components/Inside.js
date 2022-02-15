import Layout from './Layout'
import PhotoSwiper from './PhotoSwiper'

const livingAreas = [
  {url: '/../public/images/living areas/img1.jpg', alt: 'one'},
  {url: '/../public/images/living areas/img2.jpg', alt: 'two'},
  {url: '/../public/images/living areas/img3.jpg', alt: 'three'},
  {url: '/../public/images/living areas/img4.jpg', alt: 'four'},
  {url: '/../public/images/living areas/img5.jpg', alt: 'five'},
  {url: '/../public/images/living areas/img6.jpg', alt: 'six'},
  {url: '/../public/images/living areas/img7.jpg', alt: 'seven'},
  {url: '/../public/images/living areas/img8.jpg', alt: 'eight'},
]

export default function Inside() {
  return (
    <>
      <Layout>
        <h2 className="text-3xl font-bold dark:text-white">Inside the house</h2>
      </Layout>
      <PhotoSwiper images={livingAreas} />
      <Layout></Layout>
    </>
  )
}
