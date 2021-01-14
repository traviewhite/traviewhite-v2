import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const tLogo = "/t_logo.svg"

const Tnav = () => {
  const router = useRouter()

  if (router.route !== (`/`)){
    return (
      <div className="t-nav">
        <Link href="/">
          <a>
            <Image 
              src={tLogo} 
              alt='traviewhite T logo' 
              height={'auto'} 
              width={50} 
              objectFit='contain' 
              objectPosition='50% 50%' 
            />
          </a>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default Tnav