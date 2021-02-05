import Head from 'next/head'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { client } from 'utils/contentfulPosts'
import Helmet from 'react-helmet'

export default function DesignData({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <p className='error-404'>404!</p>
  }

  // const imageGallery = Object.entries(post.fields.image).map((p, i) =>
  //   <img key={i} src={p[1].url} alt={'p[1].url'} />
  // )
  // const imageGallery = post.fields.image.map((p, i) =>
  //   <img key={i} src={p.url} alt={'p[1].url'} />
  // )

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
              {post.fields.title} | {Name}
            </title>
          </Head>
          {/* <div className="image_head"><img src={post.fields.image[0].url} alt="" /></div> */}
          <main>
            <div className='design-pages'>
              <div className='design-text-content'>
                <h2>{post.fields.title}</h2>
                <div className='design-text-description'>
                  <p>{post.fields.description}</p>
                  <div className='design-tags'>
                    <p>ROLE: Art Direction</p>
                    <p>YEAR: {post.fields.year}</p>
                  </div>
                </div>
              </div>
              {/* {imageGallery} */}
              {Object.entries(post.fields.image).map((p, i) => (
                <img key={i} src={p[1].secure_url} alt={'p[1].url'} />
              ))}
            </div>
          </main>
        </>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'design',
  })
  // console.log(data.items[0].fields.slug)
  return {
    paths: data.items.fields?.map(({ slug }) => `/design/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'design',
    'fields.slug': params.slug,
  })
  // console.log(`Building page: ${data.items[0].fields.slug}`)
  return {
    props: {
      post: (await data.items[0]) ?? null,
    },
    revalidate: 1,
  }
}
