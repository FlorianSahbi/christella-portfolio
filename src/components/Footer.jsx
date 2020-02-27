import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftnav">
        <div className="footer-name">
          Christella Levieux <span className="dot-footer">.</span>
        </div>
        <div className="name"> christella.levieux @icloud.com </div>
      </div>
      <div className="rightnav">
        <a
          href="https://twitter.com/christella_kl/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Twitter
        </a>
        <a
          style={{ marginLeft: "2.5rem", color: "#40404C" }}
          href="https://www.linkedin.com/in/christella-levieux/"
          target="_blank"
          rel="noopener noreferrer"
          className="name"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
