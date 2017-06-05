const inp = parseInt(document.getElementById('numb').value);
const canvas = document.getElementById('c');
const c = canvas.getContext('2d');
const angle = Math.PI / 180;
const audio = new Audio('33244__ljudman__dingding.wav');
const stop = document.getElementById('stop');
// Find center of element
let radius = canvas.height / 2;
c.translate(radius, radius);
// Reduce size of radius for circle
radius = radius * 0.90;
// Boom!!
function run() {
  clock();
  num();
  text();
  middleCircle()
}
function middleCircle (){
  c.beginPath();
  c.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  c.fillStyle = '#5a3f13';
  c.fill();
}
function clock() {
  // create main circle
  c.beginPath();
  c.arc(0, 0, radius, 0 , 2 * Math.PI);
  c.fillStyle = 'white';
  c.fill();
  // create a line around of the circle
  c.beginPath();
  c.arc(0, 0, radius, 0, 2 * Math.PI);
  c.lineWidth = 3;
  c.strokeStyle = '#5a3f13';
  c.stroke();
}
function text() {
  // Introduce creator
  c.font = '14px arial';
  c.textAlign = 'center';
  c.fillStyle = 'black';
  c.rotate(0 * Math.PI / 180);
  c.fillText('Matin Kaboli, Timer', 0, 240);
}
function num() {
  // Numbers (1 to 12)
  let number, ang;
  c.font = '20px cursive';
  c.textAlign = 'center';
  c.fillStyle = '#5a3f13';
  for (number = 1; number <= 12; number++) {
    ang = number * Math.PI / 6;
    c.rotate(ang);
    c.translate(0, -radius*0.90);
    c.rotate(-ang);
    c.fillText(number.toString(), 0, 10);
    c.rotate(ang);
    c.translate(0, radius*0.90);
    c.rotate(-ang);
  }
}
run();

var a = 0, b = 1;

function resetClock() {
  c.rotate((b * 6 + ((b) * 6)) * angle);
}
// Add an event to button to use the timer
document.getElementById('btn').addEventListener('click', () => {
  var inp = document.getElementById('numb').value;
  var parseI = parseFloat(inp);
  var input = Math.ceil(parseI);

  // define input number
  if (a !== 0) {
    resetClock();
  }
  if (input == 0 || input < 0) {
    alert('Enter number more than 0');
  } else if (isNaN(input)) {
    alert('Please enter number, not something not a number!')
  } else {
    console.log(input);
    b = 0;
    stop.style.display = 'block';
    stopClock();
    clearTime();
    time(input);
  }
}, false);
function stopClock () {
  clearInterval(y);
  console.log(`B = ${b}`);
  middleCircle();
}
stop.addEventListener('click', stopClock, false);
// Create lines
var y;
function time(input) {
  a = input * 6 - 6;
  y = setInterval(() => {
    b++;
    console.log(`B = ${b}`);
    console.log(`A = ${a}`);
    setTimeout(() => {
      c.beginPath();
      c.fillStyle = 'white'
      c.arc(0, 0, radius, 0, 2 * Math.PI);
      c.fill();
    }, 975);
    c.beginPath();
    c.lineWidth = 3;
    c.strokeStyle = '#3d3e35';
    c.rotate((225 + a) * angle);
    a += 6;
    c.moveTo(0, 0);
    c.lineTo(115, 115);
    c.stroke();
    c.rotate((-231 - a) * angle);
    if (a == (2 * (input * 6) - 6)) {
      clearInterval(y);
      audio.play();
      alert('Time\'s up'/* finally*/);
      middleCircle();
    }
    middleCircle();
  }, 1000);
  middleCircle();
}
radius = radius * 0.82;
function clearTime() {
  c.beginPath();
  c.fillStyle = 'white';
  c.arc(0, 0, radius, 0, 2 * Math.PI);
  c.fill();
  c.beginPath();
  c.strokeStyle = 'white';
  c.arc(0, 0, radius, 0 , 2 * Math.PI);
  c.stroke();
  middleCircle();
}
