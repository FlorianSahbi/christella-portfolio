import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="leftheader">
        <p style={{marginBottom: "3rem"}}>
          Hello,
          <br />
          Je m’appelle <span className="highlightText">Christella</span> et je
          suis une UX/UI designer qui travaille actuellement chez Brainsonic à
          Paris, je suis aussi étudiante en troisième année à HÉTIC.
        </p>
        <p>
          En parallèle, je fais du bénévolat pour l’association Braillenet.
        </p>
      </div>
      <div className="righheader" />
    </header>
  );
};

export default Header;
