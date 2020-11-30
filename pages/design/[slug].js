import Head from 'next/head'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
// import { client } from 'utils/contentfulPosts'

export default function DesignData({ post }) {
  // const router = useRouter();
  // const post = posts[router.query.id]
  // if (!post) return <p></p>

  const imageGallery = Object.entries(post.fields.image).map((p, i) => 
    <img key={i} src={p[1].url} alt={p[1].url} />
  )
  //console.log(post)
  return (
    <Layout>
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
          {imageGallery}
        </div>
      </main>
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
  
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  })

  return {
    props: {
      post: data.items[0],
    },
    revalidate: 1,
  }
}