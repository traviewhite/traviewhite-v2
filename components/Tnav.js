import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const tLogo = "/t_logo.svg"

const Tnav = () => {
  const router = useRouter()
  if (router.route !== (`/`)){
    return (
      <motion.div 
        whileHover={{
          x: 1,
          y: 2,
          transition: { duration: 0.1 },
        }}
        className="t-nav"
      >
        <Link href="/">
          <a>
            <Image 
              src={tLogo} 
              alt='traviewhite T logo' 
              height={65}
              width={'auto'} 
              objectFit='contain' 
              objectPosition='top center' 
            />
          </a>
        </Link>
      </motion.div>
    )
  } else {
    return null
  }
}

export default Tnav