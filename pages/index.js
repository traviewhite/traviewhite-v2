import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { Name } from 'components/Layout'
import LandingSection from 'components/LandingSection'
import Social from 'components/Social'
import IntersectionBox from 'components/IntersectionBox'
import InView, { useInView } from 'react-intersection-observer'
import { motion, useAnimation, useCycle } from 'framer-motion'
import Helmet from 'react-helmet'
import { fetchEntriesIndex, fetchEntriesIndexFeatured } from 'utils/contentfulPosts'

const menuBtn = {
  open: {
    opacity: 1,
    // overflow: 'no-scroll',
    display: 'block',
    width: '100%',
    //maxWidth: '350px',
    height: 'auto',
    transition: {
      // width: {tween: 100, duration: 0.15, ease: 'easeIn'},
      height: {tween: 100, duration: 0.15, ease: 'easeIn'}      
    }
  },
  closed: {
    width: '0px',
    overflow: 'hidden',
    display: 'none',
    height: '0px',
    opacity: 1,
    transition: {
      // width: {tween: 100, duration: 0.1, ease: 'easeOut'},
      height: {tween: 100, duration: 0.1, ease: 'easeOut'}
    }
  }
}

export default function Home({ index, featured }) {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.3 })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    } else {
      animation.start("hidden")
    }
  }, [animation, inView])
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
    },
    hidden: {
      y: entry,
      opacity: 0,
    },
  }
  
  const introSection = (
    <div className="box-wrapper">
      <div className="box-top box-radius box-shadow">
        <h2>{index.fields.introTitle}</h2>
      </div>
      <div className="box box-radius box-shadow box-border">
        <p>
          {index.fields.introDescription}
          <br/><br/>
          {index.fields.skillsTitle}
        </p>
        <div className="skill-tags">
          { index.fields.skills.map((skill) => (
            <h5 key={skill}>{skill}</h5>
          )) }
        </div>
      </div>
    </div>
  )

  const featuredSection = featured.map((item) =>
    <div key={item.sys.id}>
      <IntersectionBox>
        <motion.div className="box-wrapper">
          <div className="box-top box-radius box-shadow">
            <Link href={item.fields.boxLink}>
              <a><h2>{item.fields.boxTitle}</h2></a>
            </Link>
          </div>
          <div className="box box-radius box-shadow box-border">
            <div className="work-box">
              <Link href={item.fields.itemLink}>
                <Image 
                  src={item.fields.image[0].secure_url}
                  alt={item.fields.itemTitle}
                  width={item.fields.image[0].width}
                  height={item.fields.image[0].height}
                  objectFit='cover'
                  objectPosition='center center'
                  />
              </Link>
              <h3>{item.fields.itemTitle}</h3>
              <p>{item.fields.itemDescription}</p>
            </div>

            <Link href={item.fields.boxLink}>
              <a>
                <div className="cta-btn">
                  VIEW MORE »
                </div>
              </a>
            </Link>
          </div>
        </motion.div>
      </IntersectionBox>
    </div>
  )

  const contactSection = (
    <div className="box-wrapper">
      <div className="box-top box-radius box-shadow"
        // onClick={() => { toggleOpen() }}
      >
        <Link href="/about">
          <h2>CONTACT ME!</h2>
        </Link>
      </div>
      <motion.div className="box box-radius box-shadow box-border"
        // initial={false}
        // animate={isOpen ? "open" : "closed"}
        // variants={ menuBtn }
      >
        <div className="contact-box">
          <h3>HIT ME UP</h3>
            <a href={`mailto:${index.fields.email}?Subject=Whats%20up!`}>
              <p className="cyan-btn">{index.fields.email}</p>
            </a>
          <Social />
        </div>
      </motion.div>
    </div>
  )

  return (
    <Layout>
      <Helmet>
        <style type="text/css">
          {`body {
              // background-color: #FFD23F;
          }`}
        </style>
      </Helmet>

      <Head>
        <title>{ Name }</title>
      </Head>

      <LandingSection 
        images={ index.fields }
      />

      <main>
        <IntersectionBox>
          { introSection }
        </IntersectionBox>

        { featuredSection }

        <IntersectionBox>
          { contactSection }
        </IntersectionBox>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let dataIntro = await fetchEntriesIndex()
  let dataFeatured = await fetchEntriesIndexFeatured()

  return {
    props: {
      index: await dataIntro[0] ?? null,
      featured: await dataFeatured ?? null
    },
    revalidate: 1,
  }
}