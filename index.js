
var bg = document.getElementById("particles-js");

document.addEventListener("keydown",function(event){
    bg.style.backgroundColor = getRandomColor();
    var key = event.key;
    playMusic(key);
    console.log(event);
}
);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function playMusic(key) {
    switch (key) {
        case "a":
            var audio = new Audio('kick.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('Kick1.wav');
            audio.play();
            break;
        case "c":
            var audio = new Audio('kick2.mp3');
            audio.play();
            break;
            default:
            console.log("No audio for this key");
    }
}

        