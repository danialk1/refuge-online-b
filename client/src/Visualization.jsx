<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Divider,
  Button,
} from "@material-ui/core";

const Visualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //const endpoint = `https://covidtracking.com/api/v1/states/${props.state}/daily.json`;
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=061b8a772e554622b72becb9277d12cc`;
    console.log(endpoint);
    axios
      .get(endpoint)
      .then((res) => {
        const article = { name: "Article", data: {} };
        setData(() => res.data.articles);
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid inputs");
      });
  }, []);

  return (
    <div style={{backgroundColor: "lightcyan"}}>
      <h2></h2>
      <h1 style={{color: "blue", backgroundColor: "lightblue"}}>Today's News</h1>
      {data.map((article) => {
        return <div>
        <h2 style={{color: "red"}}>{article.title}</h2>
        <h4 style={{color: "grey"}}>{article.author}</h4>
        <p>{article.content}</p>
        <Button style={{backgroundColor: "lightblue"}} href={article.url}>read more</Button>
        <p> </p>
        <Divider></Divider>
        </div>
      }) }
    </div>
  );
};
export default Visualization;
=======
import React, { useEffect, useState } from 'react'
import { AreaChart } from 'react-chartkick'
import 'chart.js'
import axios from 'axios'
import states from './us_states.json'


export default function Visualization(props) {
	const [data, setData] = useState({})

	useEffect(() => {
		const endpoint = `https://covidtracking.com/api/v1/states/${props.state}/daily.json`
		axios.get(endpoint)
			.then(res => {
				const totalCases = {name: "Total cases", data: {}}
				const newCases = {name: "New cases", data: {}}
				res.data.slice(0, props.days).forEach(e => {
					totalCases.data[e.date] = e.positive
					newCases.data[e.date] = e.positiveIncrease
				});
				setData([totalCases, newCases])
			})
			.catch(err => {
				console.log(err)
			});
	});

	const fullName = abbr => {
		return states.filter(e => e.abbreviation === abbr)[0].name;
	}

	return (
		<div>
			<AreaChart data={data} xtitle="Date" ytitle="Population" min={0} title={`Past ${props.days} days for ${fullName(props.state)}`}/>
		</div>
	);
}
>>>>>>> master
