'use strict';

// Specify which media to get
const constraints = {
  video: true
};

const video = document.querySelector('video');

// Set the video stream from webcam as source for video element
function handleSuccess(stream){
  video.srcObject = stream;
}

function handleError(error){
  console.error('getUserMedia error: ', error);
}

// Get media from browser
navigator.mediaDevices.getUserMedia(constraints)
// Handle failure or error.
  .then(handleSuccess).catch(handleError);