import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>traviewhite</title>
      </Head>
      <Header />
      <main>
        <div className="box_wrapper">
          <div className="box_top">
            <h2>SKILLS</h2>
          </div>
          <div className="box">
            <p>
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

        <div className="box_wrapper">
          <div className="box_top">
            <h2>WORK</h2>
          </div>
          <div className="box">
            <div className="work_box">
              <img src="../brookewinka.png" alt="" />
              <h3>BROOKEWINKA.COM</h3>
              <p>designer portfolio site using next.js and scss</p>
            </div>
          </div>
        </div>

        <div className="box_wrapper">
          <div className="box_top">
            <h2>EVERYTHING ELSE</h2>
          </div>
          <div className="box">
            <div className="else_box">
              <img src="../SushiQuadFinal_2018.png" alt="" />
              <h3>PRINTMAKING</h3>
              <p>some of my printmaking work b</p>
            </div>
            <div className="else_box">
              <img src="../smoke.jpg" alt="" />
              <h3>PHOTOGRAPHY</h3>
              <p>some of my photo work b</p>
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
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
