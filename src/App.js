import React from "react";
import "./Reset.css";
import "./App.css";

import Loader from "./components/Loader";
import Menu from "./components/Menu";
import Header from "./components/Header";
import TitleSeparator from "./components/TitleSeparator";
import WorkCard from "./components/WorkCard";
import Footer from "./components/Footer";

import apesAsso from "./images/apes-asso.png";
import formulaOne from "./images/formula-1.jpeg";
import futuroscope from "./images/futuroscope.jpeg";
import sncf from "./images/sncf-inoui.jpeg";

function App() {
  return (
    <>
      <Loader />
      <section>
        <Menu />
        <Header />
        <TitleSeparator title="Travaux" />
        <section className="works-list">
          <WorkCard
            className="left"
            name="SNCF Inoui"
            description="Web-app responsive et social game permettant aux agents  de se former sur l’ensemble des applications client SNCF."
            img={sncf}
          />
          <WorkCard
            className="right"
            name="Formula 1"
            description="Refont intégrale du site web de billeterie desktop, tablet et mobile. Parcours utilisateurs
            du funnel réservation du billet.
            "
            img={formulaOne}
          />
          <WorkCard
            className="left"
            name="Futuroscope"
            description="Refont intégrale du site web de réservation du parc d’attraction, desktop et mobile."
            img={apesAsso}
          />
          <WorkCard
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
            <p>
              J’ai travaillé deux ans en agence digital, là où j’ai pu analyser
              les problèmatiques de différents clients, startups ou grands
              groupes sur des projets divers tel que des applications, des sites
              web et des produits. Afin d’accompagner au mieux ces clients, j’ai
              pu mettre en place des propositions de méthodologie et de concepts
              UX en élaborant des parcours et tests utilisateurs, des audits
              d’accessibilité numérique ou encore en effectuant de l’observation
              terrain.
            </p>
            <p>
              À côté de mon travail et de mes êtudes, j’ai pu proposer mes
              services en ergonomie à une association luttant contre le
              décrochage scolaire, une médiathèque et à l’association
              Braillenet, tous les week-ends.
            </p>
            <p>
              J’ai 21 ans et je suis passionnée de linguistique, de littérature
              russe et de patinage artistique. Je m’intéresse tout
              particulièrement au domaine de l’éducation de la santé. Lorsque
              j’ai un peu de temps libre, je joue à animal crossing.
            </p>
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
