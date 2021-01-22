import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { Name } from 'components/Layout'
import PhotoLinks from 'components/PhotoLinks'
import { motion, useCycle, useSpring } from 'framer-motion'
import { fetchEntriesPhoto } from 'utils/contentfulPosts'

export default function Photo({ photo }) {
  return (
    <Layout>
      <Head>
        <title>Photo | {Name}</title>
      </Head>
      {/* wanna do <PhotoLinks /> */}
      {/* <motion.ul className='photo-wrapper'>
        {photo &&
          photo.map((photos) => (
            <li className='thumbnail' key={photos.sys.id}>
              {photos.fields.image.map((p, i) => (
                <img key={i} src={p.secure_url} alt={p.title} />
              ))}
            </li>
          ))}
      </motion.ul> */}
      {/* {photo &&
        Object.entries(photo.fields.image).map((photos) => (
          <Image src={photos[1].secure_url} alt='' height={photos[1].height} width={photos[1].width} />
        ))} */}
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesPhoto()

  return {
    props: {
      photo: await data,
    },
    revalidate: 1,
  }
}
