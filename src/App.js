import React from "react";
import "./Reset.css";
import "./App.css";

import apesAsso from "./images/apes-asso.png";
import formulaOne from "./images/formula-1.jpeg";
import futuroscope from "./images/futuroscope.jpeg";
import sncf from "./images/sncf-inoui.jpeg";

const Loader = () => {
  return (
    <section className="loader">
      <div className="loader-name">
        Christella Levieux <span className="dot-loader">.</span>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="leftnav">
        <div className="footer-name">
          Christella Levieux <span className="dot-footer">.</span>
        </div>
        <div className="name"> christella.levieux @icloud.com </div>{" "}
      </div>
      <div className="rightnav">
        <a

          href="https://twitter.com/christella_kl/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Twitter{" "}
        </a>{" "}
        <a
        style={{marginLeft: "2.5rem", color: "#40404C"}}
          href="https://www.linkedin.com/in/christella-levieux/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Linkedin{" "}
        </a>{" "}
      </div>
    </footer>
  );
};

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

const MoreButton = props => {
  return <p className="more">Voir le projet</p>;
};

const Card = ({ name, description, img }) => {
  return (
    <div className="works">
      <div className="title">{name}</div>
      <div className="description">
        {description} <MoreButton />
      </div>
      <div className="image">
        <img src={img} alt="ok" />
      </div>
    </div>
  );
};

const Header = props => {
  return (
    <header>
      <div className="leftheader">
        <p>
          Hello,
          <br />
          Je m’appelle <span className="highlightText">Christella</span> et je
          suis une UX / UI designer qui travaille actuellement chez Brainsonic à
          Paris, je suis aussi étudiante en troisième année à HÉTIC.
        </p>
        <p>
          En parallèle, je fais du bénévolat pour l’ association Braillenet.
        </p>
      </div>
      <div className="rightheader" />
    </header>
  );
};

const TitleSeparator = props => {
  return (
    <div className="separator">
      <div class="underscor" />
      Travaux
    </div>
  );
};

function App() {
  return (
    <>
      <Loader />
      <section>
        <Menu />
        <Header />
        <TitleSeparator />
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
            img={apesAsso}
          />{" "}
          <Card
            className="right"
            name="Apes Asso"
            description="Refont intégrale du site web de l’association desktop, tablet et mobile. Parcours utilisateurs
        du funnel réservation du billet.
        "
            img={futuroscope}
          />{" "}
        </section>
        <Footer />
      </section>
    </>
  );
}

export default App;
