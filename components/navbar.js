import Logo from './logo'
import Link from 'next/link'

function Navbar({ size, color }) {
  return (
    <>
      <nav className="navbar">
        <div className="container">

          <Link href="/">
            <a>
              <Logo size={size} color={color}/>
            </a>
          </Link>
          
        </div>
      </nav>
    
      <style jsx>
        {`
          .navbar {
            position: sticky;
            background: #fff;

            padding: 15px 0;
          }
        `}
      </style>
    </>
  )
}

export default Navbar