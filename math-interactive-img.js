//ANTLIA by Ritchse
// https://github.com/ritchse/hydra-antlia
//
//just in case
hush()
//Maths
//const
window.screenratio = window.innerHeight/window.innerWidth
window.PI = Math.PI
//oscillators
window.rand = (min=0,max=1) => Math.random()*(max-min)+min
window.sin = (x=time,amp=1,freq=1) => Math.sin(x*freq)*amp
window.cos = (x=time,amp=1,freq=1) => Math.cos(x*freq)*amp
window.tan = (x=time,amp=1,freq=1) => Math.tan(x*freq)*amp
window.saw = function(x=time,amp=1,freq=1) {
  return -(2*amp/PI)*Math.atan(1/Math.tan(time*PI/(1/freq)));
}
window.bounce = function(t=time,amp=3,freq=1,bouncing=8) {
  var x = ()=> 6+saw(time,6,freq/2)/2;
  return Math.pow(Math.E,1-x())*(Math.abs(amp*Math.cos(bouncing*x())));
}
//funcs
window.osctorange = (osc,min,max) => (0.5+(osc/2))*(max-min)+min //only works for -1 to 1 osc's
window.sinrange = (x=time,min=0,max=1,freq=1) => osctorange(Math.sin(x*freq),min,max)
window.cosrange = (x=time,min=0,max=1,freq=1) => osctorange(Math.cos(x*freq),min,max)
window.sawrange = (x=time,min=0,max=1,freq=1) => osctorange(saw(x,1,freq),min,max)
//
//Interact
//MOUSE
//const
window.mouseXOffset = -.0135
window.mouseYOffset = -.0253
//vars
window.click = 0;
//funcs
window.mouseX = () => ((-mouse.x/window.innerWidth)+.5+mouseXOffset);
window.mouseY = () => ((-mouse.y/window.innerHeight)+.5+mouseYOffset);
//adding Listeners
window.document.body.addEventListener('mousedown', function(){ click = 1; }, true);
window.document.body.addEventListener('mouseup', function(){ click = 0 }, true);
//ARROW KEYS
//vars
window.key = { up:0, down:0, left:0, right:0 , x:0, y:0, sensibility:0.02};
window.keyIsDown = { up: false, down: false, left: false, right: false };
//funcs
window.incrementKeys = function() {
  if(window.keyIsDown.up) { window.key.y += key.sensibility}
  if(window.keyIsDown.left) { window.key.x += key.sensibility}
  if(window.keyIsDown.right) { window.key.x -= key.sensibility}
  if(window.keyIsDown.down) { window.key.y -= key.sensibility}
}
//adding Listeners
//triggers
window.document.body.addEventListener('keydown', event => {
  switch(event.keyCode){
    case 38: //up
      key.up=1; break;
    case 40: //down
      key.down=1; break;
    case 37: //left
      key.left=1; break;
    case 39: //right
      key.right=1; break;
  }
});
window.document.body.addEventListener('keyup', event => {
  switch(event.keyCode){
    case 38: //up
      key.up=0; break;
    case 40: //down
      key.down=0; break;
    case 37: //left
      key.left=0; break;
    case 39: //right
      key.right=0; break;
  }
});
//axis
window.document.body.addEventListener('keydown', event => {
  switch(event.keyCode){
    case 38: //up
      keyIsDown.up=true; break;
    case 40: //down
      keyIsDown.down=true; break;
    case 37: //left
      keyIsDown.left=true; break;
    case 39: //right
      keyIsDown.right=true; break;
  }
});
window.document.body.addEventListener('keyup', event => {
  switch(event.keyCode){
    case 38: //up
      keyIsDown.up=false; break;
    case 40: //down
      keyIsDown.down=false; break;
    case 37: //left
      keyIsDown.left=false; break;
    case 39: //right
      keyIsDown.right=false; break;
  }
});
window.initKeyControl = function() {
setInterval(incrementKeys, 25)
};
//util
osc().constructor.prototype.opacity = function(op) {
  if(typeof op === 'function')
    i = ()=>(1-op());
  else
    i = 1-op;
  return this.mult(solid(0,0,0,0),i);
}
osc().constructor.prototype.applyColor = function(r,g,b) {
  return this.saturate(0).color(r,g,b);
}
osc().constructor.prototype.applyColor2 = function(r,g,b) {
  return this.saturate(0).invert().color(1-r,1-g,1-b).invert();
}
//sources
//img
window.initImg = function(source,url){
var img = document.createElement('img');
img.crossOrigin = "anonymous";
img.src = url;
img.onload = function() {
source.init({ src: img, dynamic: false });};
}
window.initVid = function(source,url){
var img = document.createElement('img');
img.crossOrigin = "anonymous";
img.src = url;
img.onload = function() {
source.init({ src: img, dynamic: true });};
}
//img funcs
osc().constructor.prototype.correctScale = function(source){
  return this.scale(1,source.src.width/source.src.height*screenratio)
}
