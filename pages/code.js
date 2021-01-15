import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { fetchEntriesCode } from 'utils/contentfulPosts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Code ({ code }) {

  const codeItems = code.map((c) =>
    <li className="code" key={c.sys.id}>

        <a href={c.fields.link} target="_blank" rel="noreferrer">
          <img 
            src={c.fields.image[0].secure_url} 
            alt={c.fields.title} 
          />
        </a>

      <div className="code-description">
        <h3>{c.fields.title}</h3>
        <p>{c.fields.description}</p>
        {/* <hr/> */}
        <br/>
        <div className="code-deliverables">
          <div className="code-sub-desc">
            <h5>DELIVERED</h5>
            <p>{c.fields.delivered}</p>
          </div>
          <div className="code-links">
            <a href={c.fields.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={c.fields.gitLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </div>
    </li>
  )

  return (
    <Layout>
      <Head>
        <title>Code | { Name }</title>
      </Head>
      <main>
        <motion.ul className="code-wrapper">
          {codeItems}
        </motion.ul>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesCode()

  return {
    props: {
      code: await data ?? null,
    },
    revalidate: 1,
  }
}