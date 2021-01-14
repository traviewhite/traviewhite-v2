import Head from 'next/head'
import Link from 'next/link'
import Layout, { Name } from 'components/Layout'
import { fetchEntriesFineArt } from 'utils/contentfulPosts'
import { useRouter } from 'next/router'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { twhiteImg, designImg } from 'components/content'
import Filter from 'components/Filter'
import Example from 'components/shoot'

export default function FineArt ({ fineArt }) {
  const router = useRouter()

  const zoomBi = {
    open: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      zIndex: 10,
      opacity: 0.4,
      display: 'block',
      transition: {
        width: {tween: 100, duration: 0.15, ease: 'easeIn'},
        height: {tween: 100, duration: 0.15, ease: 'easeIn'}      
      }
    },
    closed: {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'transparent',
      opacity: 0,
      transition: {
        width: {tween: 100, duration: 0.1, ease: 'easeOut'},
        height: {tween: 100, duration: 0.1, ease: 'easeOut'}
      }
    }
  }
  const zoomTi = {
    open: {
      width: 'auto',
      height: '90vh',
      objectFit: 'contain',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      zIndex: '9999',
      opacity: 1,
      transition: {
        opacity: { delay: 0, duration: 0.15, ease: "easeIn" }      
      }
    },
    closed: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      position: 'relative',
      zIndex: '1',
      opacity: 1,
      transition: {
        opacity: { duration: 0.1 }
      }
    }
  }
 
  const [isOpen, toggleOpen] = useCycle(false, true)
  
  const listItems = fineArt.map((a, i) =>
    <motion.li className="fineart-select">
      <Link href="/fine-art/[slug]" as={`/fine-art/${a.fields.slug}`}>
        <a>
          <motion.img
            src={a.fields.image[0].url} alt={a.fields.title}
            key={i}
            // animate={ isOpen ? "open" : "closed" }
            // onClick={ toggleOpen }
            // variants={ zoomTi } 
          />
        </a>
      </Link>
    </motion.li>
  );

  const filterList = twhiteImg.map((twhiteImg) => (
    <li
      key={twhiteImg}
      name={twhiteImg}
    />
  ));

  return (

    <Layout>
      <Head>
        <title>Fine Art | { Name }</title>
      </Head>
      <main>
        <Filter />
        <AnimatePresence>
          <motion.ul className="fineart-wrapper">
            {listItems}
            {filterList}
          </motion.ul>
          {/* <ul className="fineart_wrapper">
            <Example />
          </ul>
          <motion.div
            animate={ isOpen ? "open" : "closed" }
            onClick={ toggleOpen }
            variants={ zoomBi }
          /> */}
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let data = await fetchEntriesFineArt()

  return {
    props: {
      fineArt: await data,
    },
    revalidate: 1,
  }
}