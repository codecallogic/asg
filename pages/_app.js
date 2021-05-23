import '../styles/app.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
  </Head> 
  return <Component {...pageProps} />
}

export default MyApp
