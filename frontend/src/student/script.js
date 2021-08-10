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

// back button in waitingRoom.html
document.getElementById("back").onclick = function () {
  location.href = "http://127.0.0.1:5500/frontend/public/student/home.html"; // home page
};

// selecting the code in home.html
function selectValue(e) {
  document.getElementById("joinCode").value = e.target.value;
}
