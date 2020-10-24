import { motion } from 'framer-motion'
import Link from 'next/link'

const ulvariants = {
  open: {
    transition: { delay: 0.1, staggerChildren: 0.04, delayChildren: 0.02 }
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.2, staggerDirection: -1 }
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
    <motion.li variants={variants}>
      <Link href="/design">
        <a>DESIGN</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/illustration">
        <a>ILLUSTRATION</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/fine-art">
        <a>PHOTOGRAPHY</a>
      </Link>
    </motion.li>
    
    <motion.li variants={variants}>
      <Link href="/about">
          <a className="aboutbtn">ABOUT</a>
      </Link>
    </motion.li>
  </motion.ul>
)

export default Links