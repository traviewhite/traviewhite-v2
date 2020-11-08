import React, { Component, useEffect, useRef, useState } from 'react'
//import ReactDom from 'react-dom'
import { useIntersection } from 'react-use'
import { gsap, TweenMax, TimelineLite, Power3 } from 'gsap'
//import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//var ReactDOM = require('react-dom')
//gsap.registerPlugin(ScrollTrigger)

const workImg1 = "/brookewinka.png"
const workTitle1 = "brookewinka.com"
/*
if (process.client) {
  gsap.registerPlugin(TextPlugin, ScrollTrigger)
}
*/

function Shit() {
  export async function getStaticProps() {
    
    const sectionRef = useRef(null);
    let intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: 1
    });
    
    useEffect(() => {
      const fadeIn = element => {
        gsap.to(element, 1, {
          opacity: 1,
          y: -50,
          duration: 1,
          ease: "power4.out",
          stagger: {
            amount: 0.3
          }
        });
      };
      const fadeOut = element => {
        gsap.to(element, 1, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power4.out"
        });
      };
      intersection && intersection.intersectionRatio < 1
      ? fadeOut(".fadeIn")
      : fadeIn(".fadeIn");
    }, []);
  }
    render() {
      return (
        <Layout>
          <Head>
            <title>traviewhite</title>
          </Head>
          <Header />
          <main>
            <div ref={this.sectionRef} className="box_wrapper">
              <div className="box_top">
                <h2 className="fadeIn">SKILLS</h2>
              </div>
              <div className="box">
                <p className="fadeIn">
                  Hotmail choker necklace frosted tips hot pockets inflatable furniture seinfeld, dawson’s creek game boy color alta vista digital pets mia hamm magic johnson.  
                </p>
                <div className="skill_tags">
                  <h5>react</h5>
                  <h5>scss</h5>
                  <h5>framer</h5>
                  <h5>figma</h5>
                  <h5>pencil</h5>
                  <h5>paper</h5>
                  <h5>procreate</h5>
                  <h5>java</h5>
                </div>
              </div>
            </div>
    
            <div ref={this.sectionRef} className="box_wrapper">
              <div className="box_top">
                <h2 className="fadeIn">CODE</h2>
              </div>
              <div className="box">
                <div className="work_box">
                  <Image src={workImg1} width="1136" height="734" alt={workTitle1} />
                  <h3>BROOKEWINKA.COM</h3>
                  <p>designer portfolio site using next.js and scss</p>
                </div>
              </div>
            </div>
    
            <div className="box_wrapper">
              <div className="box_top">
                <h2>DESIGN</h2>
              </div>
              <div className="box">
                <div className="else_box">
                  <Image src="/SushiQuadFinal_2018.png" width="840" height="662" alt={""} />
                  <h3>PRINTMAKING</h3>
                  <p>some of my printmaking work b</p>
                </div>
              </div>
            </div>
    
            <div className="box_wrapper">
              <div className="box_top">
                <h2>FINE ART</h2>
              </div>
              <div className="box">
                <div className="else_box">
                  <Image src="/smoke.jpg" width="850" height="600" alt="" />
                  <h3>ILLUSTRATION</h3>
                  <p>some of my photo work b</p>
                </div>
                <div className="else_box">
                  <Image src="/SushiQuadFinal_2018.png" width="840" height="662" alt={""} />
                  <h3>PRINTMAKING</h3>
                  <p>some of my printmaking work b</p>
                </div>
              </div>
            </div>
    
            <div className="box_wrapper">
              <div className="box_top">
                <h2>PHOTO</h2>
              </div>
              <div className="box">
                <div className="else_box">
                  <Image src="/smoke.jpg" width="840" height="662" alt={""} />
                  <h3>PHOTOS</h3>
                  <p>some of my printmaking work b</p>
                </div>
              </div>
            </div>
    
            <div className="box_wrapper">
              <div className="box_top">
                <h2>CONTACT ME!</h2>
              </div>
              <div className="box">
                <div className="contact_box">
                  <h3>HIT ME UP</h3>
                  <p>traviewhite@gmail.com</p>
                  <div className="iconsC">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faDribbble} />
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      )
    }
}
  export default Shit