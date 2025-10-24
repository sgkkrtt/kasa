import logements from '../data/logements.json'
import Banner from '../components/banner.jsx'
import Card from '../components/card'


const Home = () => {
  return (
  <main>
    <Banner />
    <section className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id}
        id={logement.id}
        title={logement.title}
        cover={logement.cover} />
      ))}
      </section>
  </main>
  )
}

export default Home