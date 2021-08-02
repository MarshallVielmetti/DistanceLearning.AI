import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const videoConstraints = {
  width: 800,
  height: 600,
  facingMode: "user",
};

const WebcamContainer = styled.div`
  border: 5px solid black;
  height: 600px;
`;

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //updates imgSrc
      capture();

      //Fetch api model stuff
    }, 5000);
    return () => clearInterval(interval);
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <WebcamContainer>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </WebcamContainer>
  );
};

export default WebcamComponent;
