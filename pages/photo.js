import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import PhotoLinks from 'components/PhotoLinks'
import { motion, useCycle, useSpring } from 'framer-motion'

export default function Photo () {

  const images = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random/400x600",
    "https://source.unsplash.com/random/600x800",
    "https://source.unsplash.com/random/800x800",
    "https://source.unsplash.com/random/900x500",
    "https://source.unsplash.com/random/500x800",
    "https://source.unsplash.com/random/900x600",
    "https://source.unsplash.com/random/700x900",
    "https://source.unsplash.com/random/600x900"
  ];

  return (
    <Layout>
      <Head>
        <title>Photo | { Name }</title>
      </Head>
      {/* wanna do <PhotoLinks /> */}
      <motion.ul className="photo-wrapper">
        {images.map((imgSrc, i) => (
          <li className="thumbnail"><img src={imgSrc} key={i} unsized /></li>
        ))}
      </motion.ul>
    </Layout>
  )
}