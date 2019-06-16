import Card from './overview/card'

export default function Overview() {
  return (
    <>
      <section className="overview">
        <div className="container">
          
          <h3 className="title">Popular Categories</h3>
          <p className="description">The most popular category in the last 24 hours.</p>

          <ul>
            <Card 
              title="Developers Tools"
              description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
              picture="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            />
            <Card 
              title="Design Tools"
              description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
              picture="https://images.unsplash.com/photo-1550867428-138aec9fce23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            />
            <Card 
              title="Random"
              description="As a Developer you’re probably always looking to learn things and test new tools and technologies. Start working with grids right now with this HTML & CSS boilerplate, and learn how to apply."
              picture="https://images.unsplash.com/photo-1461748659110-16121c049d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />
          </ul>
          
        </div>
      </section>

      <style jsx>{`
        .overview {
          position: relative;
          padding: 30px 0;
        }
        .title {
          font-size: 28px;
          font-weight: 400;
          margin: 0;
        }
        .description {
          font-weight: 300;
          margin: 5px 0 30px 0;
        }
        ul {
          display: grid;
          grid-template-columns: repeat(10, 100%);
          column-gap: 10px;

          margin: 0 -20px;
          padding: 0 20px;
          overflow: auto;
        }
        @media only screen and (min-width: 769px) {
          .overview {padding: 50px 0;}
          ul {
            margin: 0;
            padding: 0;

            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 20px;
            overflow: hidden;
          }
        }

      `}</style>
    </>
  )
}