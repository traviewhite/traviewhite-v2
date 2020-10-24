import { motion } from 'framer-motion'
import Links from '../components/Links'

//const [state, setState] = useState(false)
//const { showing } = state
//const showT = setState({ showing: !showing })

const menuvariants = {
  open: {
    opacity: 1,
    display: 'block',
    overflow: 'no-scroll',
    width: 'auto',
    height: 'auto',
    transition: {
      opacity: { delay: 0.1, duration: 0.3, ease: "easeIn" }      
    }
  },
  closed: {
    opacity: 0,
    display: 'none',
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