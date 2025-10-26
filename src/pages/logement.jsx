import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/slideshow";
import Collapse from "../components/collapse";
import Tag from "../components/tag";
import Rating from "../components/Rating";
import "../styles/_logement.scss";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // 🔴 Redirection vers la page 404 si l'ID n'existe pas
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />
      <div className="logement__header">
        <div className="logement__info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className="logement__host">
          <div className="logement__host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={logement.equipments.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        />
      </div>
    </main>
  );
};

export default Logement;
