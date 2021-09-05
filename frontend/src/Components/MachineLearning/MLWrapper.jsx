import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import styled from "styled-components";

import ObjectDetectionSketch from "Components/MachineLearning/ObjectDetectionSketch";
import { data } from "@tensorflow/tfjs";

import CameraComponent from "Components/MachineLearning/Camera";

const Container = styled.div`
  height: 720px;
  width: 1080px;
`;

const sendData = (e, d, isFocus) => {
  if (d !== undefined) {
    d.isFocus = isFocus;
    fetch("http://localhost:5000/API/send_ML_data", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      contentType: "application/JSON",
      body: JSON.stringify(d),
    });
  }
};

const MLWrapper = () => {
  const [data, setData] = useState(undefined);
  return (
    <Container>
      <button onClick={(e) => sendData(e, data, true)}>SEND FOCUS</button>
      <button onClick={(e) => sendData(e, data, false)}>SEND NO FOCUS</button>
      {/* <P5Wrapper sketch={(p) => ObjectDetectionSketch(p, setData)} /> */}
      <CameraComponent />
    </Container>
  );
};

export default MLWrapper;
