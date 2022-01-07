// ANTLIA by Ritchse
// https://github.com/ritchse/hydra-antlia

//Interact
//MOUSE
//const
window.mouseXOffset = -.0135
window.mouseYOffset = -.0253
//vars
window.click = 0;
//funcs
window.mouseX = () => ((-mouse.x / window.innerWidth) + .5 + mouseXOffset);
window.mouseY = () => ((-mouse.y / window.innerHeight) + .5 + mouseYOffset);
osc().constructor.prototype.followMouse = function () {
    return this.scroll(mouseX, mouseY)
}
//adding Listeners
window.document.body.addEventListener('mousedown', function () { click = 1; }, true);
window.document.body.addEventListener('mouseup', function () { click = 0 }, true);
//ARROW KEYS
//vars
window.key = { up: 0, down: 0, left: 0, right: 0, x: 0, y: 0, sensibility: 0.02 };
window.keyIsDown = { up: false, down: false, left: false, right: false };
//funcs
window.incrementKeys = function () {
    if (window.keyIsDown.up) { window.key.y += key.sensibility }
    if (window.keyIsDown.left) { window.key.x += key.sensibility }
    if (window.keyIsDown.right) { window.key.x -= key.sensibility }
    if (window.keyIsDown.down) { window.key.y -= key.sensibility }
}
//adding Listeners
//triggers
window.document.body.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 38: //up
            key.up = 1; break;
        case 40: //down
            key.down = 1; break;
        case 37: //left
            key.left = 1; break;
        case 39: //right
            key.right = 1; break;
    }
});
window.document.body.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 38: //up
            key.up = 0; break;
        case 40: //down
            key.down = 0; break;
        case 37: //left
            key.left = 0; break;
        case 39: //right
            key.right = 0; break;
    }
});
//axis
window.document.body.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 38: //up
            keyIsDown.up = true; break;
        case 40: //down
            keyIsDown.down = true; break;
        case 37: //left
            keyIsDown.left = true; break;
        case 39: //right
            keyIsDown.right = true; break;
    }
});
window.document.body.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 38: //up
            keyIsDown.up = false; break;
        case 40: //down
            keyIsDown.down = false; break;
        case 37: //left
            keyIsDown.left = false; break;
        case 39: //right
            keyIsDown.right = false; break;
    }
});

window.keyControlInterval = false;
window.initKeyControl = function (cps = 30) {
    if(keyControlInterval)
        stopKeyControl();
    window.keyControlInterval = setInterval(incrementKeys, Math.trunc(1000 / cps))
};
window.stopKeyControl = ()=> { clearInterval(keyControlInterval); keyControlInterval = false; };