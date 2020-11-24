import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import { codeData } from 'components/content'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Code () {

  const codeItems = codeData.map((value) =>
    <li className="code">
      <Link href={value.link}>
        <a target="_blank"><img src={value.img} alt={value.alt} unsized /></a>
      </Link>
      <div className="code_description">
        <h3>{value.title}</h3>
        <p>{value.description}</p>
        {/* <hr/> */}
        <br/>
        <div className="code_deliverables">
          <div className="code_sub_desc">
            <h5>DELIVERED</h5>
            <p>WEB DEV</p>
          </div>
          <div className="code_links">
            <Link href={value.gitLink}>
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href={value.link}>
              <a target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <Layout>
      <Head>
        <title>Code | Travis White</title>
      </Head>
      <Tnav />
      <main>
        <motion.ul className="code_wrapper">
          {codeItems}
        </motion.ul>
      </main>
    </Layout>
  )
}