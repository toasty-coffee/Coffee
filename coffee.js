// pull in the robotjs library (npm i robotjs)
const robot = require('robotjs');

// function to be executed by the setInterval
function disturbMouse() {
  // method of the robotjs library to get the position
  // of the mouse and store to variable mousePos
  const mousePos = robot.getMousePos();
  // method to move the mouse up one pixel on the y axis
  robot.moveMouse(mousePos.x, mousePos.y - 1);
  // method to move the mouse back to original position
  robot.moveMouse(mousePos.x, mousePos.y);
}

// Set an interval to run the disturbMouse
// function every 60 seconds
// 1000ms = 1s
// 60s = 1m
setInterval(disturbMouse, 1000 * 60);
