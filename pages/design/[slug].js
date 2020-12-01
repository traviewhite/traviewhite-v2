import Head from 'next/head'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
// import { client } from 'utils/contentfulPosts'

export default function DesignData({ post }) {
  console.log(post)
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <p>404!</p>
  }

  // const imageGallery = Object.entries(post.fields.image).map((p, i) => 
  //   <img key={i} src={p[1].url} alt={'p[1].url'} />
  // )
  // const imageGallery = post.fields.image.map((p, i) => 
  //   <img key={i} src={p.url} alt={'p[1].url'} />
  // )


  return (
    <Layout>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <>
          <Head>
            <title>{post.fields.title} | Travis White</title>
          </Head>
          <Tnav />
          <main>
            <div className="design_pages">
              <div className="design_text_content">
                <h2>{post.fields.title}</h2>
                <p>Mood rings animated gifs keds got milk cut-off jean shorts hot pockets. 
                  Converse discovery zone girl power zack morris scrolling text, stretch armstrong 
                  george michael cornrows I don’t want no scrubs hotmail.</p>
              </div>
              {/* {imageGallery} */}
              { Object.entries(post.fields.image).map((p, i) => 
                <img key={i} src={p[1].url} alt={'p[1].url'} />
              )}
            </div>
          </main>
        </>
      )}
    </Layout>
  )
}

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

let client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "post",
  })
  // console.log(data.items[0].fields.slug)
  return {
    // paths: Object.entries(data.items).map((item) => ({
    //   params: { slug: item[1].fields.slug },
    // })),
    paths: data.items.fields?.map(({ slug }) => `/design/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  })
  // console.log(`Building page: ${data.items[0].fields.slug}`)
  return {
    props: {
      post: data.items[0] ?? null,
    },
    revalidate: 1,
  }
}