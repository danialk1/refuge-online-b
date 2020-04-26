import React, { useEffect, useState } from "react";
import axios from "axios";

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


  const newsListings = data.map((article) => {
    return (<newsDisplay
    title={article.title}
    content={article.content}
    />)
  });

  return (
    <div>
      <h1>Insert news here lmao</h1>
      {data.map((article) => {
        return <div>
        <h2>{article.title}</h2>
        <h4>{article.author}</h4>
        <p>{article.content}</p>
        <a href={article.url}>read more</a>
        </div>
      }) }
      {newsListings}
    </div>
  );
};
export default Visualization;
