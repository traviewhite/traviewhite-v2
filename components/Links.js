import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ulvariants = {
  open: {
    transition: { delay: 0.12, staggerChildren: 0.08, delayChildren: 0.05 }
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.02, staggerDirection: -1 }
  }
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { tween: 100, ease: "easeIn" }
    }
  },
  closed: {
    y: 70,
    opacity: 0,
    transition: {
      y: { tween: 100, ease: "easeOut" }
    }
  }
}

const Links = () => {
  const router = useRouter()
  return (
    <motion.ul variants={ ulvariants }>
      <Link href="/code">
        <motion.li variants={variants}>
          <a className={router.pathname === '/code' ? 'active' : '' }>CODE</a>
        </motion.li>
      </Link>

      <Link href="/design">
        <motion.li variants={variants}>
          <a className={router.pathname === '/design' ? 'active' : '' }>DESIGN</a>
        </motion.li>
      </Link>
      
      <Link href="/fine-art">
        <motion.li variants={variants}>
          <a className={router.pathname === '/fine-art' ? 'active' : '' }>FINE ART</a>
        </motion.li>
      </Link>

      <Link href="/photo">
        <motion.li variants={variants}>
          <a className={router.pathname === '/photo' ? 'active' : '' }>PHOTO</a>
        </motion.li>
      </Link>

      <Link href="/about">
        <motion.li variants={variants}>
          <a className={router.pathname === '/about' ? 'active' : '' }>ABOUT</a>
        </motion.li>
      </Link>
    </motion.ul>
  )
}

export default Links