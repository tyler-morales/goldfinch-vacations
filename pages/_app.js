import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({Component, pageProps}) {
  return (
    <div className="pb-64 dark:bg-gradient-to-br dark:from-primary dark:to-primaryDark">
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
