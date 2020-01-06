import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";

import Hero from "components/Hero";

import "./HeroesList.css";

const rootClass = "heroes-list";

function HeroesList({ heroesList }) {
  const match = useRouteMatch();

  return (
    <div className={`${rootClass}__wrap`}>
      <ul className={rootClass}>
        {heroesList.length &&
          heroesList.map(hero => (
            <li key={hero.id}>
              <Link
                to={`${match.url}/${hero.id}`}
                className={`${rootClass}__name`}
              >
                {hero.name}
              </Link>
            </li>
          ))}
      </ul>

      <Route path="/people/:heroId">
        <Hero heroesList={heroesList} />
      </Route>
    </div>
  );
}

export default HeroesList;
