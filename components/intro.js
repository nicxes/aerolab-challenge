function Intro() {
  return (
    <>
      <header className="intro">
        <div className="container">

          <h1>Explore</h1>
          <h2>Unlimited access to a growing library of resources that we think you should have.</h2>

        </div>
      </header>

      <style jsx>{`
        .intro {
          position: relative;
          background-color: #ff7b00;

          padding: 60px 0;
        }
        h1 {
          color: #fff;
          margin: 0;
        }
        h2 {
          color: #fff;
          font-size: 18px;
          font-weight: 400;

          max-width: 380px;
          margin: 10px 0;
        }
      `}</style>
    </>
  )
}

export default Intro