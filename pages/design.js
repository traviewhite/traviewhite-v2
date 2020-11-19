import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import { designImg } from 'components/content'

export default function Design () {

  const designImages = designImg.map((value, i) =>
    <li className="thumbnail">
      <img key={i} src={value.img} />
    </li>
  );

  return (
    <Layout>
      <Head>
        <title>Design | Travis White</title>
      </Head>
      <Tnav />
      <main>
        <motion.ul className="gallery_wrapper">
          {designImages}
        </motion.ul>
      </main>
    </Layout>
  )
}

//<motion.div className="gallery_title"><h3>design&nbsp;<br/>gallery</h3></motion.div>