import React, { useEffect, useRef, useState } from 'react'
//import ReactDom from 'react-dom'
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import { useIntersection } from 'react-use'
import Layout, { Name } from 'components/Layout'
import Header from 'components/Header'
import Social from 'components/Social'
import { indexIntroData, skillsData, indexMidData } from 'components/content'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image' //one day
// import PhotoLinks from 'components/PhotoLinks' coming soon

import InView, { useInView } from 'react-intersection-observer'
import { motion, useAnimation, useCycle } from 'framer-motion'

import IntersectionBox from 'components/IntersectionBox'

import Helmet from 'react-helmet'
/*
if (process.client) {
  gsap.registerPlugin(TextPlugin, ScrollTrigger)
}
*/

gsap.registerPlugin(ScrollTrigger)





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







export default function Home() {
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
  
  // const [ref, inView] = useInView({
  //   triggerOnce: false,
  //   // rootMargin: '-200px 0px',
  //   threshold: 0.6
  // })

  // useEffect(() => {    
  //   let sections = gsap.utils.toArray(".trig");    
    
  //   var animationTrigger = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".trig",
  //       //markers: true,
  //       toggleActions: "play none none reverse"
  //     }
  //   })

  //   animationTrigger.fromTo(sections, .5, {opacity: 0, y:-40}, {opacity: 1, y:0, duration: 0.4})
  // }, [])

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
      <Header />


      <main>

        <IntersectionBox>
          { introSection }
        </IntersectionBox>
        

        {indexMidData.map((value, i) => (
          <IntersectionBox key={i}>
            <motion.div className="box-wrapper"
              // ref={ref}
              // animate={inView ? 'yes' : 'no'} variants={optionsyo}
              // animate={animation}
              // initial="hidden"
              // variants={variants}
            >
              <div className="box-top box-radius box-shadow">
                <Link href={value.boxLink}>
                  <a><h2>{value.boxTitle}</h2></a>
                </Link>
              </div>
              <div className="box box-radius box-shadow box-border">
                <div className="work-box">
                  <Link href={value.itemLink}>
                    <img src={value.img}
                      alt={value.imgAlt} />
                  </Link>
                  <h3>{value.itemTitle}</h3>
                  <p>{value.itemBlurb}</p>
                </div>

                <Link href={value.boxLink}>
                  <a>
                    <div className="cta-btn">
                      VIEW MORE
                      {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                    </div>
                  </a>
                </Link>
              </div>
            </motion.div>
          </IntersectionBox>
        ))}






        {/* 
        <div className="box_wrapper">
        <div className="box_top">
        <h2>FINE ART</h2>
        </div>
        <div className="box">
        <div className="else_box">
        <img src="/smoke.jpg"
        alt="" />
        <h3>ILLUSTRATION & PRINTMAKING</h3>
        <p>some of my photo work b</p>
        </div>
        <div className="else_box">
        <img src="/SushiQuadFinal_2018.png"
        alt="" />
        <h3>PRINTMAKING</h3>
        <p>some of my printmaking work b</p>
        </div>
        </div>
        </div>
      */}
        
        <IntersectionBox>
          <div className="box-wrapper">
            <div className="box-top box-radius box-shadow"
              onClick={() => { toggleOpen() }}
            >
              {/* <Link href="/about"> */}
                <h2>CONTACT ME!</h2>
              {/* </Link> */}
            </div>
            <motion.div className="box box-radius box-shadow box-border"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={ menuBtn }
            >
              <div className="contact-box">
                <h3>HIT ME UP</h3>
                  <a href="mailto:traviewhite@gmail.com?Subject=Whats%20up!">
                    <p className="cyan-btn">traviewhite@gmail.com</p>
                  </a>
                <Social />
              </div>
            </motion.div>
          </div>
        </IntersectionBox>

      </main>
    </Layout>
  )
}

const introSection = indexIntroData.map((value, i) =>
  <div key={i} className="box-wrapper trig">
    <div className="box-top box-radius box-shadow">
      <h2>{value.introTitle}</h2>
    </div>
    <div className="box box-radius box-shadow box-border">
      <p>{value.skillBlurb}<br/><br/>{value.skillBlurbEnd}</p>
      <div className="skill-tags">
        { skillsData.map((skill, i) => (
          <h5 key={i}>{skill}</h5>
        )) }
      </div>
    </div>
  </div>
)