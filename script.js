
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '380',
        width: '680',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'key': 'AIzaSyBRRXSAz7VhdCygEySs5wDIr55Si8L9_Z0',
        },
    });
}

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            setTimeout(() => {
                loadVideo();
            }, 1000);
        }
    } else {
        console.log(' enter a valid YouTube Video ID.');
    }
}
