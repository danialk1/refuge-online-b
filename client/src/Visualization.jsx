import React, { useEffect, useState, componentDidMount, setState } from "react";
import axios from "axios";

class Visualization extends React.Component {
  constructor(props) {
    //const endpoint = `https://covidtracking.com/api/v1/states/${props.state}/daily.json`;
    super(props);
    this.state = {}
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e89acd59088e4acdb287f6a0312e17bf `;
    axios
      .get(endpoint)
      .then((res) => {
        const processedData = res.data.articles.map((article) => {
          return (<newsDisplay
          title={article.title}
          content={article.content}
          />)
        });
        this.state = {data: processedData};
    })
      .catch((err) => {
        console.log(err);
      });
      setTimeout(alert(JSON.stringify(this.state, 4, null)), 5000);
  };


render() {
  return (
    <div>
      <h1>Insert news here lmao</h1>
      {this.state.data}
    </div>
  );}
};
export default Visualization;
