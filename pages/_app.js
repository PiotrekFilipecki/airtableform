import '../styles/globals.scss'
import { Unbounded } from 'next/font/google'
const inter = Unbounded({ subsets: ['latin'] })
function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Component {...pageProps} />
    <style jsx global>{`
:root {
  --font-base: ${inter.style.fontFamily};
  font-family: ${inter.style.fontFamily};
}


`}</style>
    </>
  )
}

export default MyApp
