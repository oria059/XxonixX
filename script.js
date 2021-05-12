var canvas = document.getElementById("xonix-board");

var ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 700;

var xSections = 50;
var ySections = 35;

// spaces[x][y]
// 0 == empty space
// 1 == player
// 2 == player's enemies
// 3 == player's land

spaces = [];

for (let i=0; i<xSections; i++) {
    spacesY = [];
    for (let j=0; i<ySections; j++) {
        spacesY.push(0);
    }
    spaces.push(spacesY);
}