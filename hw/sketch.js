
let snowflakes = []; // array to hold snowflake objects

function setup() {
  var cnv = createCanvas(400, 600);
    cnv.parent=('content');
  fill(200); //chnages the color, 0= black, 100= grey, 240 orignal//
  noStroke();
}

function draw() {
  background('brown');
  let t = frameCount / 500; // update time, fps.. 24 speeds up the cycle, 60 orignal.. i liked 500//

  // create a random number of snowflakes each frame
  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(50, 0); //makes them dissapear a bit qicker at random//
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 4))); //first number if rizen makes the flakes closer together as if in a box, 2nd number will make them further apart as if keeping them a certen lengths away//

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle); //moves it over as well//

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 5); //when chnaged to 5 made it slower... orignally...1... also looks a bit more contained//
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size); //shape of the snow flakes/
  };
}
