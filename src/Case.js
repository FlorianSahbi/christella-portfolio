import React from "react";

const gridContainer = {

  height: "100vh",
  width: "100vw",

  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  gap: "1px 1px",
  gridTemplateAreas: '"title-case title-case title-case title-case" "issue-case issue-case misc-case misc-case" "solution-case solution-case misc-case misc-case"',
}

const issueCase = {
  padding: "3rem",
  gridArea: "issue-case",
}

const solutionCase = {
  padding: "3rem",
  gridArea: "solution-case",
}

const titleCase = {
  padding: "3rem",
  height: "fit-content",

  gridArea: "title-case",
  border: "0.5px solid #959595"
}

const miscCase = {
  padding: "3rem",
  gridArea: "misc-case",
}

function CaseElem() {
  return (
    <div style={gridContainer} className="grid-container">

      <div style={titleCase} className="title-case">
        <p className="title">SNCF - INOUI TGV</p>
        <p>Application interne “Battle Inoui”</p>
      </div>

      <div style={issueCase} className="issue-case">
        <p className="title">Problème</p>
        <p>
          Depuis quelques années la SNCF a multiplié les services proposés à ses voyageurs, mais elle a également remarqué que ses collaborateurs en gare rencontraient des difficultés à accompagner les clients sur les différents applications SNCF (Oui SNCF, Voyages SNCF, TGV pro..).
        </p>
        <p>
          Comment former ces collaborateurs de manière rapide et efficace à l’ensemble des applications ?
        </p>
      </div>

      <div style={solutionCase} className="solution-case">
        <p className="title">Solution</p>
        <p>
          Les collaborateurs SNCF, répartis en deux équipes, s’affrontent via un serious game. À l’aide d’une web-app responsive et d’un dispositif projeté sur écran géant , ils doivent faire face à divers scénarios possibles sur l’ensemble des applications client SNCF tels que trouver le calendrier des prix ou encore acheter un billet jeune sur Oui SNCF.
        </p>
        <p>
          L’équipe ayant fini le serious game en premier remporte la victoire.
        </p>
      </div>

      <div style={miscCase} className="misc-case">
        <p className="title">Team</p>
        <p>Arthur Bosquette et Thomas Audoin</p>
        <p className="title">Rôle</p>
        <p>UX/UI designer </p>
        <p className="title">Outils</p>
        <p>Axure (Wireframe), Adobe XD (UI), Invision (Prototype).</p>
      </div>
    </div>
  )
}

function Case() {
  return (
    <CaseElem />
  )
}

export default Case;