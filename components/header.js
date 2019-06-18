export default function Header(){
  return (
    <>
      <header className="header">
        <div className="container">
          
          <div className="content">
            <h1>Presentamos <span className="orange">Aero</span>store</h1>
            <h2>Sign up for a <span className="orange">FREE</span> membership to get exclusive discounts, early access to sales, and much more.</h2>
            <a href="/#" className="btn-primary">More information</a>
          </div>
          
        </div>
      </header>

      <style jsx>{`
        .header {
          position: relative;
          background-image: url(https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: bottom;
          background-color: #f8f9fa;
          border-bottom: 1px solid #e9ebec;
          
          height: 100vh;
          max-height: 600px;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr;
          align-content: center;

          height: 100%;
        }
        h1 {
          font-size: 38px;
          font-weight: bold;
          margin: 0 0 5px 0;
        }
        h2 {
          font-size: 24px;
          font-weight: 500;
  
          max-width: 450px;
          margin: 0 0 30px 0;
        }
        .btn-primary {
          color: #222;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;

          background: #fff;
          border-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          padding: 10px 25px;
        }
        .btn-primary:hover {
          color: #fff;
          background: #ff7b00;
        }
        .orange {color: #ff7b00;}
      `}</style>
    </>
  )
}