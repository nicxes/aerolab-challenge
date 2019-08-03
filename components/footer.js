import Logo from '../components/logo'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">

          <div className="brand">
            <a href="">
              <Logo size="30px" color="#ff7b00"/>
            </a>
            <span>© 2019 Aerolab</span>
          </div>

          <ul className="social">
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>

        </div>
      </footer>

      <style jsx>{`
        .footer {
          position: relative;
          padding: 30px 0;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: grid;
          column-gap: 10px;
          grid-template-columns: repeat(2, auto);
          align-items: center;
        }
        .brand span {
          color: #222;

        }
        .social {
          padding: 0;
          margin: 0;

          display: grid;
          column-gap: 20px;
          grid-template-columns: repeat(5, 1fr);
        }
        .social li {
          list-style: none;
        }
      `}</style>
    </>
  )
}