import React from "react";

const style = {
  titleH1: {
    fontFamily: "Columbia-Serial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",
  },
  title: {
    fontFamily: "Circe",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "15px",
  },
  subtitle: {
    fontFamily: "Circe",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
  }
}

function Typography({ type, children }) {
  return (
    <p style={style[type]}>{children}</p>
  )
}

export default Typography;