import Head from '../components/Head'
import Nav from '../components/Nav'
//import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'

const Layout = ({ children })  => {
  return (
    <div className="container">
      <Head />
      <Nav />
      {children}
    </div>
  )
}

export default Layout