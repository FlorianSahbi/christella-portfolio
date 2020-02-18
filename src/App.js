import React from "react";
import "./App.css";

import apesAsso from "./images/apes-asso.png";
import formulaOne from "./images/formula-1.jpeg";
import futuroscope from "./images/futuroscope.jpeg";
import sncf from "./images/sncf-inoui.jpeg";

const Footer = () => {
  return (
    <div className="header">
      <div className="name"> Christella Levieux </div>{" "}
      <div className="name"> christella.levieux @icloud.com </div>{" "}
      <a
        href="https://twitter.com/christella_kl/"
        target="_blank"
        rel="noopener noreferrer"
        className="name"
      >
        twitter{" "}
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/christella-levieux/"
        target="_blank"
        rel="noopener noreferrer"
        className="name"
      >
        Linkedin{" "}
      </a>{" "}
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        Christella Levieux <span style={{ color: "red" }}> . </span>{" "}
      </div>{" "}
    </div>
  );
};

const Card = ({ name, description, img }) => {
  return (
    <div className="works">
      <div className="title">{name}</div>
      <div className="description">{description} <p>Voir le projet</p></div>
      <div className="image">
        <img src={img} alt="ok" />
      </div>
    </div>
  );
};

function App() {
  return (
    <section>
      <Header />
      <p>
        Hello, Je m’ appelle Christella et je suis une UX / UI designer qui
        travaille actuellement chez Brainsonic à Paris, je suis aussi étudiante
        en troisième année à HÉTIC.{" "}
      </p>{" "}
      <p>
        {" "}
        En parallèle, je fais du bénévolat pour l’ association Braillenet.{" "}
      </p>{" "}
      <section className="works-list">
        <Card
          className="left"
          name="SNCF Inoui"
          description="Web-app responsive et social game permettant aux agents  de se former sur l’ensemble des applications client SNCF."
          img={sncf}
        />{" "}
        <Card
          className="right"
          name="Formula 1"
          description="Refont intégrale du site web de billeterie desktop, tablet et mobile. Parcours utilisateurs
        du funnel réservation du billet.
        "
          img={formulaOne}
        />{" "}
        <Card
          className="left"
          name="Futuroscope"
          description="Refont intégrale du site web de réservation du parc d’attraction, desktop et mobile."
          img={futuroscope}
        />{" "}
        <Card
          className="right"
          name="Apes Asso"
          description="Refont intégrale du site web de l’association desktop, tablet et mobile. Parcours utilisateurs
        du funnel réservation du billet.
        "
          img={apesAsso}
        />{" "}
      </section>
      <Footer />
    </section>
  );
}

export default App;
