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

const InfoSquareContainer = () => {
  return (
    <Container>
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
      <StudentInfoSquare />
    </Container>
  );
};

export default InfoSquareContainer;
