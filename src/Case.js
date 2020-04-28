import React from "react";
import Typography from "./components/atoms/Typography";

const gridContainer = {

  height: "595px",
  width: "842px",

  backgroundColor: "#fff",

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
        <Typography type="titleCase">SNCF - INOUI TGV</Typography>
        <Typography type="subtitleCase">Application interne “Battle Inoui”</Typography>
      </div>

      <div style={issueCase} className="issue-case">
        <Typography type="titleH1">Problème</Typography>
        <Typography type="subtitleCase">Depuis quelques années la SNCF a multiplié les services proposés à ses voyageurs, mais elle a également remarqué que ses collaborateurs en gare rencontraient des difficultés à accompagner les clients sur les différents applications SNCF (Oui SNCF, Voyages SNCF, TGV pro..).</Typography>
        <Typography type="subtitleCase">Comment former ces collaborateurs de manière rapide et efficace à l’ensemble des applications ?</Typography>
      </div>

      <div style={solutionCase} className="solution-case">
        <Typography type="titleH1">Solution</Typography>
        <Typography type="subtitleCase">Les collaborateurs SNCF, répartis en deux équipes, s’affrontent via un serious game. À l’aide d’une web-app responsive et d’un dispositif projeté sur écran géant , ils doivent faire face à divers scénarios possibles sur l’ensemble des applications client SNCF tels que trouver le calendrier des prix ou encore acheter un billet jeune sur Oui SNCF.</Typography>
        <Typography type="subtitleCase">L’équipe ayant fini le serious game en premier remporte la victoire.</Typography>
      </div>

      <div style={miscCase} className="misc-case">
        <Typography type="titleH1">Team</Typography>
        <Typography type="subtitleCase">Arthur Bosquette et Thomas Audoin</Typography>
        <Typography type="titleH1">Rôle</Typography>
        <Typography type="subtitleCase">UX/UI designer</Typography>
        <Typography type="titleH1">Outils</Typography>
        <Typography type="subtitleCase">Axure (Wireframe), Adobe XD (UI), Invision (Prototype).</Typography>
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