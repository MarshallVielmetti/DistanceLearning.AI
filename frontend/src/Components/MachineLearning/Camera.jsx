import * as faceapi from "face-api.js";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { model } from "@tensorflow/tfjs";
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
  const [data, setData] = useState(null);
  const [model, setModel] = useState();

  async function loadModel() {
    try {
      const model = await tf.loadLayersModel("/Models/attn_model.json");
      setModel(model);
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

    if (data === undefined || data === null || data.length === 0) {
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
      console.log(test);
      console.log(flat_landmarks);

      try {
        let attn_pred = await model.predict([4.3]);
        console.log(attn_pred);
        setData(data);
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

  const sendData = (e, isFocus, theData) => {
    if (theData !== null) {
      theData.push({ isFocus: isFocus });
      fetch("http://localhost:5000/API/send_ML_data", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        contentType: "application/JSON",
        body: JSON.stringify(theData),
      });
    }
    setData(null);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          sendData(e, true, data);
        }}
      >
        FOCUSED
      </button>
      <button
        onClick={(e) => {
          sendData(e, false, data);
        }}
      >
        NOT
      </button>

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
