function Intro({InputChange}) {
  return (
    <>
      <header className="intro">
        <div className="container">

          <div>
            <h1>Explore</h1>
            <h2>Unlimited access to a growing library of resources that we think you should have.</h2>
          </div>
          
          <div className="right">
            <input type="search" spellCheck="false" placeholder="Search" className="search" onKeyUp={event => InputChange(event.target.value)}/>
          </div>

        </div>
      </header>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;

          align-items: center;
        }
        .intro {
          position: relative;
          background-color: #ff7b00;
          padding: 60px 0;
        }
        .intro h1 {
          color: #fff;
          margin: 0;
        }
        .intro h2 {
          color: #fff;
          font-size: 18px;
          font-weight: 400;

          max-width: 380px;
          margin: 10px 0;
        }
        .search {
          padding: 15px;

          color: #222;
          font-size: 18px;
          font-weight: 600;

          background: #fff;
          border-radius: 4px;
          border: 1px solid #ebebeb;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

          width: 100%;
          max-width: 460px;
          outline: 0;

          float: right;
        }

        @media only screen and (max-width: 700px) {
          .container {
            grid-template-columns: 1fr;
          }

          .search {float: none;}
          .intro h2 {margin-bottom: 20px;}
        }
      `}</style>
    </>
  )
}

export default Intro