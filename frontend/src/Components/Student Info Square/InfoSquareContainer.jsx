import { range } from "face-api.js/build/commonjs/utils";
import React from "react";
import styled from "styled-components";
import StudentInfoSquare from "./StudentInfoSquare";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.offWhite};
  border: 3px solid black;
  width: 90%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

const InfoSquareContainer = (data) => {
  const infoSquares = () => {};
  return <Container>{infoSquares}</Container>;
};

export default InfoSquareContainer;
