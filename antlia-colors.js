// ANTLIA by Ritchse
// https://github.com/ritchse/hydra-antlia

//util
window.unzipKeepingNonindexed = function (arr) {
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
window.solid_ = (rgb = [0, 0, 0]) => {
    if (rgb[0].constructor === Array) {
        return solid(...window.unzipKeepingNonindexed(rgb));
    }
    else {
        return solid(...rgb);
    }
};
osc().constructor.prototype.opacity = function (op) {
    if (typeof op === 'function')
        i = () => (1 - op());
    else
        i = 1 - op;
    return this.mult(solid(0, 0, 0, 0), i);
}
osc().constructor.prototype.op = function (op) {
    return this.opacity(op)
}
osc().constructor.prototype.color_ = function (rgb = [1, 1, 1, 1]) {
    if (rgb[0].constructor === Array) {
        return this.color(...window.unzipKeepingNonindexed(rgb));
    }
    else {
        return this.color(...rgb);
    }
};
osc().constructor.prototype.applyColor = function (rgb = [1, 1, 1, 1]) {
    if (rgb[0].constructor === Array) {
        return this.saturate(0).color(...window.unzipKeepingNonindexed(rgb));
    }
    else {
        return this.saturate(0).color(...rgb);
    }
};
osc().constructor.prototype.applyColor2 = function (rgb) {
    return this.saturate(0).invert().color_(rgb.comp()).invert();
}

//Color
//funcs
Array.prototype.comp = function () {
    if (this[0].constructor === Array) {
        arr = Array.from(this)
        arr.forEach((item, i) => arr[i] = arr[i].comp())
        return arr;
    } else {
        return [1 - this[0], 1 - this[1], 1 - this[2]];
    }
};
Array.prototype.triad = function (i = 0) {
    if (this[0].constructor === Array) {
        arr = Array.from(this)
        arr.forEach((item, j) => arr[j] = arr[j].triad(i));
        return arr;
    } else {
        if (i === 0)
            return [this[2], this[0], this[1]];
        else if (i === 1)
            return [this[1], this[2], this[0]];
        else
            return this;
    }
};
Array.prototype.inv = function () {
    if (this[0].constructor === Array) {
        arr = Array.from(this)
        arr.forEach((item, i) => arr[i] = arr[i].inv())
        return arr;
    } else {
        return [-this[0], -this[1], -this[2]];
    }
}
window.colorinv = function (rgb) {
    return rgb.inv();
}
Array.prototype.avg = function (...rgb) {
    if (this[0].constructor === Array) {
        arr = Array.from(this)
        arr.forEach((item, i) => arr[i] = arr[i].avg(...rgb))
        return arr;
    } else {
        return coloravg(this, ...rgb)
    }
}
window.coloravg = function (...rgb) {
    var rgbavg = [0, 0, 0];
    rgb.forEach(function (item) {
        item.forEach((item2, i) => rgbavg[i] += item2)
    })
    rgbavg.forEach((item, i) => rgbavg[i] /= rgb.length)
    return rgbavg;
}
window.hexcolor = function (hex = "FFFFFF") {
    const offset = hex[0] == '#' ? 1 : 0;
    var r = parseInt(hex.substring(offset, offset + 2), 16);
    var g = parseInt(hex.substring(offset + 2, offset + 4), 16);
    var b = parseInt(hex.substring(offset + 4, offset + 6), 16);
    r = 1 * r / 255; g = 1 * g / 255; b = 1 * b / 255;
    return [r, g, b];
}
window.hex = function (hex = "FFFFFF") {
    return hexcolor(hex)
}
window.hexpalette = function (...arr) {
    var arr2 = []
    arr.forEach(function (hex) {
        arr2.push(hexcolor(hex))
    })
    return arr2
}

//vars (color list)
//shades
window.black = [0, 0, 0]
window.white = [1, 1, 1]
window.grey = [.5, .5, .5]
window.darkgrey = [.25, .25, .25]
window.lightgrey = [.75, .75, .75]
window.gray = window.grey
window.darkgray = window.darkgrey
window.lightgray = window.lightgrey
//RGB primary
window.red = [1, 0, 0]
window.green = [0, 1, 0]
window.blue = [0, 0, 1]
//RGB secondary
window.yellow = [1, 1, 0]
window.magenta = [1, 0, 1]
window.cyan = [0, 1, 1]
//RGB misc
//reddish - orange
window.pink = [1, .33, .8]
window.darkpink = [1, 0, 0.5]
window.lightred = [1, .3, .35]
window.darkred = [0.7, 0, 0]
window.orange = [1, 0.5, 0]
window.gold = [.85, .6, .1]
window.brown = [.4, .25, .15]
//yellowish
window.amber = [1, 0.75, 0]
window.beige = [1, .95, .8]
//greenish
window.darkgreen = [0, 0.45, 0]
window.lightgreen = [.3, .85, .6]
window.lime = [0.75, 1, 0]
window.olive = [.5, .5, 0]
//blueish
window.aqua = [0, 1, 0.75]
window.skyblue = [0.1, 0.8, 1]
window.darkblue = [0, 0, 0.5]
window.lightblue = [.15, .5, 1]
window.azure = [0, 0.5, 1]
//purple-ish
window.lavender = [0.75, 0.75, 1]
window.violet = [0.75, 0.33, 1]
window.purple = [0.5, 0, 1]