import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ulvariants = {
  open: {
    transition: { delay: 0, staggerChildren: 0.06, delayChildren: 0.05 }
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.01, staggerDirection: -1 }
  }
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { tween: 10, ease: "easeIn" },
      opacity: { tween: 20, ease: "easeIn"}
    }
  },
  closed: {
    x: -10,
    opacity: 0,
    transition: {
      x: { tween: 50, ease: "easeOut" }
    }
  }
}


const FineArtFilter = () => (
  <motion.ul variants={ ulvariants }>
    <motion.li variants={variants}>
      <Link href="/">
        <a>CODE</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/">
        <a>DESIGN</a>
      </Link>
    </motion.li>
    
    <motion.li variants={variants}>
      <Link href="/">
        <a>FINE ART</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/">
        <a>PHOTO</a>
      </Link>
    </motion.li>

    <motion.li variants={variants}>
      <Link href="/">
        <a>ABOUT</a>
      </Link>
    </motion.li>
  </motion.ul>
)

export default FineArtFilter