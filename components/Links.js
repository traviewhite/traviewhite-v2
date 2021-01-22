import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const ulvariants = {
  open: {
    transition: { delay: 0.08, staggerChildren: 0.05, delayChildren: 0.025 },
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.1, staggerDirection: -1 },
  },
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { tween: 100, ease: 'easeIn' },
    },
  },
  closed: {
    y: 70,
    opacity: 0,
    transition: {
      y: { tween: 100, ease: 'easeOut' },
    },
  },
}

const linkData = [
  {
    item: {
      link: '/code',
      name: 'CODE',
    },
  },
  {
    item: {
      link: '/design',
      name: 'DESIGN',
    },
  },
  // {
  //   "item" : {
  //     "link" : "/fine-art",
  //     "name" : "FINE ART"
  //   }
  // },
  // {
  //   item: {
  //     link: '/photo',
  //     name: 'PHOTO',
  //   },
  // },
  {
    item: {
      link: '/about',
      name: 'ABOUT',
    },
  },
]

const Links = () => {
  const router = useRouter()
  return (
    <motion.ul variants={ulvariants}>
      {linkData.map((data) => (
        <Link href={data.item.link} key={data.item.name}>
          <motion.li variants={variants}>
            <a className={router.pathname === `${data.item.link}` ? 'active' : ''}>{data.item.name}</a>
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  )
}

export default Links
