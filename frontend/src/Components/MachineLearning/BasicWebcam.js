import * as p5 from "p5";

export default function sketch(p) {
  let capture = null;
  p.setup = async function () {
    p.createCanvas(700, 700);

    const constraints = {
      video: {
        mandatory: {
          maxWidth: 700,
          maxHeight: 700,
        },
        optional: [{ maxFrameRate: 40 }],
      },
      audio: false,
    };

    capture = p.createCapture(constraints, () => {});

    capture.id("video_element");
    capture.size(700, 700);
    capture.hide();
  };

  p.draw = async () => {
    if (!capture) {
      return;
    }

    p.background(255);
    p.image(capture, 0, 0);
    p.fill(0, 0, 0, 0);
  };
}
