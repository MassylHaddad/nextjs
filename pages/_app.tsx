import '../styles/resume.css'
import '../styles/index.css'
import Script from 'next/script'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
      <Component {...pageProps} />
    </>
  )
}
