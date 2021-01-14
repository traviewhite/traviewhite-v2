import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const tLogo = "../t_logo.png"

const Tnav = () => {
  const router = useRouter()

  if (router.route !== (`/`)){
    return (
      <div className="t-nav">
        <Link href="/">
          <a><img src={tLogo} alt="traviewhite T logo" /></a>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default Tnav