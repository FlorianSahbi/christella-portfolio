import React from 'react';
import './App.css';

import img1 from "./images/apes-asso.png"
import img2 from "./images/formula-1.jpeg"
import img3 from "./images/futuroscope.jpeg"
import img4 from "./images/sncf-inoui.jpeg"

const Footer = () => {
  return (
    <div className="header">
      <div className="name">Christella Levieux</div>
      <div className="name">christella.levieux@icloud.com</div>
      <a href='https://twitter.com/christella_kl/' target="_blank" className="name">twitter</a>
      <a href='https://www.linkedin.com/in/christella-levieux/' target="_blank" className="name">Linkedin</a>
    </div>
  )
}

const Header = () => {
  return(
    <div className="header">
      <div className="name">Christella Levieux<span style={{color: "red"}}>.</span></div>
    </div>
  )
}

const Card = ({name, description, img}) => {
  return(
    <div className="card">
      <div className="info">
        <div className="cardName">
          {name}
        </div>
        <div className="cardDescription">
  <p>{description}</p>
          <p>Voir le projet</p>
        </div>
      </div>

      <div className="cardImg">
        <img src={img} alt="ok" />
      </div>
    </div>
  )
}

function App() {
  return (
    <section>
      <Header />
      <p>
      Hello, Je m’appelle Christella et je suis une UX/UI designer qui travaille actuellement chez Brainsonic à Paris, je suis aussi étudiante en troisième année à HÉTIC.
      </p>
      <p>
      En parallèle, je fais du bénévolat pour l’association Braillenet.
      </p>
      <Card name="SNCF Inoui" description="Web-app responsive et social game permettant aux agents  de se former sur l’ensemble des applications client SNCF." img={img1} />
      <Card name="Formula 1" description="Refont intégrale du site web de billeterie desktop, tablet et mobile. Parcours utilisateurs
du funnel réservation du billet." img={img2} />
      <Card name="Futuroscope" description="Refont intégrale du site web de réservation du parc d’attraction, desktop et mobile." img={img3} />
      <Card name="Apes Asso" description="Refont intégrale du site web de l’association desktop, tablet et mobile. Parcours utilisateurs
du funnel réservation du billet." img={img4} />
<Footer />
    </section>
  );
}

export default App;
