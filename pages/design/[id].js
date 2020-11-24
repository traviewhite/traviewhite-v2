import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from 'components/Layout'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'
import posts from 'components/posts'

export default () => {
  const router = useRouter();

  const post = posts[router.query.id]
  if (!post) return <p></p>

  return (
    <Layout>
      <Head>
        <title>{post.title} | Travis White</title>
      </Head>
      <Tnav />
      <main>
        <div className="design_pages">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <img src={post.img} />
        </div>
      </main>
    </Layout>
  )
}