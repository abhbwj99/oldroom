/*var canvas;
function setup()
{
   canvas = createCanvas(windowWidth,windowHeight);
   canvas.position(0,0);
   canvas.style('z-index','-1')
   pixelDensity(1);
}
function draw()
{
   //background(100,40,200);
   stroke(142,154,175);
   strokeWeight(0.4);
 // line(1120,0,1120,506); 
 //  line(220,220,220,506);
  line(0,220,1920,220);
  /* line(220,506,1120,506);
   line(1120,506,1120,730);
   noStroke();
   fill(17,17,17);
   rect(221,221,896,283);
   fill(17,17,17);
   stroke(142,154,175);
   strokeWeight(0.4);
   rect(1120,506,400,250); 
} */
var mY_RectANGLE = [];
var canvas;
function setup()
{
    canvas = createCanvas(window.innerWidth,1783);
    canvas.position(0,0);
    canvas.style('z-index','-1')
    for(var i = 0; i < 10; i++)
    {
          mY_RectANGLE[i] = new Ractangle();
       
    } 
}
function mouseMoved()
{
    mY_RectANGLE.push(new Ractangle(mouseX, mouseY));
}
function draw()
{
    
   background(242,242,226);
  // stroke(177,255,212);
  // strokeWeight(0.8);
  // line(0,220,1920,220);
  //  if(mouseIsPressed)
 //  {
         for(var j = 0; j < mY_RectANGLE.length; j++)
         {
             mY_RectANGLE[j].display();
             mY_RectANGLE[j].move();
         }
    if(mY_RectANGLE.length > 10)
        {
             mY_RectANGLE.splice(0, 4);
        }
  //  }
}
function Ractangle(x, y)
{
    this.x = x;
    this.y = y;
    
    this.r = 252;
    this.g = 242;
    this.b = 63;
    
    this.strk_Weight = 0;
    this.fIll_Col = random(255, 159);
    this.strk_Col = (this.r, this.g, this.b);
    
    this.display = function()
    {
        
        fill(this.r,this.g,this.b,80);
        stroke(this.r,this.g,this.b);
        strokeWeight(this.strk_Weight);
       // fill(this.fIll_Col, 100, 30);
       // rectMode(CENTER);
        ellipse(this.x, this.y, this.x, this.x); 
    }
    
    this.move = function()
    {
       
        this.x = this.x + random(-1, 2);
        this.y = this.y - random(-1, 2);
        
        this.x = this.x - this.strk_Weight;
        this.y = this.y + this.strk_Weight;
        
        this.x = this.x + this.strk_Weight;
        this.y = this.y + this.strk_Weight;
      
    }
}