var reye=100
var leye=100


function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(95,68,62);
  fill(0)
  stroke(0)
  strokeWeight(0)
  ellipse(350,200,reye,reye)
  ellipse (150,200,leye,leye)
  ellipse (250,290,80,80)
  const scream = '???????????????????????????????????????????????????????????????????????????????????????????????????????';
textSize(50);
textWrap(WORD);
text(scream, 0, 0, 200);
fill(0, 0, 0, 75);
text(scream, 0, 20, 200);
fill(0, 0, 0, 50);
text(scream, 0, 40, 200);
fill(0, 0, 0, 25);
text(scream, 0, 60, 200);
strokeWeight(2);
textSize(15)
  textFont('Helvetica')
textStyle(ITALIC)
text("Can you", mouseX+10,mouseY)
text("hear me?", mouseX+15,mouseY+15)
line(240, 300, 305, 385);
line(185,385,240,320)
}

function mousePressed(){
  if (reye>170)
    {reye=100;}
  else
    {reye=reye+5}

    if (leye>170)
      {leye=100;}
    else
      {leye=leye+5}
  }
