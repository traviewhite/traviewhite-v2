import GlobalHead from 'components/GlobalHead'
import Nav from 'components/Nav'
import Tnav from 'components/Tnav'
import { motion } from 'framer-motion'

export const Name = 'Travis White'

// const variant = {
//   initial: { y: -100, opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} },
//   exit: { y: 100, opacity: 0, transition: {duration: 0.5, ease: 'easeInOut'} },
//   enter: { y: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'} }
// }
const variant2 = {
  initial: {
    opacity: 0,
    // backgroundColor: '#FFD23F',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    // backgroundColor: '#FFD23F',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
  enter: {
    opacity: 1,
    // backgroundColor: 'transparent',
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
}

const Layout = ({ children }) => {
  return (
    <motion.div className="container" id="container">
      <GlobalHead />
      <Nav />
      <Tnav />
      <motion.div initial="initial" animate="enter" exit="exit" variants={variant2}>
        {children}
      </motion.div>
      <footer>
        <p>
          © {new Date().getFullYear()} traviewhite.com | {Name}
        </p>
      </footer>
    </motion.div>
  )
}

export default Layout
