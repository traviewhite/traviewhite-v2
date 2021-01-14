import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import { motion, useCycle, useSpring } from 'framer-motion'

export default function Photo () {

  const images = [
    "https://res.cloudinary.com/twhite/image/upload/v1605039158/photo/IMG_8081_jj8h0f.jpg",
    "https://res.cloudinary.com/twhite/image/upload/v1605039153/photo/IMG_8102_waeipx.jpg",
    "https://res.cloudinary.com/twhite/image/upload/v1605039153/photo/IMG_8094_ylbzyu.jpg",
    "https://res.cloudinary.com/twhite/image/upload/v1605039164/photo/IMG_8035_nwdlsx.jpg",
    "https://res.cloudinary.com/twhite/image/upload/v1605039164/photo/IMG_8033_wvcg4r.jpg"
  ];

  return (
    <Layout>
      <Head>
        <title>Photo | { Name }</title>
      </Head>
      <div className=""></div>
        <motion.ul className="photo-wrapper">
          {images.map((imgSrc, index) => (
            <li className="thumbnail"><img src={imgSrc} key={index} unsized /></li>
          ))}
        </motion.ul>
    </Layout>
  )
}