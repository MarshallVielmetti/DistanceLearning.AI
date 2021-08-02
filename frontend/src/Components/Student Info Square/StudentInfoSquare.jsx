//TO BE CLEAR, this is to be used on the teacher end to display information about each student

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  width: 20vh;
  margin: 5px;
  border: 2px solid lightgrey;
  border-radius: 1px;
  background-color: ${(props) => props.theme.offWhite};
  display: flex;
  flex-direction: row;
`;

const StudentInfoSquare = (props) => {
  return <Container>I am a student</Container>;
};

export default StudentInfoSquare;
