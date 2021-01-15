import GlobalHead from 'components/GlobalHead'
import Nav from 'components/Nav'
import Tnav from 'components/Tnav'

export const Name = 'Travis White'

const Layout = ({ children })  => {
  return (
    <div className="container">
      <GlobalHead />
      <Nav />
      <Tnav />
      {children}
      <footer><p>© {(new Date().getFullYear())} traviewhite.com | {Name}</p></footer>
    </div>
  )
}

export default Layout

