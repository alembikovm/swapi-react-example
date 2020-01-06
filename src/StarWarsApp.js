import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import HeroesList from "components/HeroesList";

import "./StarWarsApp.css";

const substring = "/people/";
const rootClass = "star-wars-app";
const rootClassModifier = {
  dark: "dark-side",
  light: "light-side"
};

function StarWarsApp() {
  const [heroesList, setHeroesList] = useState({ swHeroes: [] });

  const generateId = string =>
    string.slice(
      string.search(substring) + substring.length,
      string.length - 1
    );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://swapi.co/api/people/");
      const heroesWithId = data.results.map(hero => {
        return {
          ...hero,
          id: generateId(hero.url)
        };
      });

      setHeroesList(heroesWithId);
    };

    fetchData();
  }, []);

  return (
    <div className={rootClass}>
      <Router>
        <h1 className={`${rootClass}__header`}>Star Wars Wiki</h1>
        <Link to="/people" className={`${rootClass}__heroes-link`}>
          <span className={rootClassModifier.light}>Hero's</span>
          &nbsp;
          <span className={rootClassModifier.dark}>List:</span>
        </Link>

        <Switch>
          <Route path="/people">
            <HeroesList heroesList={heroesList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default StarWarsApp;
