import { useState } from "react";
import "../styles/_slideshow.scss";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Slideshow = ({ pictures }) => {
  if (!Array.isArray(pictures) || pictures.length === 0) return null;

  const [index, setIndex] = useState(0);
  const total = pictures.length;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`Illustration ${index + 1}`}
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button className="slideshow__arrow left" onClick={prev}>
            <img src={arrowLeft} alt="flèche gauche" />
          </button>
          <button className="slideshow__arrow right" onClick={next}>
            <img src={arrowRight} alt="flèche droite" />
          </button>
          <p className="slideshow__count">
            {index + 1}/{total}
          </p>
        </>
      )}
    </div>
  );
};

export default Slideshow;
