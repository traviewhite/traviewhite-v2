import Link from 'next/link'

const PhotoLinks = () => (
  <div className="photo_links">
    <ul>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan_btn">MAGGIE😃</a>
        </li>
      </Link>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan_btn">NATURE🌲</a>
        </li>
      </Link>
      <Link href="/photo/maggie">
        <li>
          <a className="cyan_btn">NATURE🌲</a>
        </li>
      </Link>
    </ul>
  </div>
)

export default PhotoLinks