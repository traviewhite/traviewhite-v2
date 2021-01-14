import Head from 'next/head'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { client } from 'utils/contentfulPosts'

export default function DesignData({ post }) {
  // console.log(post)
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <p className="error-404">404!</p>
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
        <p className="loading">Loading...</p>
      ) : (
        <>
          <Head>
            <title>{post.fields.title} | { Name }</title>
          </Head>
          {/* <div className="image_head"><img src={post.fields.image[0].url} alt="" /></div> */}
          <main>
            <div className="design-pages">
              <div className="design-text-content">
                <h2>{post.fields.title}</h2>
                <div className="design-text-description">
                  <p>Mood rings animated gifs keds got milk cut-off jean shorts hot pockets. 
                  Converse discovery zone girl power zack morris scrolling text, stretch armstrong 
                  george michael cornrows I don’t want no scrubs hotmail.</p>
                  <div className="design-tags">
                    <p>ROLE: Direction</p>
                    <p>YEAR: 2019</p>
                  </div>

                </div>
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
      post: await data.items[0] ?? null,
    },
    revalidate: 1,
  }
}