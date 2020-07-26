import React, { useEffect, useState } from "react";
import Iframe from "../common/Iframe";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentInputState } from "../common/UrlInput";
import { fetchUrl } from "../common/UrlLoader";

const Crawl = (props) => {
  // const [crawlResponse, setCrawlResponse] = useState("");
  const [allNodes, setAllNodes] = useState("");
  const [currentId, setCurrentId] = useState("");

  const [currentInput, setCurrentInput] = useRecoilState(currentInputState);

  const crawlResponse = useRecoilValue(fetchUrl);

  useEffect(() => {
    setTimeout(() => {
      setAllNodes(getAllNodes());
    }, 6000);
  }, [currentInput]);

  // get document.byId(iFrameId)

  const getAllNodes = () => {
    const allTags = !document.getElementById("the-frame")
      ? ""
      : Array.from(
          document
            .getElementById("the-frame")
            .contentWindow.document.body.querySelectorAll("*")
        );

    const tagsWithInnerHtml = allTags.filter((tag) => tag.id);
    return tagsWithInnerHtml;
  };

  const handleClick = (e) => {
    setCurrentId(e);
  };

  return (
    <IFrameBox>
      <select
        style={{ width: "50%" }}
        onChange={(e) => handleClick(e.target.value)}
      >
        {allNodes &&
          allNodes.map((node, index) => {
            return (
              <option key={index} value={node.id}>
                {node.id}
              </option>
            );
          })}
      </select>
      <Iframe id="the-frame" head={crawlResponse.head}>
        <>{crawlResponse.body}</>
      </Iframe>
    </IFrameBox>
  );
};

const IFrameBox = styled.div`
  width: 100%;
  height: 50vh;
`;

export default Crawl;
