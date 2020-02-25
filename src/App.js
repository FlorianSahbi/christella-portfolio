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
        <div className="name"> christella.levieux @icloud.com </div>
      </div>
      <div className="rightnav">
        <a
          href="https://twitter.com/christella_kl/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Twitter
        </a>
        <a
          style={{ marginLeft: "2.5rem", color: "#40404C" }}
          href="https://www.linkedin.com/in/christella-levieux/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Linkedin
        </a>
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

const TitleSeparator = ({ title }) => {
  return (
    <div className="separator">
      <div class="underscor" />
      {title}
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
        <TitleSeparator title="Travaux" />
        <section className="works-list">
            <Card
              className="left"
              name="SNCF Inoui"
              description="Web-app responsive et social game permettant aux agents  de se former sur l’ensemble des applications client SNCF."
              img={sncf}
            />
            <Card
              className="right"
              name="Formula 1"
              description="Refont intégrale du site web de billeterie desktop, tablet et mobile. Parcours utilisateurs
            du funnel réservation du billet.
            "
              img={formulaOne}
            />
            <Card
              className="left"
              name="Futuroscope"
              description="Refont intégrale du site web de réservation du parc d’attraction, desktop et mobile."
              img={apesAsso}
            />
            <Card
              className="right"
              name="Apes Asso"
              description="Refont intégrale du site web de l’association desktop, tablet et mobile. Parcours utilisateurs
            du funnel réservation du billet.
            "
              img={futuroscope}
            />
        </section>
        <TitleSeparator title="CV" />
        <section className="cv">
          <div className="photo-cv">
           <p>J’ai travaillé deux ans en agence digital, là où j’ai pu analyser les problèmatiques de différents clients, startups ou grands groupes sur des projets divers tel que des applications, des sites web et des produits. Afin d’accompagner au mieux ces clients, j’ai pu mettre en place des propositions de méthodologie et de concepts UX en élaborant des parcours et tests utilisateurs, des audits d’accessibilité numérique ou encore en effectuant de l’observation terrain.</p>
           <p>À côté de mon travail et de mes êtudes, j’ai pu proposer mes services en ergonomie à une association luttant contre le décrochage scolaire, une médiathèque et à l’association Braillenet, tous les week-ends.</p>
           <p>J’ai 21 ans et je suis passionnée de linguistique, de littérature russe et de patinage artistique. Je m’intéresse tout particulièrement au domaine de l’éducation de la santé. Lorsque j’ai un peu de temps libre, je joue à animal crossing.</p>
          </div>
          <div className="photo-xp">
            <h2>Expériences</h2>
            <div>Expériences</div>
            <div>Expériences</div>
            <h2>Formations</h2>
            <div>Formation</div>
            <div>Formation</div>
            <h2>Contact</h2>
            <div>Icone</div>
            <div>Icone</div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default App;
