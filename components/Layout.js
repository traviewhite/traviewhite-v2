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
      <div className="footerC"><p>©2020 traviewhite.com | TRAVIS WHITE</p></div>
    </div>
  )
}

export default Layout