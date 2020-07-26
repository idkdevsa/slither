import React, { useState } from "react";
import styled from "styled-components";
import history from "../../history";
import { atom, useSetRecoilState } from "recoil";
export const currentInputState = atom({
  key: "currentInputState",
  default: [],
});
const UrlInput = () => {
  const [currentInput, setCurrentInput] = useState("");

  const setCurrentInputState = useSetRecoilState(currentInputState);

  const handleInput = (e) => {
    setCurrentInput(e);
  };

  const handleStartCrawling = () => {
    setCurrentInputState(currentInput);
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
