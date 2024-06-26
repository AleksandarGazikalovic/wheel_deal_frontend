import "./partners.css";
import React from "react";
import FON from "../../assets/Partners/FON.webp";
import IRC from "../../assets/Partners/IRC_FON.webp";
import R2L from "../../assets/Partners/Route2Launch.webp";

const Partners = () => {
  return (
    <div className="wd__partners section__padding" id="partners">
      <h2>Partners</h2>
      <div className="wd__partners-content">
        <div className="wd__partners-content__item">
          <a href="https://fon.bg.ac.rs/" target="_blank" rel="noreferrer">
            <img src={FON} alt="FON" />
          </a>
        </div>
        <div className="wd__partners-content__item">
          <a href="https://irc.fon.bg.ac.rs/" target="_blank" rel="noreferrer">
            <img src={IRC} alt="IRC" />
          </a>
        </div>
        <div className="wd__partners-content__item">
          <a
            href="https://irc.fon.bg.ac.rs/route2launch/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={R2L} alt="R2L" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
