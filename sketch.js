function setup() {
    createCanvas(600, 600);
}

let value1 = "blue";
let value2 = "red";

function draw() {
  fill(value1);
  noStroke();
  rect(0, 0, 300, 600);
  noStroke();
  fill(value2);
  rect(300, 0, 300, 600);
}

function mouseClicked() {
    if (value1 == "blue" && mouseX < 300) {
        value1 = "red";
    }
    else if (value1 == "red" && mouseX < 300) {
        value1 = "blue";
    }

    if (value2 == "blue" && mouseX > 300) {
        value2 = "red";
    }
    else if (value2 == "red" && mouseX > 300) {
        value2 = "blue";
    }
}