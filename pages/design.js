import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout, { Name } from 'components/Layout'
import { fetchEntriesDesign } from 'utils/contentfulPosts'
import { motion } from 'framer-motion'
import { fadeIn, stagger} from 'components/MotionA'

export default function Design ({ post }) {
  // NEEDED FOR OPTION ONE OF IMPORTING DATA FROM CONTENTFUL; FROM HERE -->

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   async function getPosts() {
  //     const allPosts = await fetchEntries()
  //     setPosts([...allPosts])
  //   }
  //   getPosts()
  // }, [])

  //<--- TO HERE

  // <li key={p.sys.id} id={p.fields.slug} className="thumbnail" onClick={() => {
  //   router.push({ 
  //     pathname: '/design/[slug]', 
  //     query: { slug: p.fields.slug },
  //   })
  // }}>

  // <li key={p.sys.id} id={p.fields.slug} className="thumbnail">
  //   <a onClick={() => {
  //     router.push({ 
  //       pathname: '/design/[slug]', 
  //       query: { slug: p.fields.slug },
  //     })
  //   }}>
  //     <img src={p.fields.image[0].url} alt={p.fields.title} />
  //   </a>
  // </li>

  const router = useRouter()

  const designItems = post.map((p) => 
    <Link href="/design/[slug]" as={`/design/${p.fields.slug}`} key={p.sys.id}>
      <motion.li 
        id={p.fields.slug} 
        className="thumbnail"
        variants={fadeIn}
      >
        <Image 
          src={p.fields.image[0].secure_url} 
          alt={p.fields.title} 
          width={p.fields.image[0].width}
          height={p.fields.image[0].height}
          objectFit='cover'
          objectPosition='top center'
        />
      </motion.li>
    </Link>
  )

  return (
    <Layout>
      <Head>
        <title>Design | { Name }</title>
      </Head>
      <main>
        <motion.ul 
          className="gallery-wrapper"
          animate="animate"
          initial="initial"
          exit={{ opacity: 0 }}
          variants={stagger}
        >
          {designItems}

          {/* ONE OPTION TO PULL AND PARSE DATA FROM CONTENTFUL */}
          {/* {posts.length > 0
            ? posts.map((p) => 
              <Post
                title={p.fields.title}
                date={p.fields.date}
                image={p.fields.image[0].url}
                alt={p.fields.alt}
                key={p.fields.title}
                // url={p.fields.url}
              />
            )
          : null} */}

        </motion.ul>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetchEntriesDesign()
  // const posts = await res.map((p) => {
  //   return p.fields
  // })

  return {
    props: {
      post: await data ?? null,
    },
    revalidate: 1,
  }
}

// IF YOU NEED TO PULL IN DATA THAT IS OUTSIDE OF POST USE THIS (and/or replace the client info in the utils folder with this client info)

// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
// const client = require('contentful').createClient({
//   space: space,
//   accessToken: accessToken,
// })
// export async function getStaticProps() {
//   let data = await client.getEntries({
//     content_type: 'post',
//   })

//   return {
//     props: {
//       posts: data.items
//     },
//     revalidate: 1,
//   }
// }


// REFERENCE

// const designTings = Object.entries(posts).map((value, i) =>
//   <li key={i} className="thumbnail">
//     <Link href="/design/[slug]" as={"/design/" + value[0]}>
//       <a><img src={value[1].img} /></a>
//     </Link>
//   </li>
// );

//<motion.div className="gallery_title"><h3>design&nbsp;<br/>gallery</h3></motion.div>





// maybe useful

// // pages/blog/[slug].js

// import {useRouter} from 'next/router'
// import DefaultErrorPage from 'next/error'

// export async function getStaticProps({ params }) {
//   // fetch data from CMS through params
//   const post = await getBlogItem(params.slug)
//   return {
//     props: {
//       post
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: []
//   }
// }

// export default function MyPage({post}) {
//   const router = useRouter()

//   if(router.isFallback) {
//      return <h1>Loading...</h1>
//   }

//   // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
//   if(!post) {
//     return <>
//       <Head>
//         <meta name="robots" content="noindex">
//       </Head>
//       <DefaultErrorPage statusCode={404} />
//     </>
//   }

//   return <h1>{post.title}</h1>
// }