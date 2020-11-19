import { motion } from 'framer-motion'
import Link from 'next/link'

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

const Links = () => (
  <motion.ul variants={ ulvariants }>
    <Link href="/code">
      <motion.li variants={variants}>
        <a>CODE</a>
      </motion.li>
    </Link>

    <Link href="/design">
      <motion.li variants={variants}>
        <a>DESIGN</a>
      </motion.li>
    </Link>
    
    <Link href="/fine-art">
      <motion.li variants={variants}>
        <a>FINE ART</a>
      </motion.li>
    </Link>

    <Link href="/photo">
      <motion.li variants={variants}>
        <a>PHOTO</a>
      </motion.li>
    </Link>

    <Link href="/about">
      <motion.li variants={variants}>
        <a>ABOUT</a>
      </motion.li>
    </Link>
  </motion.ul>
)

export default Links