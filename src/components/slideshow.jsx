import "../styles/_slideshow.scss";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Slideshow = ({ pictures }) => {
  if (!Array.isArray(pictures) || pictures.length === 0) return null;

  return (
    <div className="slideshow">
      <img
        src={pictures[0]}
        alt="Illustration du logement"
        className="slideshow__image"
      />

      {pictures.length > 1 && (
        <>
          <button className="slideshow__arrow left">
            <img src={arrowLeft} alt="flèche gauche" />
          </button>
          <button className="slideshow__arrow right">
            <img src={arrowRight} alt="flèche droite" />
          </button>
          <p className="slideshow__count">1/{pictures.length}</p>
        </>
      )}
    </div>
  );
};

export default Slideshow;
