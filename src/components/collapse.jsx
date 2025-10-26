import { useState } from "react";
import arrowIcon from "../assets/arrow.svg";
import "../styles/_collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <img
          src={arrowIcon}
          alt="flèche"
          className={`collapse__arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content)
            ? content.map((item, index) => <p key={index}>{item}</p>)
            : <p>{content}</p>}
        </div>
      )}
    </div>
  );
};

export default Collapse;
