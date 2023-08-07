import '@/styles/globals.css'
import AppContext from '@/utils/Context'
export default function App({ Component, pageProps }) {
  return (
  <AppContext>
     <Component {...pageProps} />
  </AppContext>
  )
}
