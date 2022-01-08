window.touch = 0;
window.finger = { y:0, x:0, lastX: 0, lastY: 0 };
window.swipe = { y:0, x:0 };
//window.zoom = 0;
//window.pinch = { d: 0, lastD: 0 };
function updateFingerPos(e){
  	finger.lastX = finger.x; finger.lastY = finger.y;
  	let t = e.touches[0];
  	finger.y = (-t.clientY / window.innerHeight) + .5;
  	finger.x = (-t.clientX / window.innerWidth) + .5;
}
function updateSwipe(){
	swipe.y -= (finger.lastY+.5)-(finger.y+.5)
  	swipe.x -= (finger.lastX+.5)-(finger.x+.5)
}
function distanceFromEvent(e){
 	return Math.hypot(
    		e.touches[0].clientX - e.touches[1].clientX,
    		e.touches[0].clientY - e.touches[1].clientY) 
  			/ Math.hypot(innerWidth,innerHeight);
}
window.addEventListener('touchstart',function(e){
	touch = 1;
  	updateFingerPos(e);
  	//if(e.touches.length == 2)
    //	pinch.lastD = distanceFromEvent(e);
});
window.addEventListener('touchend',function(e){
	touch = 0;
});
window.addEventListener('touchmove',function(e){
	updateFingerPos(e);
  	if(e.touches.length == 1)
      updateSwipe();
  	//else if(e.touches.length == 2){
    //  pinch.d = distanceFromEvent(e);
    //  zoom += (pinch.d-pinch.lastD);
    //  pinch.lastD = pinch.d;
    //}
});
//orientation
window.orientation = { alpha: 0, gamma: 0, beta: 0 }
window.addEventListener("deviceorientation", function(e) {
	orientation.alpha = e.alpha ? e.alpha : 0;
  	orientation.gamma = e.gamma ? e.gamma : 0;
  	orientation.beta = e.beta ? e.beta : 0;
});
window.hideGui = function() {
document.getElementById('modal-header').style.display = "none"
document.getElementsByClassName('CodeMirror-scroll')[0].style.display = 'none'
document.getElementsByClassName('CodeMirror-vscrollbar')[0].remove()
};
window.disableZooming = ()=> {
  document.head.getElementsByTagName("meta")["viewport"].setAttribute("content","height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi")
};
//orientation
window.orient = { alpha: 0, gamma: 0, beta: 0 };
window.addEventListener("deviceorientation", function(e) {
	orient.alpha = e.alpha ? e.alpha/180 : 0;
  	orient.gamma = e.gamma ? e.gamma/90 : 0;
  	orient.beta = e.beta ? (e.beta-90)%180/180 : 0;
  	console.log(e.alpha,e.gamma,e.beta);
});
