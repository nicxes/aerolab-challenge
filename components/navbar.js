import Logo from './logo'
import Link from 'next/link'

import IconUser from './icons/user'
import IconMenu from './icons/menu'

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className={"navbar " + this.props.position}>
          <div className="container">

            <Link href="/">
              <a>
                <Logo size={this.props.size} color={this.props.color}/>
              </a>
            </Link>

            <ul className="menu hidden-mobile hidden-tablet">
              <li><Link href="/#"><a className="active">Overview</a></Link></li>
              <li><Link href="/#"><a>Explore</a></Link></li>
              <li><Link href="/#"><a>Community</a></Link></li>
              <li><Link href="/#"><a>Shipping</a></Link></li>
              <li><Link href="/#"><a title="Official Aerolab blog">Blog</a></Link></li>
              <li><Link href="/#"><a title="Need help? We've got your back.">Help</a></Link></li>
            </ul>

            <ul className="userbox">
              <li className="hidden-mobile hidden-tablet"><a href="/#"><IconUser size="20"/></a></li>
              <li className={this.props.open ? "hidden-desktop menu open": "hidden-desktop menu"} onClick={ this.props.handleMenu }>
                <span className="line line-top"></span>
                <span className="line line-mid"></span>
                <span className="line line-bot"></span>
              </li>
            </ul>
            
          </div>
        </nav>
      
        <style jsx>{`
          .navbar {
            position: sticky;
            background: #fff;
            border-bottom: 1px solid #EBEBEB;
            padding: 15px 0;
          }
          .container {
            display: grid;
            grid-template-columns: 1fr 16fr 5fr;
            align-items: center;
          }
          .fixed {
            position: ${this.props.position};
            background: transparent;
            top: 0;
            right: 0;
            left: 0;

            z-index: 998;
          }
          ul {
            padding: 0;
            margin: 0;

            display: flex;
          }
          ul li {
            list-style: none;
            padding: 0 15px;
          }
          ul li a {
            color: #a0a0a0;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.1s ease;
          }
          ul li a.active {color: #222;}
          ul li a:hover {color: #222;}

          .userbox {justify-content: flex-end;}
          .userbox li a {color: #222;}
          .userbox li a:hover, .userbox li.active {color: #ff7b00;}
          .userbox li.menu {
            cursor: pointer;
            height: 32px;
            width: 32px;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .line {
            height: 3px;
            width: 22px;
            
            background: #ff7b00;
            border-radius: 3px;
            transition: all 0.1s ease;
          }
          .line-mid {margin: 5px 0;}

          .line-top {transform: ${this.props.open ? "translateY(3px) rotate(48deg)": "none"}}
          .line-mid {display: ${this.props.open ? "none": "block"}}
          .line-bot {transform: ${this.props.open ? "rotate(-45deg)": "none"}}

          @media only screen and (max-width: 768px) {
            .container {grid-template-columns: 1fr 1fr;}
            .userbox li {padding: 0 !important;}
          }
        `}</style>
      </>
    )
  }
}