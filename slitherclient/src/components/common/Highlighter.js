import React, { useEffect } from "react";
import cheerio from "cheerio";
import styled from "styled-components";
import ReactHtmlParser, { processNodes } from "html-react-parser";

const Highlighter = ({ id }) => {
  const HighlightBlock = styled.div`
    background-color: red;
  `;

  const bodyB = !document.getElementById("the-frame")
    ? ""
    : document
        .getElementById("the-frame")
        .contentDocument.getElementById("bodyContent");

  const RenderHtml = (val) => {
    function transform(node, index) {
      return (
        <HighlightBlock>
          {processNodes(node.children, transform)};
        </HighlightBlock>
      );
    }
    const options = {
      decodeEntities: true,
      transform,
    };
    const newHtml = `${val}`;
    console.log(newHtml);
    return ReactHtmlParser(newHtml, options);
  };

  return <>What{console.log(RenderHtml(bodyB))}</>;
};

export default Highlighter;
