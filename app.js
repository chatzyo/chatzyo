const startBtn = document.getElementById("startBtn");
const localVideo = document.getElementById("localVideo");

startBtn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    localVideo.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera:", error);
    alert("Unable to access camera or microphone.");
  }
});
