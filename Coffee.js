//pull in the robotjs library (npm i robotjs)
const robot = require("robotjs")
// log to know if program is running
//console.log('Running...')
// Set an interval to run a function for a certain amount of miliseconds
setInterval(() => {
  // method of the robotjs library to get the position of the mouse and store to variable mouse
  const mouse = robot.getMousePos();
  // method to move the mouse from where it was +1 (move it down) [-1 move it up]
  robot.moveMouse(mouse.x,mouse.y+1);
  robot.moveMouse(mouse.x,mouse.y-1);
// 1000 = ms 60 = secs in a min 4.9 = amount of mins 
}, 1000*60*4);