import React from "react";
import axios from "axios";
import cheerio from "cheerio";
import { useHistory } from "react-router-dom";

const Crawl = ({ url }) => {
  const history = useHistory();
  console.log(history);

  const getData = async () => {
    const response = await axios.get(url);
    const data = response.json();
    console.log(data);
  };

  return <>What{getData()}</>;
};

export default Crawl;
