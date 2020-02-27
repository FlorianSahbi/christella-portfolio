import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <div className="nav-name">
        Christella Levieux <span className="dot-nav">.</span>
      </div>
      <div className="nav-item">
        <span style={{ marginRight: "1.5rem" }}>Travaux</span>
        <span>À propos</span>
      </div>
    </nav>
  );
};

export default Menu;
