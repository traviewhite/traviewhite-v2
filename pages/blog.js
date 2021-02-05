import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import { fetchEntriesBlog } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'
import Truncate from 'react-truncate'
import Moment from 'react-moment'
import { motion } from 'framer-motion'

export default function Blog({ blog }) {
  const blogItems = blog.map((b) => (
    <article key={b.sys.id} id={b.fields.slug} className='blog-item box-radius'>
      <Link href='/blog/[slug]' as={`/blog/${b.fields.slug}`}>
        <a>
          <h4>{b.fields.title}</h4>
        </a>
      </Link>
      <div>
        <Moment format='LL'>{b.fields.date}</Moment>
      </div>
      <p>
        <Truncate lines={3}>
          <ReactMarkdown source={b.fields.content} />
        </Truncate>
      </p>
      <Link href='/blog/[slug]' as={`/blog/${b.fields.slug}`}>
        <a>
          <p className='cyan-btn'>READ MORE →</p>
        </a>
      </Link>
    </article>
  ))

  return (
    <Layout>
      <Head>
        <title>Blog | {Name}</title>
      </Head>
      <main>
        <motion.div className='blog-top box-radius'>
          <h1>BLOG</h1>
          <p>A collection of writings about my experience as a front-end engineer and designer.</p>
        </motion.div>
        <motion.section className='blog-grid'>{blogItems}</motion.section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesBlog()

  return {
    props: {
      blog: (await data) ?? null,
    },
    revalidate: 1,
  }
}
