export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          
          <h3>Are you ready to discuss your project?</h3>

          <a className="btn btn-primary" href="">Get more points</a>
          

        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          background: #ff7b00;

          padding: 120px 0;
        }
        .container {
          text-align: center;
        }
        h3 {
          color: #fff;
          font-size: 32px;
          font-weight: 500;
          

          margin: 0 0 40px 0;
        }
        .btn {
          color: #ff7b00;
          font-weight: 600;

          background: #fff;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          border-radius: 5px;
          padding: 12px 60px;
        }
      `}</style>
    </>
  )
}