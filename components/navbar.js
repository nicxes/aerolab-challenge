import Logo from './logo'
import Link from 'next/link'

import IconUser from './icons/user'
import IconMenu from './icons/menu'

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

          <ul className="menu hidden-mobile hidden-tablet">
            <li><Link href="/#"><a className="active">Overview</a></Link></li>
            <li><Link href="/#"><a>Explore</a></Link></li>
            <li><Link href="/#"><a>Community</a></Link></li>
            <li><Link href="/#"><a title="Official Aerolab blog">Blog</a></Link></li>
            <li><Link href="/#"><a title="Need help? We've got your back.">Help</a></Link></li>
          </ul>

          <ul className="userbox">
            <li className="hidden-mobile hidden-tablet"><a href="/#"><IconUser size="20"/></a></li>
            <li className="hidden-desktop"><a href="/#"><IconMenu size="26"/></a></li>
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
          color: #a0a0a0;
          font-weight: 500;
          text-decoration: none;

          transition: all 0.1s ease;
        }
        .navbar ul li a.active {color: #000;}
        .navbar ul li a:hover {color: #000;}

        .userbox {justify-content: flex-end;}
        .mobile {display: none;}

        @media only screen and (max-width: 768px) {
          .navbar .container {grid-template-columns: 1fr 1fr;}
          .userbox li {padding: 0 !important;}
        }
      `}</style>
    </>
  )
}

export default Navbar