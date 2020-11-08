import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Tnav from '../components/Tnav'
import { m, motion } from 'framer-motion'

export default function Design () {

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItems = images.map((images) =>
    <li className="thumbnail">{images}</li>
  );

  return (
    <Layout>
      <Head>
        <title>Design | Travis White</title>
      </Head>
      <Tnav />
      <main>
        <motion.div className="filter">filter?</motion.div>
        <motion.ul className="gallerywrapper">
          {listItems}
        </motion.ul>
      </main>
    </Layout>
  )
}
