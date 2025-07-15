import { TinaCMS, TinaProvider } from 'tinacms'
import { TinaEditProvider } from 'tinacms/dist/edit'
import '../styles/globals.css'

const cms = new TinaCMS({
  enabled: true,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_EDIT_BRANCH || 'main',
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
})

export default function App({ Component, pageProps }) {
  return (
    <TinaEditProvider cms={cms}>
      <TinaProvider cms={cms}>
        <Component {...pageProps} />
      </TinaProvider>
    </TinaEditProvider>
  )
}