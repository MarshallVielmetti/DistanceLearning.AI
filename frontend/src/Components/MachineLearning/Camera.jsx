import * as faceapi from "face-api.js";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

import doPrediction from "./doModelThings";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { loadSsdMobilenetv1Model } from "face-api.js";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraComponent = () => {
  const webcamRef = useRef(null);

  const [imageSrc, setImgSrc] = useState(null);
  const [increment, setIncrement] = useState(0);
  const [focus, setFocus] = useState(null);
  const [myModel, setMyModel] = useState();

  async function loadModel() {
    try {
      const addModel = await tf.loadLayersModel("/Models/attn_model.json");
      setMyModel(addModel);
      console.log("loaded model?");
    } catch (err) {
      console.log(err);
      console.log("failed model?");
    }
  }

  useEffect(() => {
    // model = await tf.loadLayersModel("/Models/attn_model.json");

    faceapi.loadTinyFaceDetectorModel("/Models");
    faceapi.loadFaceLandmarkTinyModel("/Models");
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const updateData = async () => {
    // let byteImg = Buffer.from(imageSrc, "base64");
    // const blob = new Blob([byteImg], {type: contentType});
    // let loadedImg = await faceapi.bufferToImage(byteImg);
    let res = await fetch(imageSrc);
    let imgBlob = await res.blob();
    let loadedImg = await faceapi.bufferToImage(imgBlob);

    let data = await faceapi
      .detectAllFaces(loadedImg, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true);

    if (
      data === undefined ||
      data === null ||
      data.length === 0 ||
      myModel === undefined
    ) {
    } else {
      let landmarks;
      try {
        landmarks = data[0]["landmarks"]["_positions"];
      } catch (err) {
        console.log(err);
        console.log("Model did not make a prediction");
      }
      let flat_landmarks = [];

      for (const pair of landmarks) {
        flat_landmarks.push(pair["_x"]);
        flat_landmarks.push(pair["_y"]);
      }

      let test = [4, 5, 6, 77, 8, 52];
      // console.log(test);
      // console.log(flat_landmarks);

      let data_tensor = tf.tensor2d(flat_landmarks, [1, 136]);

      try {
        let attn_pred = await doPrediction(myModel, data_tensor);
        console.log(attn_pred);
        attn_pred = Math.random() < 0.5;
        sendData(attn_pred);
        setFocus(attn_pred);
      } catch (err) {
        console.log(err);
      }
      // console.log(flat_landmarks);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      capture();

      updateData();
    }, 1000);
    return () => clearInterval(interval);
  });

  const sendData = (data) => {
    fetch("http://localhost:5000/API/push_attention", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      contentType: "application/JSON",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  };

  const RenderisFocus = () => {
    if (focus) {
      return <h1>I am focused</h1>;
    } else {
      return <h1>I am not focused.</h1>;
    }
  };

  return (
    <div>
      <RenderisFocus />
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default CameraComponent;
