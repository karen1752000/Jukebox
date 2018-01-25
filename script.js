var songs = ["Dave Brubeck - Take Five.mp3"
            "John Coltrane My Favorite Things (1961) [Full album].mp3"
            "Washed Out   Feel It All Around.mp3"];

var songTitle = document.getElementsById('songTitle');
var songSlider = document.getElementsById('songSlider');
var currentTime = document.getElementsById('currentTime');
var duration = document.getElementsById('duration');
var volumeSlider = document.getElementsById('volumeSlider');
var nextSongTitle = document.getElementsById('nextSongTitle');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong;

function loadSong () {
    song.src = "songs/" + songs[currentSong];
    songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
    nextSongTitle.innerHTML = "<b>Next Song</b>" + songs[currentSong + 1 % songs.length];
    song.volume = volumeSlider.value;
    song.play();
}

setInterval(updateSongSlider, 100);

function updateSongSlider () {
	var c = Math.round(song.currentTime);
}
