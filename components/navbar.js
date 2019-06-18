import Logo from './logo'
import Link from 'next/link'

import IconUser from './icons/user'
import IconBit from './icons/bits'

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container">

            <Link href="/">
              <a>
                <Logo size={this.props.size} color={this.props.color}/>
              </a>
            </Link>

            <ul className="menu hidden-mobile hidden-tablet">
              <li><Link href="/"><a title="A simple look to our store">Overview</a></Link></li>
              <li><Link href="/explore"><a title="Unlimited access to a growing library of resources">Explore</a></Link></li>
              <li><Link href="/#"><a title="Join the AeroSquad and let us to support our community!">Community</a></Link></li>
              <li><Link href="/#"><a title="Where do you ship your products from?">Shipping</a></Link></li>
              <li><Link href="/#"><a title="Official Aerolab blog">Blog</a></Link></li>
              <li><Link href="/#"><a title="Need help? We've got your back.">Help</a></Link></li>
            </ul>

            <ul className="userbox">

              <li className="hidden-mobile hidden-tablet my-points" title="Your current points">
                <IconBit size="20" color="#ff7b00"/>
                <span>{this.props.bits}</span>
              </li>

              <li className="hidden-mobile hidden-tablet" title="Check your account information">
                <IconUser size="20"/>
              </li>

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
            top: 0;
            left: 0;
            right: 0;
            z-index: 997;

            background-color: #fff;
            border-bottom: 1px solid #EBEBEB;
            padding: 15px 0;
          }
          .container {
            display: grid;
            grid-template-columns: 1fr 16fr 5fr;
            align-items: center;
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
          }
          ul li a.active {color: #222;}
          ul li a:hover {color: #222;}

          .userbox {justify-content: flex-end;}
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

          .userbox .my-points {
            display: flex;
            align-items: center;
            
            cursor: help;
          }
          .userbox .my-points span {
            color: #ff7b00;
            font-weight: 600;

            margin: 0 0 0 5px;
          }

          @media only screen and (max-width: 768px) {
            .container {grid-template-columns: 1fr 1fr;}
            .userbox li {padding: 0 !important;}
          }
        `}</style>
      </>
    )
  }
}