import Head from 'next/head'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { client } from 'utils/contentfulPosts'

export default function DesignData({ blog }) {
  // console.log(post)
  const router = useRouter()

  if (!router.isFallback && !blog) {
    return <p className="error-404">404!</p>
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <Head>
            <title>{blog.fields.title} | { Name }</title>
          </Head>
          <main style={{backgroundColor: 'white', height: '100%'}}>
            <div className="design-pages">
              <div className="design-text-content">
                <h2>{blog.fields.title}</h2>
                <div className="design-text-description">
                  <ReactMarkdown source={blog.fields.content} />

                </div>
              </div>
              {/* { Object.entries(blog.fields.image).map((p, i) => 
                <img key={i} src={p[1].url} alt={'p[1].url'} />
              )} */}
            </div>
          </main>
        </>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "blog",
  })
  return {
    paths: data.items.fields?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  })
  return {
    props: {
      blog: await data.items[0] ?? null,
    },
    revalidate: 1,
  }
}