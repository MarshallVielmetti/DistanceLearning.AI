import React from "react";
import P5Wrapper from "react-p5-wrapper";
import styled from "styled-components";

import ObjectDetectionSketch from "Components/MachineLearning/ObjectDetectionSketch";

const Container = styled.div`
  height: 720px;
  width: 1080px;
`;

const MLWrapper = () => {
  return (
    <Container>
      <P5Wrapper sketch={(p) => ObjectDetectionSketch(p)} />
    </Container>
  );
};

export default MLWrapper;
