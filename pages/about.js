import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import Contact from 'components/Contact'
import { motion } from 'framer-motion'
import { fetchEntriesAbout } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'

export default function About({ about }) {
  const aboutInfo = about.map((a) =>
    <motion.div className="about_wrapper" key={a.sys.id}>
      <motion.section className="about_avi">
        <img src={a.fields.image[0].url} alt={a.fields.alt} />
      </motion.section>
      <motion.section className="about_description_wrapper">
        <div className="about_top">
          <h2>{a.fields.title}</h2>
        </div>
        <div className="about_description_box">
          <p>
            <span>{a.fields.intro}</span>
            <br/><br/>            
          </p>
          <ReactMarkdown source={a.fields.description} />
          <div className="about_links">
            <Link href={''}>
              <a><p className="cyan_btn">RESUME</p></a>
            </Link>
          </div>
          <Contact />
        </div>
      </motion.section>
    </motion.div>
  )
  return (
    <Layout>
      <Head>
        <title>About | Travis White</title>
      </Head>
      <Tnav />
      <main>
        { aboutInfo }
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetchEntriesAbout()

  return {
    props: {
      about: await res,
    },
    revalidate: 1,
  }
}