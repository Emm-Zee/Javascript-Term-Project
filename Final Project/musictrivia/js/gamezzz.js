// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
var x = document.getElementById("navMenu");
if (x.className.indexOf("show") == -1) {
x.className += " show";
} else { 
x.className = x.className.replace(" show", "");
}
}

document.getElementById("musicTrivia").onclick = function MusicTrivia() {
    location.href = "musictrivia/musictrivia.html";
};
document.getElementById("puzzle").onclick = function Puzzle() {
    location.href = "puzzle/puzzle.html";
};
document.getElementById("mrPotatohead").onclick = function MrPotatohead() {
    location.href = "potatohead/potatohead.html";
};
document.getElementById("tetris").onclick = function Tetris() {
    location.href = "tetris/tetris.html";
};

document.getElementById("gamezzz").onclick = function Tetris() {
    location.href = "gamezzz.html";
};
