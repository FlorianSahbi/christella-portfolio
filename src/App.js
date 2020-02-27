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
        <Footer />
      </section>
    </>
  );
}

export default App;
