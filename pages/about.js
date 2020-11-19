import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import Contact from 'components/Contact'
import { aboutData } from 'components/content'
import { motion } from 'framer-motion'

export default function About () {
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

const aboutInfo = aboutData.map((value) =>
  <motion.div className="about_wrapper">
    <motion.section className="about_avi">
      <img src={value.img} alt={value.alt} />
    </motion.section>
    <motion.section className="about_description_wrapper">
      <div className="about_top">
        <h2>{value.title}</h2>
      </div>
      <div className="about_description_box">
        <p>
          <span>{value.intro}</span>
          <br/><br/>
          {value.descriptionIntro}
          <br/><br/>
          {value.descriptionMid}
          <br/><br/>
          {value.descriptionOutro}
        </p>
        <div className="about_links">
          <Link href={value.resumeLink}>
            <a><p className="cyan_btn">RESUME</p></a>
          </Link>
          <Link href={value.portfolioLink}>
            <a><p className="cyan_btn">PORTFOLIO</p></a>
          </Link>
        </div>
        <Contact />
      </div>
    </motion.section>
  </motion.div>
);