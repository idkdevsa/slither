import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import cheerio from "cheerio";
import parse from "html-react-parser";
import { useRecoilState, atom, useSetRecoilState } from "recoil";
import { currentInputState } from "../common/UrlInput";

// define state of current head and body parsed from a url (currentInput)
export const crawlResponseState = atom({
  key: "crawlResponseState",
  default: [],
});

const UrlLoader = (props) => {
  // crawlResponse = Object containing the head and body parsed from currentInput
  const [crawlResponse, setCrawlResponse] = useState("");

  // get currentInput
  const [currentInput] = useRecoilState(currentInputState);

  const setCrawlResponseState = useSetRecoilState(crawlResponseState);

  const setupState = useCallback(
    (head, body) => () => {
      setCrawlResponse({ head, body });
      setCrawlResponseState(crawlResponse);
    },
    [crawlResponse, setCrawlResponseState]
  );

  // fetch currentInput, load with cheerio, parse with html-react-parser, setCrawlResponse
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/${currentInput}`
      );

      const $ = cheerio.load(response.data);

      const head = parse($("head").html());
      const body = parse($("body").html());
      setupState(head, body);
    };
    getData();
  }, [currentInput, setupState]);

  return null;
};

export default UrlLoader;
