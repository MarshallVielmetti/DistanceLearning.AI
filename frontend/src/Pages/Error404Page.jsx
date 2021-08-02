import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Spacer } from "Components/Shared";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error404 = styled.h1`
  font-size: 5rem;
`;

const Back = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: black;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 10px;
`;

const Error404Page = () => {
  return (
    <Container>
      <Error404>Error 404</Error404>
      <Error404>Page not Found</Error404>
      <Back to="/">
        {"<-"}Back to Safety{"<-"}
      </Back>
    </Container>
  );
};

export default Error404Page;
