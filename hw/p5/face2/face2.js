

let s = 'I can Focous on you or the muse, pick one!';








function setup() {
	createCanvas(1000, 600);  
}

function draw(){
	

//hair
fill("black");
ellipse(width/2, height/2-100, 500, 400);
ellipse(340, 440, 250, 250);
ellipse(240, 340, 180, 180);
ellipse(240, 240, 180, 180);

ellipse(650, 440, 250, 250);
ellipse(740, 340, 180, 180);
ellipse(740, 240, 180, 180);






//head
stroke("black");
fill("#DEB887");
ellipse(width/2, height/2, 300, 300);



//glasses
stroke("black");
strokeWeight (5);
fill("white");
ellipse(width/2+75, height/2, 100, 100);


stroke("black");
strokeWeight (5);
fill("white");
ellipse(width/2-75, height/2, 100, 100);

strokeWeight (5);
line(520, 300, 475, 300);

//eyes
stroke("black");
fill("black");
ellipse(map(mouseX, 0,width, 400, 430), map(mouseY, 0,height, 280, 315), 50, 50);




//right?

fill("black");
ellipse(width/2+75, height/2, 50, 50)









//mouth
stroke("black");
strokeWeight(5);
fill("white");
triangle(500,400,520, 400, 510, 380);



  
fill(50);
strokeWeight (1);
textSize (24);
text(s, 30, 30, 300, 310); // Text wraps within text box


}
