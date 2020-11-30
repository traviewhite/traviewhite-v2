import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import { fetchEntriesCode } from 'utils/contentfulPosts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Code ({ code }) {

  const codeItems = code.map((c) =>
    <li className="code" key={c.sys.id}>
      <Link href={c.fields.link}>
        <a target="_blank"><img src={c.fields.image[0].url} alt={c.fields.title} /></a>
      </Link>
      <div className="code_description">
        <h3>{c.fields.title}</h3>
        <p>{c.fields.description}</p>
        {/* <hr/> */}
        <br/>
        <div className="code_deliverables">
          <div className="code_sub_desc">
            <h5>DELIVERED</h5>
            <p>{c.fields.delivered}</p>
          </div>
          <div className="code_links">
            <Link href={c.fields.link}>
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href={c.fields.gitLink}>
              <a target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  )

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

export async function getStaticProps() {
  let res = await fetchEntriesCode()

  return {
    props: {
      code: await res,
    },
    revalidate: 1,
  }
}