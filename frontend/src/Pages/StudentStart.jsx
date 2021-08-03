import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import styled from "styled-components";
import WebcamComponent from "Components/Webcam/WebcamComponent";
import { Spacer } from "Components/Shared";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaveClassButton = styled.button`
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

const StartContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 5rem;
  color: black;
  margin: none;
  padding: none;
  height: auto;
`;

const RowContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentStart = () => {
  return (
    <Container>
      <StartContainer>
        <LeaveClassButton>Quit</LeaveClassButton>
      </StartContainer>
      <Header>Awaiting Start...</Header>
      <RowContainer>
        <Spacer />
        <WebcamComponent />
        <Spacer />
        <TextContainer>
          <Header> {"Class ID"} </Header>
          <Header>Class Name</Header>
        </TextContainer>
        <Spacer />
      </RowContainer>
      <Spacer />
    </Container>
  );
};

export default StudentStart;
