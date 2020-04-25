import React, { useEffect, useState } from "react";
import { AreaChart } from "react-chartkick";
import "chart.js";
import axios from "axios";
import states from "./us_states.json";

export default function Visualization(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    //const endpoint = `https://covidtracking.com/api/v1/states/${props.state}/daily.json`;
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=061b8a772e554622b72becb9277d12cc`;
    axios
      .get(endpoint.articles)
      .then((res) => {
        const headline = { name: "Headline", data: {} };
        const article = { name: "Article", data: {} };
        res.data.forEach((e) => {
          headline.data[e.url] = e.title;
          article.data[e.url] = e.content;
        });
        setData([headline, article]);
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid inputs");
      });
  });

  const fullName = (abbr) => {
    return states.filter((e) => e.abbreviation === abbr)[0].name;
  };

  return (
    <div>
      <AreaChart
        data={data}
        xtitle="Date"
        ytitle="Population"
        min={0}
        title={`Past ${props.days} days for ${fullName(props.state)}`}
      />
    </div>
  );
}
