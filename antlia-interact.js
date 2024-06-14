// ANTLIA by Geikha
// https://github.com/geikha/hydra-antlia

//Interact
//MOUSE
//const
window.mouseXOffset = -.0135
window.mouseYOffset = -.0253
//vars
window.click = 0;
window.clicks = 0;
window.altClick = 0;
window.altClicks = 0;
window.ctrlClick = 0;
window.ctrlClicks = 0;
window.shiftClick = 0;
window.shiftClicks = 0;
window.randClick = Math.random();
window.rangedRandClick = (min = 0, max = 1) => { return randClick * (max - min) + min };
//funcs
window.mouseX = () => ((-mouse.x / window.innerWidth) + .5 + mouseXOffset);
window.mouseY = () => ((-mouse.y / window.innerHeight) + .5 + mouseYOffset);
osc().constructor.prototype.followMouse = function () {
    return this.scroll(mouseX, mouseY)
}
//adding Listeners
window.document.body.addEventListener('mousedown', function (e) {
    click = 1;
    clicks += 1;
    if (e.altKey) {
        altClick = 1;
        altClicks += 1;
    } else if (e.ctrlKey) {
        ctrlClick = 1;
        ctrlClicks += 1;
    } else if (e.shiftKey) {
        shiftClick = 1;
        shiftClicks += 1;
    }
    randClick = Math.random();
}, true);
window.document.body.addEventListener('mouseup', function () {
    click = 0;
    altClick = 0;
    ctrlClick = 0;
    shiftClick = 0;
}, true);
//ARROW KEYS
//vars
window.key = { up: 0, down: 0, left: 0, right: 0, x: 0, y: 0, sensitivity: 0.02 };
window.keyIsDown = { up: false, down: false, left: false, right: false };
//funcs
window.incrementKeys = function () {
    if (window.keyIsDown.up) { window.key.y += key.sensitivity }
    if (window.keyIsDown.left) { window.key.x += key.sensitivity }
    if (window.keyIsDown.right) { window.key.x -= key.sensitivity }
    if (window.keyIsDown.down) { window.key.y -= key.sensitivity }
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
    if (keyControlInterval)
        stopKeyControl();
    window.keyControlInterval = setInterval(incrementKeys, Math.trunc(1000 / cps))
};
window.stopKeyControl = () => { clearInterval(keyControlInterval); keyControlInterval = false; };

//wheel

window.wheel = { y: 0, sensitivity: 0.02 };
window.onwheel = function (e) {
    let sign = e.deltaY > 0 ? -1 : 1;
    wheel.y += (sign * wheel.sensitivity);
}
