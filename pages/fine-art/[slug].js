import Head from 'next/head'
import Layout, { Name } from 'components/Layout'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { client } from 'utils/contentfulPosts'

export default function DesignData({ fineArt }) {
  // console.log(post)
  const router = useRouter()

  if (!router.isFallback && !fineArt) {
    return <p className="error-404">404!</p>
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <Head>
            <title>{fineArt.fields.title} | { Name }</title>
          </Head>
          <main style={{backgroundColor: 'white', height: '100%'}}>
            <div className="design-pages">
              <div className="design-text-content">
                <h2>{fineArt.fields.title}</h2>
                <div className="design-text-description">
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
              </div>
              { Object.entries(fineArt.fields.image).map((a, i) => 
                <img key={i} src={a[1].url} alt={'a[1].url'} />
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
    content_type: "fineArt",
  })
  return {
    paths: data.items.fields?.map(({ slug }) => `/fine-art/${slug}`) ?? [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "fineArt",
    "fields.slug": params.slug,
  })
  return {
    props: {
      fineArt: await data.items[0] ?? null,
    },
    revalidate: 1,
  }
}