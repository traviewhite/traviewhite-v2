import Link from 'next/link'

const PhotoLinks = () => (
  <div className="photo-links">
    <ul>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan-btn">MAGGIE😃</a>
        </li>
      </Link>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan-btn">NATURE🌲</a>
        </li>
      </Link>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan-btn">NATURE🌲</a>
        </li>
      </Link>
    </ul>
  </div>
)

export default PhotoLinks