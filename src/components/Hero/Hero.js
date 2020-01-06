import React from "react";
import { useParams } from "react-router-dom";

import './Hero.css';

const rootClass = 'hero';

function Hero({ heroesList }) {
  const { heroId } = useParams();

  const sWHero =
    heroesList.length && heroesList.find(swHero => swHero.id === heroId);

  if (sWHero) {
    return (
      <div className={rootClass}>
        <p className={`${rootClass}__info`}>Hero Name: {sWHero.name}</p>
        <p className={`${rootClass}__info`}>Gender: {sWHero.gender}</p>
        <p className={`${rootClass}__info`}>Height: {sWHero.height}</p>
        <p className={`${rootClass}__info`}>Mass: {sWHero.mass}</p>
      </div>
    );
  }

  return null;
}

export default Hero;
