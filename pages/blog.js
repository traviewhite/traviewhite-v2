import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import { fetchEntriesBlog } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

export default function Blog ({ blog }) {
  const blogItems = blog.map((b) => 
    <Link href="/blog/[slug]" as={`/blog/${b.fields.slug}`}>
      <li key={b.sys.id} id={b.fields.slug} className="blog-item">
        <a>
          <h4>{b.fields.title}</h4>
          <ReactMarkdown source={b.fields.content} />
        </a>
      </li>
    </Link>
  )

  return (
    <Layout>
      <Head>
        <title>Blog | { Name }</title>
      </Head>
      <main>
        <h1 style={{textAlign: 'center', letterSpacing: 4}}>A BLOG</h1>
        <motion.ul className="blog-grid">
          {blogItems}
        </motion.ul>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesBlog()

  return {
    props: {
      blog: await data ?? null,
    },
    revalidate: 1,
  }
}