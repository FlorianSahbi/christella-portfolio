import React from "react";

const wrapper = {
  width: "250px",
  height: "130px",
  border: "0.5px solid #959595",
  margin: "2rem",

  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "0.5fr 1fr",
  gap: "1px 1px",
  gridTemplateAreas: "'pagination titleSom titleSom titleSom' 'content content content content'",
}



const pagination = {
  gridArea: "pagination",
  borderRight: "0.5px solid #959595",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const title = {
  gridArea: "titleSom",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const content = {
  gridArea: "content",
  borderTop: "0.5px solid #959595",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

function Elem() {
  return (
    <div style={wrapper} className="grid-container">
      <div style={pagination} className="pagination">
        2-5
      </div>
      <div style={title} className="titleSom">
        UX Design
      </div>
      <div style={content} className="content">
        Madu
      </div>
    </div>
  )
}

function About() {
  return (
    <Elem />
  )
}

export default About;