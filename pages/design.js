import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { fetchEntriesPost } from 'utils/contentfulPosts'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

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

  const designItems = post.map((p) => 
    <li key={p.sys.id} id={p.fields.slug} className="thumbnail">
      <a onClick={() => {
        router.push({ 
          pathname: '/design/[slug]', 
          query: { slug: p.fields.slug },
        })
      }}>
        <img src={p.fields.image[0].url} alt={p.fields.title} />
      </a>
    </li>
  )

  return (
    <Layout>
      <Head>
        <title>Design | Travis White</title>
      </Head>
      <Tnav />
      <main>
        <motion.ul className="gallery_wrapper">
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
  let data = await fetchEntriesPost()
  // const posts = await res.map((p) => {
  //   return p.fields
  // })

  return {
    props: {
      post: await data,
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