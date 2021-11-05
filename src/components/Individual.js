import React from "react";
import { useLocation } from "react-router";

export default function Individual(props) {
  const json = useLocation();
  const {
    name,
    flags,
    area,
    currencies,
    languages,
    region,
    population,
    borders,
  } = json.state.value;
  console.log(currencies, languages, borders);
  var text = "";
  var border = "";
  borders.forEach((item) => {
    border += item + " ";
  });
  languages.forEach((item) => {
    text += item.name + " ";
  });
  return (
    <>
      <div className="container">
        <div className="indi">
          <img src={flags.svg} alt={name} />
          <div className="section">
            <h1>Country Name: {name}</h1>
            <h3>Area: {area}</h3>

            <h3>
              Currencies: {currencies[0].name} ({currencies[0].symbol})
            </h3>
            <h3>Region: {region}</h3>
            <h3>Language: {text}</h3>
            <h3>Population: {population}</h3>
            <h3>Borders: {border}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
