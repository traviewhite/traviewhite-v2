import React, { useEffect, useRef, useState } from 'react'
//import ReactDom from 'react-dom'
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import { useIntersection } from 'react-use'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Contact from 'components/Contact'
import { indexIntroData, skillsData, indexMidData } from 'components/content'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image' //one day
// import PhotoLinks from 'components/PhotoLinks' coming soon

/*
if (process.client) {
  gsap.registerPlugin(TextPlugin, ScrollTrigger)
}
*/

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

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
      <Head>
        <title>traviewhite</title>
      </Head>
      <Header />
      <main>

        { introSection }
        { midSection }

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

        <div className="box_wrapper">
          <div className="box_top">
            <Link href="/about">
              <h2>CONTACT ME!</h2>
            </Link>
          </div>
          <div className="box">
            <div className="contact_box">
              <h3>HIT ME UP</h3>
                <a href="mailto:winkabrooke@gmail.com?Subject=Whats%20up!">
                  <p className="cyan_btn">traviewhite@gmail.com</p>
                </a>
              <Contact />
            </div>
          </div>
        </div>

      </main>
    </Layout>
  )
}

const introSection = indexIntroData.map((value) =>
  <div className="box_wrapper trig">
    <div className="box_top">
      <h2>{value.introTitle}</h2>
    </div>
    <div className="box">
      <p>{value.skillBlurb}<br/><br/>{value.skillBlurbEnd}</p>
      <div className="skill_tags">
        { skillsData.map((skill) => (
          <h5>{skill}</h5>
        )) }
      </div>
    </div>
  </div>
);

const midSection = indexMidData.map((value) =>
  <div className="box_wrapper">
    <div className="box_top">
      <Link href={value.boxLink}>
        <a><h2>{value.boxTitle}</h2></a>
      </Link>
    </div>
    <div className="box">
      <div className="work_box">
        <Link href={value.itemLink}>
          <img src={value.img}
            alt={value.imgAlt} />
        </Link>
        <h3>{value.itemTitle}</h3>
        <p>{value.itemBlurb}</p>
      </div>

      <Link href={value.boxLink}>
        <div className="cta_btn">
          <a>VIEW MORE</a>
        </div>
      </Link>
    </div>
  </div>
);