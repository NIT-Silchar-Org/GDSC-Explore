import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>GDSC Explore</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <ParallaxProvider>

      <Component {...pageProps} />
      </ParallaxProvider>
      
    </>
  )
}

export default MyApp
