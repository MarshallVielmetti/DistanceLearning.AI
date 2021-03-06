import * as faceapi from "face-api.js";
import * as tf from "@tensorflow/tfjs";
import * as p5 from "p5";

export default function sketch(p, dataHandler) {
  let capture = null;
  let faceDrawings = [];

  function showFaceDetectionData(data) {
    faceDrawings = data;
  }

  p.setup = async function () {
    await faceapi.loadTinyFaceDetectorModel("/Models");
    await faceapi.loadFaceLandmarkTinyModel("/Models");

    p.createCanvas(1280, 720);

    const constraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720,
        },
        optional: [{ maxFrameRate: 40 }],
      },
      audio: false,
    };

    capture = p.createCapture(constraints, () => {});

    capture.id("video_element");
    capture.size(1280, 720);
    capture.hide();
  };

  let ins = 0;
  let capData = 0;

  p.draw = function () {
    if (!capture) {
      return;
    }

    if (ins == 10) {
      dataHandler(faceDrawings[0]);
      ins = 0;
    } else {
      ins++;
    }

    p.background(255);
    p.image(capture, 0, 0);
    p.fill(0, 0, 0, 0);

    faceDrawings.map((drawing) => {
      if (drawing) {
        p.textSize(15);
        p.strokeWeight(1);

        // const textX = drawing.detection.box._x + drawing.detection.box._width;
        // const textY = drawing.detection.box._y + drawing.detection.box._height;

        // const confidencetext = "Gender: "+ drawing.gender;
        // const textWidth = p.textWidth(confidencetext);
        // p.text(confidencetext, textX-textWidth-10, textY-60);

        // const agetext = "Age: "+ drawing.age.toFixed(0);
        // const ageTextWidth = p.textWidth(agetext);
        // p.text(agetext, textX-ageTextWidth-10, textY-30);

        // const copiedExpression = drawing.expressions;
        // const expressions = Object.keys(copiedExpression).map((key) => {
        //   const value = copiedExpression[key];
        //   return value;
        // });

        // const max = Math.max(...expressions);

        // const expression_value = Object.keys(copiedExpression).filter((key) => {
        //   return copiedExpression[key] === max;
        // })[0];

        // const expressiontext = "Mood: " + expression_value;
        // const expressionWidth = p.textWidth(expressiontext);
        // p.text(expressiontext, textX - expressionWidth - 10, textY - 10);

        //######### GOOD STUFF #######

        p.strokeWeight(4);
        p.stroke("rgb(100%,100%,100%)");
        p.rect(
          drawing.detection.box._x,
          drawing.detection.box._y,
          drawing.detection.box._width,
          drawing.detection.box._height
        );

        //Face Landmarks
        for (let i = 0; i < 68; i++) {
          p.point(
            drawing.landmarks.positions[i]._x,
            drawing.landmarks.positions[i]._y
          );
        }
      }
    });

    faceapi
      .detectAllFaces("video_element", new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true)
      .then((data) => {
        showFaceDetectionData(data);
      });
  };
}
