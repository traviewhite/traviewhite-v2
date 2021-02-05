import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const socialData = {
  socials: [
    {
      item: {
        link: 'https://github.com/traviewhite',
        icon: 'github',
      },
    },
    {
      item: {
        link: 'http://instagram.com/traviewhite',
        icon: 'instagram',
      },
    },
    {
      item: {
        link: 'http://dribbble.com/traviewhite',
        icon: 'dribbble',
      },
    },
    {
      item: {
        link: 'https://linkedin.com/in/traviewhite',
        icon: 'linkedin',
      },
    },
  ],
}

export const Social = () => {
  return (
    <div className='social-links'>
      {socialData.socials.map((i) => (
        <a href={i.item.link} target='_blank' rel='noopener noreferrer' key={i.item.link}>
          <FontAwesomeIcon icon={['fab', i.item.icon]} />
        </a>
      ))}
    </div>
  )
}

export default Social
