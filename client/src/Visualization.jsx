import React, { useEffect, useState } from "react";
import axios from "axios";

const Visualization = () => {
  const [data, setData] = useState([]);

  //useEffect(() => {})
    //const endpoint = `https://covidtracking.com/api/v1/states/${props.state}/daily.json`;
  //   const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=061b8a772e554622b72becb9277d12cc`;
  //   console.log(endpoint);
  //   axios
  //     .get(endpoint)
  //     .then((res) => {
  //       const article = { name: "Article", data: {} };
  //       setData(() => res.data.articles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Invalid inputs");
  //     });
  // });
  // const newsListings = data.map((article) => {
  //   return (<newsDisplay
  //   title={article.title}
  //   content={article.content}
  //   />)
  //}
  //);
  return (
    <div>
      <h1>Today's News</h1>
      <h2>Coronavirus: New York to allow tests in pharmacies</h2>
      <h4>BBC News</h4>
      <p>
      The US state of New York, the epicentre of the country's Covid-19 outbreak, will allow pharmacies to carry out tests for the virus, the governor says.

Andrew Cuomo said some 5,000 pharmacies would be able to carry out testing, with the aim to provide 40,000 per day.

The US has more than 938,000 confirmed cases. Almost a third of the 53,751 deaths happened in New York City alone.

Meanwhile, President Donald Trump did not hold his daily briefing, saying it was not worth his "time or effort".

Speaking on Twitter on Saturday, he blamed the media for asking "nothing but hostile questions". He was heavily criticised after suggesting at Thursday's White House news conference that disinfectant could potentially be used as a treatment for the virus.

His remarks have been condemned as dangerous by doctors and manufacturers, as disinfectants are hazardous substances and can be poisonous if ingested.

In New York City, calls to the hotline for exposure to certain household chemicals more than doubled in the 18 hours after Mr Trump's remarks - 30 cases compared to 13 for the same time frame last year.
      </p>

      <h2>U.K. Prime Minister Boris Johnson To Return To Work Monday</h2>
      <h4>NPR</h4>
      <p>
      British Prime Minister Boris Johnson is returning to work Monday after recovering from COVID-19, according to multiple reports citing Downing Street.

Johnson had been staying at Chequers, the prime minister's country residence, following his release from London's St. Thomas' Hospital, where he was admitted early in April. He spent three nights in the facility's intensive care unit.

He was released from St. Thomas' nearly two weeks ago. Upon being discharged, Johnson recorded a video thanking the hospital's staff for saving his life.

"I have today left hospital after a week in which the NHS has saved my life, no question," he said.

Johnson — who tested positive in late March — was viewed as the first major world leader to have the virus. Prior to his hospitalization, he had been criticized for moving too slowly in his response to the developing pandemic.

He returns as COVID-19-related deaths in the U.K. surpassed 20,000, according to data collected by Johns Hopkins University.
      </p>
    </div>
  );
};
export default Visualization;
