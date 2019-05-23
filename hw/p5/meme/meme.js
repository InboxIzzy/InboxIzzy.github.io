let img;
let value = 255;
let x = 1;
let y = 1;
let easing = 0.05;

function setup(){
	createCanvas(1000,1000);
	img = loadImage('dark.png');
	noStroke();
}

function draw(){
	background(value);

	
	let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

fill("black");
  ellipse(x, y, 100, 100);
  image(img, 0, 0);
}


	




function keyPressed() {
  if (value === 255) {
    value = 0;
  } else {
    value = 255;
  }
}









// let x = 1;
// let y = 1;
// let easing = 0.05;
// let value = 0;
// var img;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   img = loadImage ('dark.png');
// }






// function draw() {


// image(img, 0, 0);


//  // let targetX = mouseX;
//   //let dx = targetX - x;
//   //x += dx * easing;

// //  let targetY = mouseY;
//  // let dy = targetY - y;
//  // y += dy * easing;

//  // ellipse(x, y, 66, 66);
// }

 // function keyPressed() {
 //   if (value = 255) {
 //     value = 0;
 //   } else {
 //     value = 255;
 //   }
 // }