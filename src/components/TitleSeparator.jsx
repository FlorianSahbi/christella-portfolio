import React from "react";
import "./TitleSeparator.css";

const TitleSeparator = ({ title }) => {
  return (
    <div className="separator">
      <div className="typo">
        <div class="underscor" />
        {title}
      </div>
    </div>
  );
};

export default TitleSeparator;
