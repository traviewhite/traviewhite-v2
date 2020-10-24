import Link from 'next/link'

export default function Header() {
  return (
    <div className="heading">
      <div className="center">
        <div className="center_img">
          <img className="home_trav" src="../traviswhite_portrait_min.jpg" alt="Travis White Avitar" />
          <img className="home_mags" src="../maggie_portrait_min.jpg" alt="Maggie the Dog Avitar" />
        </div>
        <div className="center_text">
          <Link href="/">
            <a><img className="home_logo" src="../logo.svg" alt="Travis White Logo" /></a>
          </Link>
          <h4>a front-end developer &<br/>designer</h4>
        </div>
      </div>
    </div>
  )
}