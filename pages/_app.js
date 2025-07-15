import '../styles/globals.css'
import dynamic from 'next/dynamic'

const TinaProvider = dynamic(() => import('tinacms/dist/provider'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  )
}