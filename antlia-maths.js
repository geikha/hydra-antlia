// ANTLIA by Geikha
// https://github.com/geikha/hydra-antlia

//Maths
//const
window.screenRatio = window.innerHeight / window.innerWidth
window.PI = Math.PI
window.pi = Math.PI
//oscillators
window.rand = (min = 0, max = 1) => Math.random() * (max - min) + min
window.sin = (x = time, amp = 1, freq = 1) => Math.sin(x * freq) * amp
window.cos = (x = time, amp = 1, freq = 1) => Math.cos(x * freq) * amp
window.tan = (x = time, amp = 1, freq = 1) => Math.tan(x * freq) * amp
window.saw = function (x = time, amp = 1, freq = 1) {
    return -(2 * amp / PI) * Math.atan(1 / Math.tan(time * PI / (1 / freq)));
}
window.bounce = function (t = time, amp = 3, freq = 1, bouncing = 8) {
    var x = () => 6 + saw(time, 6, freq / 2) / 2;
    return Math.pow(Math.E, 1 - x()) * (Math.abs(amp * Math.cos(bouncing * x())));
}
//timed oscillators
window.sint = (...args) => sin(time,...args)
window.cost = (...args) => cos(time,...args)
window.tant = (...args) => tan(time,...args)
window.sawt = (...args) => saw(time,...args)
window.bouncet = (...args) => bounce(time,...args)
//funcs
window.osctorange = (osc, min, max) => (0.5 + (osc / 2)) * (max - min) + min //only works for -1 to 1 osc's
window.sinrange = (x = time, min = 0, max = 1, freq = 1) => osctorange(Math.sin(x * freq), min, max)
window.cosrange = (x = time, min = 0, max = 1, freq = 1) => osctorange(Math.cos(x * freq), min, max)
window.sawrange = (x = time, min = 0, max = 1, freq = 1) => osctorange(saw(x, 1, freq), min, max)
