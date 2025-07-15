import '../styles/globals.css'
import dynamic from 'next/dynamic'

const TinaCMS = dynamic(() => import('tinacms/dist/tinacms'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <TinaCMS />
    </>
  )
}