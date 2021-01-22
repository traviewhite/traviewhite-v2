import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { Name } from 'components/Layout'
import Social from 'components/Social'
import { motion } from 'framer-motion'
import { fetchEntriesAbout } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 0, duration: 0.2, ease: 'easeIn' },
      y: { delay: 0.1, duration: 0.45, ease: 'easeOut' },
    },
  },
}
const aboutTextVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 0.25, duration: 0.2, ease: 'easeIn' },
      y: { delay: 0.15, duration: 0.65, ease: 'easeOut' },
    },
  },
}

export default function About({ about }) {
  return (
    <Layout>
      <Head>
        <title>About | {Name}</title>
      </Head>
      <Helmet>
        <style type='text/css'>
          {`
            body {
              // background-color: #FFD23F;
              // background-color: blanchedalmond;
              // background-color: rgb(251,146,113);
            }
          `}
        </style>
      </Helmet>
      <main>
        <motion.div className='about-wrapper' key={about.sys.id}>
          <motion.section className='about-avi' initial='hidden' animate='visible' variants={aboutVariants}>
            <Image
              src={about.fields.image[0].secure_url}
              alt={about.fields.alt}
              height={about.fields.image[0].height}
              width={about.fields.image[0].width}
              objectFit='cover'
              objectPosition='50% 50%'
            />
          </motion.section>
          <motion.section
            className='about-description-wrapper'
            initial='hidden'
            animate='visible'
            variants={aboutTextVariants}
          >
            <div className='about-top box-radius box-shadow'>
              <h2>{about.fields.title}</h2>
            </div>
            <div className='about-description-box box-radius box-shadow box-border'>
              <p>
                <span>{about.fields.intro}</span>
                <br />
                <br />
              </p>
              <ReactMarkdown source={about.fields.description} />
              <div className='about-links'>
                <a>
                  <p className='cyan-btn'>RESUME.pdf</p>
                </a>
                <a
                  href='https://www.notion.so/deanwilliams/Travis-White-4883c991b5c943b897404e9cc297f69b'
                  target='_blank'
                  rel='noreferrer'
                >
                  <p className='cyan-btn'>RESUME.notion</p>
                </a>
              </div>
              <Social />
            </div>
          </motion.section>
        </motion.div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesAbout()

  return {
    props: {
      about: (await data[0]) ?? null,
    },
    revalidate: 1,
  }
}
