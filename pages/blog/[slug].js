import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout, { Name } from 'components/Layout'
import { client } from 'utils/contentfulPosts'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion'

export default function DesignData({ blog }) {
  const router = useRouter()

  if (!router.isFallback && !blog) {
    return <p className='error-404'>404!</p>
  }

  return (
    <Layout>
      <Helmet>
        <style type='text/css'>
          {`
            body {
              background-color: blanchedalmond;
            }
            ::-webkit-scrollbar-track {
              background: blanchedalmond;
            }
          `}
        </style>
      </Helmet>
      {router.isFallback ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <Head>
            <title>
              {blog.fields.title} | {Name}
            </title>
          </Head>
          <main>
            <div className='blog-pages box-radius'>
              <div className='blog-content'>
                <h2>{blog.fields.title}</h2>
                <p>
                  <Moment format='LL'>{blog.fields.date}</Moment>
                </p>
                <div className='blog-description'>
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
    content_type: 'blog',
  })
  return {
    paths: data.items.fields?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  })
  return {
    props: {
      blog: (await data.items[0]) ?? null,
    },
    revalidate: 1,
  }
}
