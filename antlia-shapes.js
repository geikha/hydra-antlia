// ANTLIA by Ritchse
// https://github.com/ritchse/hydra-antlia

window.screenRatio = window.innerHeight / window.innerWidth
//basic shapes
window.circle = (s = .3, smooth = .007) =>
    solid(1, 1, 1, 1).mask(shape(256, s, smooth).scale(1, screenRatio))
window.square = (s = .25, smooth = 0) =>
    solid(1, 1, 1, 1).mask(shape(4, s, smooth).scale(1, screenRatio))
window.rectangle = function (s = .3, ratio = [1, 1], smooth = 0) {
    var r;
    if (ratio[0] > ratio[1])
        r = ratio[1];
    else
        r = ratio[0];
    return solid(1, 1, 1, 1).mask(shape(4, s, smooth).scale(1 / r, screenRatio * ratio[0], ratio[1]));
}
window.triangle = function (s = .3, x = 0, y = 0, smooth = .007) {
    if (typeof s === 'function')
        yoffset = () => (0 - s() / 4);
    else
        yoffset = (0 - s / 4);
    return solid(1, 1, 1, 1).mask(shape(3, s, smooth).rotate(Math.PI).scrollY(yoffset).scale(1, screenRatio));
}
//strips
window.horiz = (s = .3, smooth = .0007) =>
    solid(1, 1, 1, 1).mask(shape(2, s, smooth))
window.vert = (s = .3, smooth = .0007) =>
    solid(1, 1, 1, 1).mask(shape(2, s, smooth).rotate(Math.PI / 2))
window.leftdiag = (s = .3, smooth = .0007) =>
    solid(1, 1, 1, 1).mask(shape(2, s, smooth).rotate(Math.PI / 4))
window.rightdiag = (s = .3, smooth = .0007) =>
    solid(1, 1, 1, 1).mask(shape(2, s, smooth).rotate(Math.PI / -4))
//quadrants
window.firstquad = (r=1,g=1,b=1,a=1) =>
    solid(r,g,b,a).mask(shape(4, 1, .0007).scale(.5).scroll(.25, .25))
window.secondquad = (r=1,g=1,b=1,a=1) =>
    solid(r,g,b,a).mask(shape(4, 1, .0007).scale(.5).scroll(.25, -.25))
window.thirdquad = (r=1,g=1,b=1,a=1) =>
    solid(r,g,b,a).mask(shape(4, 1, .0007).scale(.5).scroll(-.25, .25))
window.fourthquad = (r=1,g=1,b=1,a=1) =>
    solid(r,g,b,a).mask(shape(4, 1, .0007).scale(.5).scroll(-.25, -.25))
window.quad = function (i = 0, r=1,g=1,b=1,a=1) {
    i %= 4
    switch (i) {
        case 0:
            return firstquad(r,g,b,a)
        case 1:
            return secondquad(r,g,b,a)
        case 2:
            return thirdquad(r,g,b,a)
        case 3:
            return fourthquad(r,g,b,a)
    }
}
//extra
window.star = function (s = .3, v = 5, smooth = 0.007) {
    if (typeof v === 'function')
        i = () => (Math.PI * (v() / 2));
    else
        i = Math.PI * (v / 2);
    return solid(1, 1, 1, 1).mask(shape(1, -1, smooth).rotate(Math.PI / 8 * 7).kaleid(v).rotate(i).scale(s, screenRatio));
}
window.grid = (x = 8, y = 4, b = 0.05, smooth = .001) => solid(1, 1, 1, 1).mask(shape(4, 1 - b, smooth).repeat(x, y).invert())