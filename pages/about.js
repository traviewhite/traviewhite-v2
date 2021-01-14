import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import Social from 'components/Social'
import { motion } from 'framer-motion'
import { fetchEntriesAbout } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 0, duration: 0.2, ease: 'easeIn' },
      y: { delay: 0.1, duration: 0.45, ease: 'easeOut' }
    }
  },
}
const aboutTextVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 0.25, duration: 0.2, ease: 'easeIn' },
      y: { delay: 0.15, duration: 0.65, ease: 'easeOut' }
    }
  },
}

export default function About({ about }) {
  const aboutInfo = about.map((a) =>
    <motion.div className="about-wrapper" key={a.sys.id}>
      <motion.section className="about-avi"
        initial="hidden"
        animate="visible"
        variants={aboutVariants}
      >
        <img src={a.fields.image[0].url} alt={a.fields.alt} />
      </motion.section>
      <motion.section className="about-description-wrapper"
        initial="hidden"
        animate="visible"
        variants={aboutTextVariants}
      >
        <div className="about-top box-radius box-shadow">
          <h2>{a.fields.title}</h2>
        </div>
        <div className="about-description-box box-radius box-shadow box-border">
          <p>
            <span>{a.fields.intro}</span>
            <br/><br/>
          </p>
          <ReactMarkdown source={a.fields.description} />
          <div className="about-links">
            <Link href={'/'}>
              <a><p className="cyan-btn">RESUME</p></a>
            </Link>
          </div>
          <Social />
        </div>
      </motion.section>
    </motion.div>
  )
  return (
    <Layout>
      <Head>
        <title>About | { Name }</title>
      </Head>
      <main>
        { aboutInfo }
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesAbout()

  return {
    props: {
      about: await data ?? null,
    },
    revalidate: 1,
  }
}