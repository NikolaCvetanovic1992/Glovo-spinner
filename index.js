const spinerContainer = document.getElementById("spin");

const spinerElement = document.getElementById("spiner-inner");

const one = document.getElementById("1");

const two = document.getElementById("2");

const three = document.getElementById("3");

const four = document.getElementById("4");

var isDragging = false;

var startAngle;

spinerContainer.addEventListener("mousedown", function (event) {
  isDragging = true;

  startAngle = getAngle(event.clientX, event.clientY);
});

spinerContainer.addEventListener("mouseup", function (event) {
  isDragging = false;
});

spinerContainer.addEventListener("mousemove", function (event) {
  if (isDragging) {
    var currentAngle = getAngle(event.clientX, event.clientY);
    var rotationAngle = currentAngle - startAngle;
    rotateDiv(rotationAngle);
  }
});

function getAngle(x, y) {
  var rect = spinerElement.getBoundingClientRect();
  var centerX = rect.left + rect.width / 2;
  var centerY = rect.top + rect.height / 2;
  return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
}

function rotateDiv(angle) {
  console.log(angle, "Angle");
  spinerElement.style.transform = "rotate(" + angle + "deg)";
  one.style.transform = "rotate(" + -angle + "deg)";
  two.style.transform = "rotate(" + -angle + "deg)";
  three.style.transform = "rotate(" + -angle + "deg)";
  four.style.transform = "rotate(" + -angle + "deg)";
}

// var divCenterX = spinerElement.offsetLeft + spinerElement.offsetWidth / 2;
// var divCenterY = spinerElement.offsetTop + spinerElement.offsetHeight / 2;

// let activateSpinner = false;
// let previouseAngle = 0;
// let rotation = 0;
// let textRotation = 0;

// function rotateItems(direction) {
//   if (direction === "right") {
//     rotation += 5;
//     spinerElement.style.transform = "rotate(" + rotation + "deg)";
//   } else if (direction === "left") {
//     rotation -= 5;
//     spinerElement.style.transform = "rotate(" + rotation + "deg)";
//   }
// }

// spinerContainer.addEventListener("mousedown", () => {
//   activateSpinner = true;
// });

// spinerContainer.addEventListener("mouseup", () => {
//   activateSpinner = false;
// });

// spinerContainer.addEventListener("mousemove", (event) => {
//   let mouseX = event.clientX;
//   let mouseY = event.clientY;

//   let angle =
//     Math.atan2(mouseY - divCenterY, mouseX - divCenterX) * (180 / Math.PI);

//   if (angle < previouseAngle) rotateItems("left");
//   else rotateItems("right");

//   previouseAngle = angle;
// });
