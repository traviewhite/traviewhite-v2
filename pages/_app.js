import 'styles/main.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [])
  return <AnimatePresence exitBeforeEnter><Component {...pageProps} key={router.route}/></AnimatePresence>
}

export default App