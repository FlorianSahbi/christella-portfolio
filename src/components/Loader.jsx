import React from "react";
import "./Loader.css";

const Loader = ({ display = false }) => {
  if (display) {
    return (
      <section className="loader">
        <div className="loader-name">
          Christella Levieux <span className="dot-loader">.</span>
        </div>
      </section>
    );
  }
  return null;
};

export default Loader;
