import Head from '../components/Head'
//import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'

const Layout = ({ children })  => {
  return (
    <div className="container">
      <Head />
      {children}
    </div>
  )
}

export default Layout