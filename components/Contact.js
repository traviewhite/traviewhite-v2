import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Social = () => {

  return (
    <div className="social_links">
      <Link href="https://github.com/traviewhite">
        <a target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
      <Link href="http://instagram.com/traviewhite">
        <a target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Link>
      <Link href="http://dribbble.com/traviewhite">
        <a target="_blank">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/traviewhite">
        <a target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
    </div>
  )
}

export default Social