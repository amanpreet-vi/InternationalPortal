import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const url = "https://restcountries.com/v2/all";
  const [cList, setCList] = React.useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCList(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const display = cList.map((value) => {
    const { name, flags } = value;
    return (
      <Link to={`/individual`} state={{ value }}>
        <div className="cards">
          <img src={flags.svg} alt="countryImg" />
          <h2>{name}</h2>
        </div>
      </Link>
    );
  });
  return (
    <div className="container">
      <h1>International Portal</h1>
      <div className="grid">{display}</div>
    </div>
  );
}
