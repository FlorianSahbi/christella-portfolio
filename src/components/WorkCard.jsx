import React from "react";
import "./WorkCard.css";

const MoreButton = props => {
  return <p className="more">Voir le projet</p>;
};

const WorkCard = ({ name, description, img }) => {
  return (
    <div className="works">
      <div className="title">{name}</div>
      <div className="description">
        {description}
        <p style={{ marginTop: "1rem" }}>
          <MoreButton />
        </p>
      </div>
      <div className="image">
        <img src={img} alt="ok" />
      </div>
    </div>
  );
};

export default WorkCard;
