function loadVideo() {
    // Get the URL from the input field
    var url = document.getElementById("videoUrlInput").value;
    
    // Get the video player element
    var video = document.getElementById("videoPlayer");
    
    // Set the video source
    video.src = url;
    
    // Display the video player (it's hidden by default in HTML)
    video.style.display = "block";
    
    // Load and play the new video source
    video.load(); // Reloads the video element to pick up the new source
    video.play(); // Starts playback
}
