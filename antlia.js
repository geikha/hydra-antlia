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
window.unzipKeepingNonindexed = function(arr) {
  var elements = arr.length;
  var len = arr[0].length;
  var final = [];
  for (var i = 0; i < len; i++) {
    var temp = Object.assign([], arr);
    temp.length = 0;
    for (var j = 0; j < elements; j++) {
      temp.push(arr[j][i]);
    }
    final.push(temp);
  }
  return final;
};
window.solid_ = (rgb=[0,0,0]) => {
  if(rgb[0].constructor === Array) {
    return solid(...window.unzipKeepingNonindexed(rgb));
  }
  else {
    return solid(...rgb);
  }
};
osc().constructor.prototype.opacity = function(op) {
  if(typeof op === 'function')
    i = ()=>(1-op());
  else
    i = 1-op;
  return this.mult(solid(0,0,0,0),i);
}
osc().constructor.prototype.op = function(op) {
  return this.opacity(op)
}
osc().constructor.prototype.color_ = function(rgb = [1,1,1,1]) {
  if(rgb[0].constructor === Array) {
    return this.color(...window.unzipKeepingNonindexed(rgb));
  }
  else {
    return this.color(...rgb);
  }
};
osc().constructor.prototype.applyColor = function(rgb = [1,1,1,1]) {
  if(rgb[0].constructor === Array) {
    return this.saturate(0).color(...window.unzipKeepingNonindexed(rgb));
  }
  else {
    return this.saturate(0).color(...rgb);
  }
};
osc().constructor.prototype.applyColor2 = function(rgb) {
  return this.saturate(0).invert().color_(rgb.comp()).invert();
}
//sources
//img funcs
osc().constructor.prototype.correctScale = function(source){
  return this.scale(1,source.src.width/source.src.height*screenratio)
}
//basic shapes
window.circle = (s=.3,rgb=[1,1,1],smooth=.007,x=0,y=0) =>
			solid_(rgb).mask(shape(256,s,smooth).scale(1,screenratio).scroll(x,y))
window.square = (s=.25,rgb=[1,1,1],smooth=0,x=0,y=0) =>
			solid_(rgb).mask(shape(4,s,smooth).scale(1,screenratio).scroll(x,y))
window.rectangle = function(s=.3,ratio=[1,1],rgb=[1,1,1],smooth=0,x=0,y=0){
  var r;
  if(ratio[0]>ratio[1])
    r=ratio[1];
  else
    r=ratio[0];
  return solid_(rgb).mask(shape(4,s,smooth).scale(1/r,screenratio*ratio[0],ratio[1]).scroll(x,y));
}
window.triangle = function(s=.3,rgb=[1,1,1],smooth=.007,x=0,y=0) {
  if(typeof s === 'function')
    yoffset = ()=>(0-s()/4);
  else
    yoffset = (0-s/4);
  return solid_(rgb).mask(shape(3,s,smooth).rotate(PI).scrollY(yoffset).scale(1,screenratio).scroll(x,y));
}
//strips
window.horiz = (s=.3,rgb=[1,1,1],smooth=0,y=0) =>
  solid_(rgb).mask(shape(2,s,smooth).scrollY(y))
window.vert = (s=.3,rgb=[1,1,1],smooth=0,x=0) =>
  solid_(rgb).mask(shape(2,s,smooth).rotate(PI/2).scrollX(x))
window.leftdiag = (s=.3,rgb=[1,1,1],smooth=0,x=0,y=0) =>
  solid_(rgb).mask(shape(2,s,smooth).rotate(PI/4).scroll(x,y))
window.rightdiag = (s=.3,rgb=[1,1,1],smooth=0,x=0,y=0) =>
  solid_(rgb).mask(shape(2,s,smooth).rotate(PI/-4).scroll(x,y))
//quadrants
window.firstquad = (rgb=[1,1,1]) =>
  solid_(rgb).mask(shape(4,1,0).scale(.5).scroll(.25,.25))
window.secondquad  = (rgb=[1,1,1]) =>
  solid_(rgb).mask(shape(4,1,0).scale(.5).scroll(.25,-.25))
window.thirdquad  = (rgb=[1,1,1]) =>
  solid_(rgb).mask(shape(4,1,0).scale(.5).scroll(-.25,.25))
window.fourthquad  = (rgb=[1,1,1]) =>
  solid_(rgb).mask(shape(4,1,0).scale(.5).scroll(-.25,-.25))
//extra
window.star = function(s=.3,v=5,rgb=[1,1,1],smooth=0.007,op=1,x=0,y=0) {
  if(typeof v === 'function')
    i = ()=>(Math.PI*(v()/2));
  else
    i = Math.PI*(v/2);
  return solid_(rgb).mask(shape(1,-1,smooth).rotate(Math.PI/8*7).kaleid(v).rotate(i).scale(s,screenratio).scroll(x,y)).opacity(op);
}
window.grid = (x=8,y=4,b=0.05,rgb=[1,1,1],smooth=.001) => solid_(rgb).mask(shape(4,1-b,smooth).repeat(x,y).invert())
//
//Color
//funcs
Array.prototype.comp = function() {
  return [1-this[0],1-this[1],1-this[2]];
};
Array.prototype.triad = function(i=0) {
	if (i === 0)
		return [this[2],this[0],this[1]];
	else if (i === 1)
		return [this[1],this[2],this[0]]
	else
	 return this;
};
window.coloravg = function(rgb1,rgb2) {
	var rgbavg = [,,];
	for(i = 0; i<3; i++) rgbavg[i] = (rgb1[i]+rgb2[i])/2;
	return rgbavg;
}
window.hexcolor = function(hex="FFFFFF") {
	var r = parseInt(hex.substring(0,2),16);
	var g = parseInt(hex.substring(2,4),16);
	var b = parseInt(hex.substring(4,6),16);
	r = 1*r/255; g = 1*g/255; b = 1*b/255;
	return [r,g,b];
}
//vars (color list)
//shades
window.black = [0,0,0]
window.white = [1,1,1]
window.grey = [.5,.5,.5]
window.darkgrey = [.25,.25,.25]
window.lightgrey = [.75,.75,.75]
window.gray = window.grey
window.darkgray = window.darkgrey
window.lightgray = window.lightgrey
//RGB primary
window.red = [1,0,0]
window.green = [0,1,0]
window.blue = [0,0,1]
//RGB secondary
window.yellow = [1,1,0]
window.magenta = [1,0,1]
window.cyan = [0,1,1]
//RGB misc
//reddish - orange
window.pink = [1,.33,.8]
window.darkpink = [1,0,0.5]
window.lightred = [1,.3,.35]
window.darkred = [0.7,0,0]
window.orange = [1,0.5,0]
window.gold = [.85,.6,.1]
window.brown = [.4,.25,.15]
//yellowish
window.amber = [1,0.75,0]
window.beige = [1,.95,.8]
//greenish
window.darkgreen = [0,0.45,0]
window.lightgreen = [.3,.85,.6]
window.lime = [0.75,1,0]
window.olive = [.5,.5,0]
//blueish
window.aqua = [0,1,0.75]
window.skyblue = [0.1,0.8,1]
window.darkblue = [0,0,0.5]
window.lightblue = [.15,.5,1]
window.azure = [0,0.5,1]
//purple-ish
window.lavender = [0.75,0.75,1]
window.violet = [0.75,0.33,1]
window.purple = [0.5,0,1]
