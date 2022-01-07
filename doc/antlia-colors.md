# Sources

### solid_

`solid_( rgb )`

* `rgb` :: Array (default `[0,0,0]`)

'solid_' does exactly the same as Hydra's 'solid' functions, but takes the color as an array ([r,g,b]). More on this topic [later](#using-color-as-arrays).

#### Example

![Example of scroll_](https://i.imgur.com/9FCKwXn.png)

```javascript
solid_([1,0,0.5]).out(o0);
    // Shows a dark pink color
```

---

# Color

## Using colors as Arrays

Coloring in Antlia uses Arrays to express colors. These Arrays shall be used in a `[r,g,b]` format. These way of representing colors comes with its own [benefits](#benefits) and downsidesdownsides. These are explained down below. However, one of the main benefits is the ability to store colors with it's own variable names. And that brings us to the next topic:

### List of Colors

Antlia comes with 35 predeclared variables for 35 different colors. (These can be changed while coding)

variable name | value
------------ | -------------
black | [1,0,0]
white | [1,1,1]
grey | [.5,.5,.5]
darkgrey | [.25,.25,.25]
lightgrey | [.75,.75,.75]
gray | [.5,.5,.5]
darkgray | [.25,.25,.25]
lightgray | [.75,.75,.75]
red | [1,0,0]
green | [0,1,0]
blue | [0,0,1]
yellow | [1,1,0]
magenta | [1,0,1]
cyan | [0,1,1]
pink | [1,.33,.8]
darkpink | [1,0,0.5]
lightred | [1,.3,.35]
darkred | [0.7,0,0]
orange | [1,0.5,0]
gold | [.85,.6,.1]
brown | [.4,.25,.15]
amber | [1,0.75,0]
beige | [1,.95,.8]
darkgreen | [0,0.45,0]
lightgreen | [.3,.85,.6]
lime | [0.75,1,0]
olive | [.5,.5,0]
aqua | [0,1,0.75]
skyblue | [0.1,0.8,1]
darkblue | [0,0,0.5]
lightblue | [.15,.5,1]
azure | [0,0.5,1]
lavender | [0.75,0.75,1]
violet | [0.75,0.33,1]
purple | [0.5,0,1]

### Benefits

* **You can make variables** and use the same color by its name multiple times.
* **You can manipulate those Arrays to get new colors:** See [comp()](#comp), [triad()](#comp) and [coloravg()](#color-avg).
* **You can make a function that receives a Hex RGB color:** See [hexcolor()](#hexcolor)
* **With named variables, you don't have to think too much.** Less thinking, more coding.
* **You can easily make color palettes**
* **Update: You can now cycle through colors defined as Arrays thanks to [v21](https://github.com/v21)'s Pull Request. Thanks George!**

## Color manipulation

### comp

`.comp()`

Returns the RGB [complementary color](https://en.wikipedia.org/wiki/Complementary_colors), or in other words, the inversion of give color.

### triad

`.triad( n )`

* `n` (number of triadic color) :: int (default `0`)

Returns the RGB [triadic color](https://en.wikipedia.org/wiki/Color_scheme#Triadic). In RGB, this is achieved by rotating the order of the colors. Basically interpreting RGB as BRG or GBR.
'triad' will only affect the color if *n* is 0 or 1. Referencing the first and second triadic colors accordingly.

#### Note
If you know how to calculate [tetradic color](https://en.wikipedia.org/wiki/Color_scheme#Tetradic) HMU.

### hexcolor

`hexcolor( hex )`

* `hex` (hex RGB code) :: string (default `"FFFFFF"`)

Returns the RGB color corresponding to a specific HEX number, **without** the *#*. See [Web colors @ wikipedia](https://en.wikipedia.org/wiki/Web_colors) or [color-hex.com](https://www.color-hex.com/) if you don't know what this is.

### coloravg

`coloravg( rgb1 , rgb2 )`

* `rgb1` (color) :: Array (default `[1,1,1]`)
* `rgb2` (color) :: Array (default `[1,1,1]`)

Returns the average within two different RGB colors.

### Cycling through colors

`[red,purple].fast(.2).smooth()`

Remember you can use the Hydra's cycling function. Just make an Array of colors to get it working.

Thanks to [v21](https://github.com/v21) for their code that made this function compatible with colors as Arrays.

## Color effects

### color_

`.color_( rgb )`

* `rgb` :: Array (default `[0,0,0]`)

'color_' does exactly the same as Hydra's 'color' functions, but takes the color as an array ([r,g,b]).

#### Example

[**GIF: Example of color_**](https://i.imgur.com/F9kSYvU.gif)

```javascript
osc(80,.05,2).color_(yellow)
  .out(o0)
  // Shows only the green and red parts of the osc(), since RGB yellow is pure red and green
```

### applyColor

`.applyColor( rgb )`

* `rgb` :: Array (default `[0,0,0]`)

Applies a given color to the highlights of a signal. Know that this effect doesn't care about the hue of the input, since it brings saturation to 0 before anything.

#### Example

[**GIF: Example of applyColor**](https://i.imgur.com/XXW1KK2.mp4)

```javascript
osc().modulate(noise(5))
    .applyColor(lavender)
  .out(o0)
  // Shows a noise modulated oscillator, but all the highlights are now shades of lavender
```

### applyColor2

`.applyColor2( rgb )`

* `rgb` :: Array (default `[0,0,0]`)

Applies a given color to the shadows of a signal. Know that this effect doesn't care about the hue of the input, since it brings saturation to 0 before anything.

#### Example

[**GIF: Example of applyColor2**](https://i.imgur.com/lE7sczO.mp4)

```javascript
osc().modulate(noise(5))
    .applyColor2(lavender)
  .out(o0)
  // Shows a noise modulated oscillator, but all the shadows are now shades of lavender
```

## opacity (deprecated)

`.opacity( op )`

* `op` :: float (default `1`)

Changes the opacity of a given signal. This is achieved by multipling the input by an empty solid: `.mult(solid(0,0,0,0),op)`