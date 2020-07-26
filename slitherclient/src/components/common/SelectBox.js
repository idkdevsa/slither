import React from "react";
import styled from "styled-components";

const SelectBox = (props) => {
  const Select = styled.select`
    width: 50%;
  `;

  return <Select>{props.children}</Select>;
};

export default SelectBox;
