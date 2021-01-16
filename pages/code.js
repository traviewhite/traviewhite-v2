import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { fadeIn, stagger} from 'components/MotionA'
import { fetchEntriesCode } from 'utils/contentfulPosts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Code ({ code }) {
  const GitLink = ({ link }) => {
    if (link !== ('/')) {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      )
    } else {
      return null
    }
  }
  const codeItems = code && code.map((c) =>
    <motion.li 
      key={c.sys.id}
      className="code"
      variants={fadeIn}
    >
      <a href={c.fields.link} target="_blank" rel="noreferrer">
        <Image 
          src={c.fields.image[0].secure_url} 
          alt={c.fields.title} 
          width={c.fields.image[0].width}
          height={c.fields.image[0].height}
          objectFit='contain'
        />
      </a>

      <motion.div
        className="code-description"
      >
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
            <GitLink link={c.fields.gitLink} />
            <a href={c.fields.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.li>
  )

  return (
    <Layout>
      <Head>
        <title>Code | { Name }</title>
      </Head>
      <main>
        <motion.ul 
          className="code-wrapper"
          animate="animate"
          initial="initial"
          exit={{ opacity: 0 }}
          variants={stagger}
        >
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