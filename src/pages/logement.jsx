import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'

const Logement = () => {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <h1>Page inexistante</h1>
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
    </div>
  )
}

export default Logement
