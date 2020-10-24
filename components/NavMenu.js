import { motion } from 'framer-motion'
import Links from '../components/Links'

//const [state, setState] = useState(false)
//const { showing } = state
//const showT = setState({ showing: !showing })

const menuvariants = {
  open: {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
    overflow: 'no-scroll',
    transition: {
      opacity: { delay: 0, duration: 0.3, ease: "easeIn" }
    }
  },
  closed: {
    opacity: 0,
    visibility: 'hidden',
    transition: {
      opacity: { duration: 0.07 }
    }
  }
}

const NavMenu = () => (
    <motion.div 
      variants={ menuvariants }
      //className="navdisplay"
    >
      <motion.div className="nav_menu">
        <Links />
      </motion.div>
    </motion.div>
)

export default NavMenu