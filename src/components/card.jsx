import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
    </Link>
  )
}

export default Card
