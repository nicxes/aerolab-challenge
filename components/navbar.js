import Logo from './logo'
import Link from 'next/link'

function Navbar({ size, color, position }) {
  return (
    <>
      <nav className={"navbar " + position}>
        <div className="container">

          <Link href="/">
            <a>
              <Logo size={size} color={color}/>
            </a>
          </Link>

          <ul className="menu">
            <li><Link href="/#"><a>Overview</a></Link></li>
            <li><Link href="/#"><a>Explore</a></Link></li>
            <li><Link href="/#"><a>Community</a></Link></li>
            <li><Link href="/#"><a>Blog</a></Link></li>
            <li><Link href="/#"><a>Help</a></Link></li>
          </ul>
          
        </div>
      </nav>
    
      <style jsx>{`
        .navbar {
          position: sticky;
          background: #fff;
          padding: 15px 0;
        }
        .navbar .container {
          display: grid;
          grid-template-columns: 1fr 16fr 5fr;
          align-items: center;
        }
        .navbar.fixed {
          position: ${position};
          background: transparent;
          top: 0;
          right: 0;
          left: 0;

          z-index: 998;
        }
        .navbar ul {
          padding: 0;
          margin: 0;

          display: flex;
        }
        .navbar ul li {
          list-style: none;
          padding: 0 15px;
        }
        .navbar ul li a {
          color: #000;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default Navbar