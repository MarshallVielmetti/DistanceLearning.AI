import React from "react";
import styled from "styled-components";
import { Spacer } from "Components/Shared";
import InfoSquareContainer from "Components/Student Info Square/InfoSquareContainer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const CodeToJoin = styled.h1`
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 5rem;
  color: black;
  margin: none;
  padding: none;
  height: auto;
`;

const StartButton = styled.button`
  background-color: ${(props) => props.theme.highlight};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.offWhite};
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 3rem;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.darkHighlight};
    color: ${(props) => props.theme.darkOffWhite};
  }
`;

const QuitButton = styled.button`
  position: absolute;
  background-color: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.offWhite};
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 3rem;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: ${(props) => props.theme.darkOffWhite};
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StartContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const TeacherStart = () => {
  const StartClass = () => {
    console.log("Starting Class");
  };

  const QuitClass = () => {
    console.log("Quitting Class");
  };

  return (
    <Container>
      <StartContainer>
        <QuitButton onClick={(e) => QuitClass()}>Quit</QuitButton>
      </StartContainer>

      <CodeToJoin>{"Code to Join"}</CodeToJoin>
      <InfoSquareContainer />
      <Spacer />
      <RowContainer>
        <StartButton onClick={(e) => StartClass()}>Start Class</StartButton>
      </RowContainer>
    </Container>
  );
};

export default TeacherStart;
