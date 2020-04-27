import React from "react";
import Typography from "./components/atoms/Typography";
import img from "./images/apes-asso.png"

const personasData = [
  {
    name: "Marie",
    description: "“Cela fait déjà 20 ans que je travaille à la SNCF et en 20 ans, beaucoup de choses ont changés. Notament au niveau des services numériques que je ne maitrise pas forcément.”",
    job: "Agent en gare SNCF",
    age: "42 ans",
    place: "Habite à Strasbourg",
    computer: 30,
    mobile: 70,
    color: "#037198",
    expectations: [
      "Un dispositif ludique et participatif",
      "Formations plus courtes mais plus efficaces ",
      "Pratique de cas réels déjà rencontrés sur le terrain",
    ],
    frustrations: [
      "L’apprentissage de parcours sans réelles pratiques",
      "Séances de formations longues et ennuyantes",
      "Peu de participations à l’oral",
    ],
    goals: [
      "Répondre le plus rapidement possible à la demande du client",
      "Ne plus avoir besoin de demander de l’aide à ses collègues",
      "Savoir utiliser les applicationsréservés aux agents",
    ]
  },
  {
    name: "Julien ",
    description: "“Je suis rentré depuis peu à la SNCF, je ne connais pas toutes les applications disponibles par cœur et je rencontre beaucoup de clients me demandant de l’aide.”",
    job: "Agent en gare SNCF",
    age: "33 ans",
    place: "Habite à Lille",
    computer: 60,
    mobile: 40,
    color: "#9D2A43",
    expectations: [
      "Un coach spécialisé pour un peu plus de dynamisme",
      "Compétitions entre équipes avec classements à la fin ",
      "Cas de pratiques assez variés sur plusieurs thèmes",
    ],
    frustrations: [
      "L’apprentissage individuel, être seul devant un outil",
      "Accessibilité de la formation réduite à quelques personnes",
      "Méthode d’apprentissage peu innovante et ennuyante",
    ],
    goals: [
      "Être préparé aux différentes questions des clients sur les applis",
      "En apprendre plus sur les cas spécifiques (résa en fauteuil roulant)",
      "Être capable d’aider ses collègues rencontrant des difficultés",
    ]
  },
  {
    name: "Asmaa ",
    description: "“Avec mes trois jeunes enfants, je ne suis pas en mesure d’aider correctements mon fils dans sa scolarité dans lesquelles j’aimerais le voir s’épanouir”",
    job: "Mère au foyer",
    age: "34 ans",
    place: "Habite à Saint Michel S/O",
    computer: 20,
    mobile: 80,
    color: "#89C482",
    expectations: [
      "Trouver facilement une structure d’aide aux devoirs près de chez elle",
      "Inscrire son fils dans une activité qui pourrait le stimuler réellement",
    ],
    frustrations: [
      "Les cours avec un professeur particulier sont chers",
      "Elle a un bébé de 16 mois qui occupe la plus part de son temps ",
      "Son fils ne supporte pas rester à l’étude après l’école ",
    ],
    goals: [
      "Relever le niveau scolaire de son fils qui a bien chuté cette année",
      "Inscrire son fils à une activité qui pourrait le stimuler réellement",
      "Trouver de l’aide pour les turbulences de son fils concernant l’école",
    ]
  },
  {
    name: "Karine ",
    description: "“J’aimerais que ma fille, assez timide, puisse bénéficier d’une aide dans sa scolarité et  ainsi s’ouvrir un peu plus aux autres enfants”",
    job: "Serveuse",
    age: "36 ans",
    place: "Habite à Saint Michel S/O",
    computer: 20,
    mobile: 80,
    color: "#009247",
    expectations: [
      "Pouvoir laisser sa fille en lieu sûr",
      "Sous la responsabilité de professionnels  ",
      "Accéder à des tarifs abordables",
    ],
    frustrations: [
      "Elle n’a pas vraiment le temps de chercher partout ",
      "Sa fille a besoin d’être rassurée avant de se rendre à un endroit",
      "Elle bloque sur certains exercices de son enfant",
    ],
    goals: [
      "Obtenir de l’aide dans les devoirs de sa fille",
      "Que sa fille s’ouvre un peu plus aux autres enfants",
      "Inscrire sa fille à des activités artistiques",
    ]
  },
  {
    name: "Christophe ",
    description: "“Je me fait souvent livrer sur le temps du midi, je ne connais pas vraiment les adresses accessibles en fauteuil roulant autour de ƒmon lieu de travail.”",
    job: "Développeur Back-end",
    age: "38 ans",
    place: "Habite à Paris",
    computer: 70,
    mobile: 30,
    color: "#EFA764",
    expectations: [
      "Un système de recherche ultrapersonnalisée ",
      "Un service fédérateur (challenges, workshops)  ",
      "Une liste d’adresses favorites",
    ],
    frustrations: [
      "Ne pas avoir d’informations sur l’accessibilité du restaurant",
      "Utiliser une énième application sans réelles différences",
      "Pas de détails sur la grillle d’évaluation du ‘greenscore”",
    ],
    goals: [
      "Trouver des adresses accessibles en fauteuil roulant",
      "Découvrir de nouveaux endroits où déjeuner avec ses collègues",
      "Manger plus sainement",
    ]
  },
  {
    name: "Elios ",
    description: "“Je me soucie de l’impact que peut avoir ma consommation sur la planète. J’essaye de réduire ma consommation de viande et j’aimerais trouver des adresses végétariennes près de mon école.”",
    job: "Étudiant en motion design",
    age: "22 ans",
    place: "Habite à Montreuil",
    computer: 60,
    mobile: 40,
    color: "#EFA764",
    expectations: [
      "Des récompenses sous  forme réductions",
      "L’itinéraire jusqu’au lieu affichée sur une map ",
      "Un label officiel assurant la crédibilité de l’app",
    ],
    frustrations: [
      "Trouver une adresse “végé” mais qui ne possède qu’un plat végé.",
      "Absence d’adresses accessibles pour les petits budgets ",
      "Peu de mises à jour concernant les adresses qui ferment/ouvrent",
    ],
    goals: [
      "Obtenir un carnet d’adresses écoresponsables",
      "Élargir son champs d’actions écologique en consommant local",
      "Sensibiliser ses amis sur une alimentation plus saine ",
    ]
  },
  {
    name: "Julien ",
    description: "“Je suis rentré depuis peu à la SNCF, je ne connais pas toutes les applications disponibles par cœur et je rencontre beaucoup de clients me demandant de l’aide.”",
    job: "Agent en gare SNCF",
    age: "33 ans",
    place: "Habite à Lille",
    computer: 50,
    mobile: 50,
    color: "#302462",
    expectations: [
      "Un coach spécialisé pour un peu plus de dynamisme",
      "Compétitions entre équipes avec classements à la fin ",
      "Cas de pratiques assez variés sur plusieurs thèmes",
    ],
    frustrations: [
      "L’apprentissage individuel, être seul devant un outil",
      "Accessibilité de la formation réduite à quelques personnes",
      "Méthode d’apprentissage peu innovante et ennuyante",
    ],
    goals: [
      "Être préparé aux différentes questions des clients sur les applis",
      "En apprendre plus sur les cas spécifiques (résa en fauteuil roulant)",
      "Être capable d’aider ses collègues rencontrant des difficultés",
    ]
  },
  {
    name: "Julien ",
    description: "“Je suis rentré depuis peu à la SNCF, je ne connais pas toutes les applications disponibles par cœur et je rencontre beaucoup de clients me demandant de l’aide.”",
    job: "Agent en gare SNCF",
    age: "33 ans",
    place: "Habite à Lille",
    computer: 60,
    mobile: 40,
    color: "#FF7D37",
    expectations: [
      "Un coach spécialisé pour un peu plus de dynamisme",
      "Compétitions entre équipes avec classements à la fin ",
      "Cas de pratiques assez variés sur plusieurs thèmes",
    ],
    frustrations: [
      "L’apprentissage individuel, être seul devant un outil",
      "Accessibilité de la formation réduite à quelques personnes",
      "Méthode d’apprentissage peu innovante et ennuyante",
    ],
    goals: [
      "Être préparé aux différentes questions des clients sur les applis",
      "En apprendre plus sur les cas spécifiques (résa en fauteuil roulant)",
      "Être capable d’aider ses collègues rencontrant des difficultés",
    ]
  },
  {
    name: "Hélène ",
    description: "“J’aimerais réserver un week-end tout compris au futuroscope pour l’anniversaire de mon fils de 10 ans”",
    job: "Courtier en assurance",
    age: "46 ans",
    place: "Habite à Biarritz",
    computer: 50,
    mobile: 50,
    color: "#302462",
    expectations: [
      "Une proposition de formule  adaptée pour un anniversaire",
      "Pouvoir personnaliser son   séjour sur le site web ",
      "Pouvoir accéder aux avis d’autres personnes concernant l’hôtel",
    ],
    frustrations: [
      "Une rubrique d’infos pratiques  cachée, pas assez mise en avant",
      "Un tunnel de réservation long et fastidieux ",
      "Peu de précisions sur les spectacles annoncés sur le site web",
    ],
    goals: [
      "Réussir l’anniversaire de son fils,  le rendre heureux",
      "Pouvoir réserver seule sans l’aide de personnes ",
      "Profiter de son séjour organisé sans contraintes ni mauvaises surprises",
    ]
  },
  {
    name: "Thomas ",
    description: "“Je souhaite réserver un séjour en amoureux avec ma copine”",
    job: "Agent immobilier",
    age: "32 ans",
    place: "Habite à Paris",
    computer: 60,
    mobile: 40,
    color: "#FF7D37",
    expectations: [
      "Un pannel d’offres intéressantes pour un séjour en couple",
      "Avoir de la visibilité sur les tarifs selon les jours de visites ",
      "Accéder au programme des  spectacles proposés",
    ],
    frustrations: [
      "Peu d’informartions sur les moyens d’accès du parc",
      "Carte du parc non-interactive depuis le site web",
      "Peu de photos et d’informations sur les hébergements près du parc",
    ],
    goals: [
      "Prévoir un week-end parfait avec sa copine",
      "Découvrir les extras que propose  le Futuroscope )",
      "Pouvoir réserver deux billets + hôtel en même temps",
    ]
  }
]


const gridContainer = {
  backgroundColor: "#FFF",
  height: "35vh",
  width: "842px",

  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "2rem 1frx",
  gap: "1px 1px",
  gridTemplateAreas: `"picture-pers info-pers info-pers point-pers" 
                      "picture-pers info-pers info-pers point-pers"`,
}

const titlePers = {
  height: "3rem",
  padding: "1rem",
  gridArea: "title-pers",

  borderBottom: "0.5px solid #959595",
}

const infoPers = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "1px 1px",
  gridTemplateAreas: '"descri-pers techno-pers" "attente-pers frustration-pers"',
  gridArea: "info-pers",
}

const descriPers = {
  padding: "1rem",
  gridArea: "descri-pers",
  backgroundColor: "#FCF9F4",
  borderBottom: "0.5px solid #959595",
  borderRight: "0.5px solid #959595",
}

const technoPers = {
  padding: "1rem",
  gridArea: "techno-pers",
  backgroundColor: "#FCF9F4",
  borderBottom: "0.5px solid #959595",
}

const attentePers = {
  padding: "1rem",
  gridArea: "attente-pers",
  borderRight: "0.5px solid #959595",


  borderBottom: "0.5px solid #959595",


}

const frustrationPers = {
  padding: "1rem",
  gridArea: "frustration-pers",

  borderBottom: "0.5px solid #959595",


}

const picturePers = {
  padding: "1rem",
  gridArea: "picture-pers",
  borderRight: "0.5px solid #959595",
  borderBottom: "0.5px solid #959595",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"

}

const pointPers = {
  padding: "1rem",
  gridArea: "point-pers",

  borderLeft: "0.5px solid #959595",
  borderBottom: "0.5px solid #959595",

}

function Picture({ src, alt, color }) {
  const square = {
    height: "100px",
    width: "90px",
    border: `1px solid ${color}`,
    position: "absolute",
    top: "-10px",
    left: "-10px",
    zIdex: 2,

  }

  return (
    <div style={{ height: "110px", width: "90px", position: "relative" }}>
      <div style={square} />
      <img src={src} alt={alt} style={{ height: "100%", width: "100%", objectFit: "cover", zIndex: 5, position: "relative" }} />
    </div>
  )
}

function Techno({ computer, mobile, color }) {


  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "1px 1px",
    gridTemplateAreas: `"slider-tech slider-tech slider-tech slider-tech" 
                      "comuter-tech blank-tech blank-tech mobile-tech"`,

  }

  const sliderTech = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gridArea: "slider-tech",
  }

  const comuterTech = {
    display: 'flex',
    justifyContent: "center",
    flexDirection: 'column',
    gridArea: "comuter-tech",
  }

  const blankTech = {

    gridArea: "blank-tech",
  }

  const mobileTech = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    justifyItems: "center",
    gridArea: "mobile-tech",
  }

  return (
    <>
      <Typography type="subtitle">Technologie</Typography>
      <div style={gridContainer} className="grid-container">
        <div style={sliderTech} className="slider-tech">
          <div style={{ backgroundColor: "#C4C4C4", width: "80%", height: "4px" }}>
            <div style={{ width: `${computer}%`, height: "100%", backgroundColor: color }}></div>
          </div>
        </div>
        <div style={comuterTech} className="comuter-tech">
          <Typography type="title">Ordinateur</Typography>
          <Typography type="title">{computer}%</Typography>
        </div>
        <div style={blankTech} className="blank-tech"></div>
        <div style={mobileTech} className="mobile-tech">
          <Typography type="title">Mobile</Typography>
          <Typography type="title">{mobile}%</Typography>
        </div>
      </div>
    </>
  )
}

function Perso({ name, description, job, age, place, expectations, goals, frustrations, computer, mobile, color }) {
  return (
    <div style={gridContainer} className="grid-container">
      <div style={infoPers} className="info-pers">
        <div style={descriPers} className="descri-pers">
          <Typography type="subtitle">Description</Typography>
          <Typography type="title">{job}</Typography>
          <Typography type="title">{age}</Typography>
          <Typography type="title">{place}</Typography>
        </div>
        <div style={technoPers} className="techno-pers">
          <Techno computer={computer} mobile={mobile} color={color} />
        </div>
        <div style={attentePers} className="attente-pers">
          <Typography type="subtitle">Attentes</Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {expectations.map(e => <Typography type="title">{e}</Typography>)}
          </div>
        </div>
        <div style={frustrationPers} className="frustration-pers">
          <Typography type="subtitle">Frustrations</Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {frustrations.map(e => <Typography type="title">{e}</Typography>)}
          </div>
        </div>
      </div>
      <div style={picturePers} className="picture-pers">
        <Picture src={img} alt="osef" color={color} />
        <Typography type="subtitle">{name}</Typography>
        <Typography type="title">{description}</Typography>
      </div>
      <div style={pointPers} className="point-pers">
        <Typography type="subtitle">Objectifs</Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {goals.map(e => <Typography type="title">{e}</Typography>)}
        </div>
      </div>
    </div>
  )
}

function Persona() {
  return (
    <>
      <div style={titlePers} className="title-pers">
        <Typography type="titleH1">PERSONAS</Typography>
      </div>
      {personasData && personasData.map(({ color, name, description, job, age, place, expectations, goals, frustrations, computer, mobile }) => <Perso name={name} description={description} job={job} age={age} place={place} expectations={expectations} frustrations={frustrations} goals={goals} computer={computer} mobile={mobile} color={color} />)}
    </>
  )
}

export default Persona;