var customForm = `<h2>${document.getElementById("await-header")}</h2>`;

var video = document.querySelector("#videoElement");
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }, handleVideo, error);
}
function handleVideo(stream) {
  video.srcObject = stream; //video.play();
}
function error(e) {
  console.log("Something went wrong");
}
