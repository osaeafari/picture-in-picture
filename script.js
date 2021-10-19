const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select media stream, pass the video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.onplay();
        }
    } catch (error) {
        // Catch Error Here
        console.log("ooops error here:", error)
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disable = false;
});


//on Load
selectMediaStream();