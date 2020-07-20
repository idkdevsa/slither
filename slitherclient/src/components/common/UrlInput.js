import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const UrlInput = () => {
  const [currentInput, setCurrentInput] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    setCurrentInput(e);
  };

  const handleStartCrawling = () => {
    return history.push(`/crawl/${currentInput}`);
  };

  return (
    <>
      <Input
        name="startUrl"
        label="startUrl"
        placeholder="start url"
        onInput={(e) => handleInput(e.target.value)}
      />
      <Button onClick={() => handleStartCrawling()}>Start Crawling</Button>
    </>
  );
};

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  color: gray;
`;

export default UrlInput;
