import React from "react";
import styled from "styled-components";
import UrlInput from "../common/UrlInput";

const Home = () => {
  const HomeWrapper = styled.main`
    flex: auto;
  `;

  return (
    <HomeWrapper>
      <UrlInput />
    </HomeWrapper>
  );
};

export default Home;
