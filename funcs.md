# Functions

## Categories

### Sources
- [Sources](#sources)
  - [solid_](#solid_)
- [Geometric Shapes](#geometric-shapes)
  - [square](#square)
  - [circle](#circle)
  - [triangle](#triangle)
  - [rectangle](#rectangle)
- [Strips](#strips)
  - [horiz](#horiz)
  - [vert](#vert)
  - [leftdiag](#leftdiag)
  - [rightdiag](#rightdiag)
- [Quadrants](#quadrants)
  - [firstquad](#firstquad)
  - [secondquad](#secondquad)
  - [thirdquad](#thirdquad)
  - [fourthquad](#fourthquad)
- [Extra Sources](#extra-sources)
  - [star](#star)
  - [grid](#grid)
### Color
- [Using Colors as Arrays](#using-color-as-arrays)
  - [List of colors](#list-of-colors)
  - [Benefits of using colors as Arrays](#benefits)
- [Color manipulation](#color-manipulation)
  - [comp](#comp)
  - [triad](#triad)
  - [hexcolor](#hexcolor)
  - [coloravg](#coloravg)
- [Color effects](#color-effects)
  - [color_](#color_)
  - [applyColor](#applycolor)
  - [applyColor2](#applycolor2)
- [opacity](#opacity)
### Image and video 
- [Using image or video](#using-image-or-video)
  - [correctScale](#correctScale)
### Maths
- [Constants](#constants)
  - [screenratio](#screenratio)
  - [PI](#PI)
- [Oscillators](#oscillators)
  - [rand](#rand)
  - [sin](#sin)
  - [cos](#cos)
  - [tan](#tan)
  - [saw](#saw)
  - [bounce](#bounce)
- [Ranged Oscillators](#ranged-oscillators)
  - [sinrange](#sinrange)
  - [cosrange](#cosrange)
  - [sawrange](#sawrange)
### Interactivity
- [Mouse Interactivity](#mouse-interactivty)
  - [mouseX](#mouseX)
  - [mouseXOffset](#mouseXOffset)
  - [mouseY](#mouseY)
  - [mouseYOffset](#mouseYOffset)
  - [click](#click)
- [Keyboard Interactivity](#mouse-interactivity)
  - [key.up](#keyup)
  - [key.down](#keydown)
  - [key.left](#keyleft)
  - [key.right](#keyright)
  - [initKeyControl](#initKeyControl)
  - [key.y](#keyy)
  - [key.x](#keyx)
  - [key.sensibility](#keysensibility)

---

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

## Geometric shapes

### square

```javascript
square( s, rgb, smooth, op, x, y )
```

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a perfect square on the screen. Try to remember these arguments because they are found on every other shape.

#### Example

![Example of square](https://i.imgur.com/ppWMpDJ.png)

```javascript
solid_([0.5,0.5,0])
  .layer(square(.4,[1,0,0]))
  .out(o0)
  // Shows a red square over an olive background
```

### circle

`circle( s, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.007`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a perfect circle on the screen.

#### Example

![Example of cirlce](https://i.imgur.com/IJodzp8.gif)

```javascript
solid_(grey)
  .layer(circle(.4,red))
  .layer(circle(.7,blue,0.05,()=>sinrange(time,0,1)))
  .out(o0)
  // Shows a blue circle pulsating over a red circle over a grey background.
```
Note how, since colors are Arrays, you can store colors by their namers, and that's exactly what Antlia does. (See the [list of colors](#list-of-colors))

### triangle

`triangle( s, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows an equilateral triangle on the screen. Note that on Hydra, it can be difficult to have a triangle centered on the screen depending it size, Antlia will take care of that for you.

#### Example

![Example of triangle](https://i.imgur.com/OglGoDS.gif)

```javascript
solid_(darkgreen)
  .layer(triangle(()=>sawrange(time,0.1,0.5),lightgreen))
  .out(o0)
  // Shows a small light green triangle getting bigger in a cycle, over a dark green background.
```
'sawrange' is one of the added [math functions](#Maths)

### rectangle

`rectangle( s, ratio, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `ratio` :: Array (default `[1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a rectangle on the screen with a specified ratio.

#### Example

![Example of rectanlge](https://i.imgur.com/lhSCCPI.png)

```javascript
solid_(darkgrey)
  .layer(rectangle(.5,[2,1],darkpink))
  .diff(rectangle(.6,[4,5]))
  .out(o0)
  // Shows a 2:1 pink rectangle over a dark grey background. While that is being affected by a 4:5 rectangle.
```
**Note:** The second element of the *ratio* Array can be a function (i.e. a sine wave), but not the other way around. At least that's how it's working now.

## Strips

Strips are lines that go all across the screen.

### horiz

`horiz( s, ratio, rgb, smooth, op, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `ratio` :: Array (default `[1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `y` (y coord.) :: float (default `0`)

Shows a horizontal line on the screen. Note that the 'x' argument from before is removed, since it's no longer needed.

#### Example

![Example of horiz](https://i.imgur.com/i60hmmv.png)

```javascript
solid_(skyblue)
  .layer(horiz(.4))
  .layer(star(.4,52,amber))
  .out(o0)
  // The flag of Argentina
```

### vert

`vert( s, ratio, rgb, smooth, op, x )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `ratio` :: Array (default `[1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)

Shows a vertical line on the screen. Note that the 'y' argument from before is removed, since it's no longer needed.

#### Example

![Example of vert](https://i.imgur.com/elwtDM0.png)

```javascript
solid_([.1,.3,.75])
  .layer(horiz(.25)).layer(vert(.25*screenratio).scrollX(.1))
  .layer(horiz(.15,red)).layer(vert(.15*screenratio,red).scrollX(.1))
  .out(o0)
  // The flag of Iceland
```
See how if you want a vertical strip to have the exact same thickness as a horizontal one, you can multiply the size value by the [screenratio](#screenratio).

### leftdiag

`leftdiag( s, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a diagonal line on the screen that goes from the upper left part of the screen to the lower right.

#### Example

[**GIF: Example of leftdiag**](https://i.imgur.com/YZktxe3.gif)

```javascript
solid_(black)
  .add(
    osc(60,.1,2)
      .modulateRotate(osc(20)).modulate(o0)
    .mult(leftdiag(.2)))
  .out(o0)
  // Shows a diagonal strip with a colourish feedback loop inside of it.
```

### rightdiag

`rightdiag( s, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a diagonal line on the screen that goes from the upper right part of the screen to the lower left.

#### Example

![Example of rightdiag](https://i.imgur.com/9xV9n28.png)

```javascript
solid_(azure)
  .layer(leftdiag(.15)).layer(rightdiag(.15))
  .out(o0)
  // The scottish flag.
```

## Quadrants

Quadrants are the different parts of the screen you get by dividing it into 4 equal pieces.

### firstquad

`firstquad( rgb )`

* `rgb` (color) :: Array (default `[1,1,1]`)

Shows the upper left quadrant.

### secondquad

`secondquad( rgb )`

* `rgb` (color) :: Array (default `[1,1,1]`)

Shows the lower left quadrant.

### thirdquad

`thirdquad( rgb )`

* `rgb` (color) :: Array (default `[1,1,1]`)

Shows the upper right quadrant.

### fourthquad

`fourthquad( rgb )`

* `rgb` (color) :: Array (default `[1,1,1]`)

Shows the lower right quadrant.

### Example

![Example of Quadrants](https://i.imgur.com/BsmvKl4.png)

```javascript
solid_(black)
  .layer(voronoi().shift().mask(firstquad()))
  .layer(secondquad(red))
  .layer(thirdquad(lavender))
  .layer(osc().diff(osc().rotate()).mask(fourthquad()))
  .out(o0)
  // Shows something different on every part of the screen
```
  
## Extra Sources

### star

`star( s, v, rgb, smooth, op, x, y )`

* `s` (size) :: float (default `.3`)
* `v` (vertices) :: float (default `5`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `ratio` :: Array (default `[1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.007`)
* `op` (opacity) :: float (default `1`)
* `x` (x coord.) :: float (default `0`)
* `y` (y coord.) :: float (default `0`)

Shows a star of *v* vertices. Know that *v* can recieve a function (i.e. [sawrange](#sawrange)), but be careful not to use a number between -2 and 2 (exclusive).

#### Example

![Example of star](https://i.imgur.com/95p7t6F.png)

```javascript
var sovietred = [.9,0,0]
solid_(sovietred)
  .layer(star(1,5,amber))
  .layer(star(.75,5,sovietred))
  .out(o0)
  // Soviet Star.
```

### grid

`grid( x, y, b, rgb, smooth )`

* `x` (columns) :: float (default `8`)
* `y` (rows) :: float (default `4`)
* `b` (boldness) :: float (default `0.05`)
* `rgb` (color) :: Array (default `[1,1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.001`)

Shows a grid of *x* columns and *y* rows.

#### Example

![Example of grid](https://i.imgur.com/738pTek.png)

```javascript
solid_(darkgray)
  .layer(grid(16,8,.1))
  .modulateScale(circle(.32,white,1),-.4)
  .out(o0)
  // Show a grid with a strong rectilinean deformation
```

---

# Color

## Using colors as Arrays

Coloring in Antlia uses Arrays to refer to colors. These Arrays shall be used in a `[r,g,b]` format. These way of representing colors comes with its own [benefits](#benefits) and [downsides](#downsides). These are explained down below. However, one of the main benefits is the ability to store colors with it's own variable names. And that brings us to the next topic:

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

#### Example

![Example of comp](https://i.imgur.com/ME97R4A.png)

```javascript
solid_(amber).layer(circle(.7,amber.comp())).out(o0)
solid_(aqua).layer(circle(.7,aqua.comp())).out(o1)
solid_(purple).layer(circle(.7,purple.comp())).out(o2)
solid_(brown).layer(circle(.7,brown.comp())).out(o3)
render()
  // Shows four examples of composite color
```

### triad

`.triad( n )`

* `n` (number of triadic color) :: int (default `0`)

Returns the RGB [triadic color](https://en.wikipedia.org/wiki/Color_scheme#Triadic). In RGB, this is achieved by rotating the order of the colors. Basically interpreting RGB as BRG or GBR.
'triad' will only affect the color if *n* is 0 or 1. Referencing the first and second triadic colors accordingly.

#### Example

![Example of triad](https://i.imgur.com/TE6ZWOR.png)

```javascript
solid_(azure)
  .layer(circle(.5,azure.triad(),.01,1,.2))
  .layer(circle(.5,azure.triad(1),.01,1,-.2))
  .out(o0)
  // Shows both triadic colors of 'azure' ([0,0.5,1])
```

#### Note
If you know how to calculate [tetradic color](https://en.wikipedia.org/wiki/Color_scheme#Tetradic) HMU fo' sure.

### hexcolor

`hexcolor( hex )`

* `hex` (hex RGB code) :: string (default `"FFFFFF"`)

Returns the RGB color corresponding to a specific HEX number, **without** the *#*. See [Web colors @ wikipedia](https://en.wikipedia.org/wiki/Web_colors) or [color-hex.com](https://www.color-hex.com/) if you don't know what this is.

#### Example

[**GIF: Example of hexcolor**](https://i.imgur.com/6FIiS00.mp4)

```javascript
osc().diff(osc().rotate(.4))
  .applyColor2(hexcolor('829f89'))
  .layer(star(.7,7,hexcolor('fc44aa')))
  .out(o0)
  // Shows an oscilating gray-greenish background with a 7 point dark pink star
```

### coloravg

`coloravg( rgb1 , rgb2 )`

* `rgb1` (color) :: Array (default `[1,1,1]`)
* `rgb2` (color) :: Array (default `[1,1,1]`)

Returns the average within two different RGB colors.

#### Example

![Example of coloravg](https://i.imgur.com/qlvkKxT.png)

```javascript
solid_(lightred)
  .layer(rectangle(.7,[2,1],lightblue))
  .layer(circle(.5,coloravg(lightred,lightblue)))
  .out(o0)
  // Shows a light blue 2:1 rectangle over a light red background. 
  // Over them a circle, which color is the average of the previous.
```

### Cycling through colors

`[red,purple].fast(.2).smooth()`

Remember you can use the Hydra's cycling function. Just make an Array of colors to get it working.

Thanks to [v21](https://github.com/v21) for his code that made this function compatible with colors as Arrays.

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

### Note

You can still use the last two effects in the [version of Atlia that excludes geometry and color](https://github.com/ritchse/hydra-antlia/blob/master/math-interactive-img.js), but the arguments there have been changed to `(r,g,b)` as in Hydra's `.color(r,g,b)`

## opacity

`.opacity( op )`

* `op` :: float (default `1`)

Changes the opacity of a given signal. This is achieved by multipling the input by an empty solid: `.mult(solid(0,0,0,0),op)`

#### Example

[**GIF: Example of opacity**](https://i.imgur.com/HlN7Qjs.gif)

```javascript
osc()
  .layer(grid(8,4,.3,red).opacity(.5))
  .out(o0)
  // Overlays a red 8:4 grid over an oscillator signal
```

---

# Image and video

## Using image or video

### Images (initImg)

`initImg( source, url )`

* `source` :: A Hydra Source, such as s0, s1, etc.
* `url` :: string (the url of the image)

Shoutout to [munshkr](https://github.com/munshkr) and [his example](https://gist.github.com/munshkr/a4c280240bfd07a9819c1218d3952571) which I've copied for this function.

### Videos (initVid)

`initVid( source, url )`

* `source` :: A Hydra Source, such as s0, s1, etc.
* `url` :: string (the url of the video)

### correctScale

`correctScale( source )`

* `source` :: A Hydra Source, such as s0, s1, etc.

This will resize the image in a given source to its original proportions.

---

# Maths

## Constants

### screenratio

`screenratio = window.innerHeight/window.innerWidth`

Very self-descriptive, multiply the X scale of something to make it perfectly square.

#### Example

[**GIF: Example of screenratio**](https://i.imgur.com/23SNMN0.gif)

```javascript
osc()
  .diff(shape(4).scale(1,screenratio))
  .out(o0)
```

### PI

`PI = Math.PI`

Shorter version of 'Math.PI'

#### Example

[**GIF: Example of PI**](https://i.imgur.com/Xrw7LXd.mp4)

```javascript
osc()
  .diff(shape(4).scale(1,screenratio))
  .rotate(PI/4)
  .out(o0)
  // Rotates exactly 45°
```

## Oscillators

### rand

`rand( min, max )`

* `min` :: float (default `0`)
* `max` :: float (default `1`)

Returns a random value between *min* and *max*

#### Example

```javascript
osc(40,.02,rand(0,3))
  .rotate(PI/4)
  .out(o0)
  // Shows an oscillator, where the RGB offset will be a different random number between 0 and 3 every time you evaluate it.
```

### sin

`sin( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.sin()`, with the adition of *amp* and *freq* arguments for faster coding.

#### Example

![Example of sin](https://i.imgur.com/ZUyJtml.gif)

```javascript
solid_(darkgray)
  .layer(circle().scrollX(()=>sin(time,.25,5)))
  .out(o0)
  // Shows a white circle oscillating over the screen
```

### cos

`cos( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.cos()`, with the adition of *amp* and *freq* arguments for faster coding.

#### Example

![Example of cos](https://i.imgur.com/vUaANHy.gif)

```javascript
solid_(darkgray)
  .layer(circle().scrollX(()=>sin(time,.25,5)))
  .diff(circle().scrollX(()=>cos(time,.25,2.5)))
  .out(o0)
```

### tan

`tan( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.tan()`, with the adition of *amp* and *freq* arguments for faster coding.

#### Example

![Example of tan](https://i.imgur.com/ehQMm9T.gif)

```javascript
solid_(darkgray)
  .layer(circle(()=>tan()))
  .out(o0)
```

### saw

`saw( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Emulates a [sawtooth wave](https://en.wikipedia.org/wiki/Sawtooth_wave)

#### Example

![Example of saw](https://i.imgur.com/rKUTq5c.gif)

```javascript
solid_(darkgray)
  .layer(circle().scrollX(()=>saw(time,.5)))
  .out(o0)
  // Shows a white circle going from left to right in a cycle
```

### bounce

`bounce( x, amp, freq, bouncing )`

* `t` :: float (default `time`)
* `amp` :: float (default `3`)
* `freq` :: float (default `1`)
* `bouncing` :: float (default `8`)

Emulates [the bouncing of a ball](https://www.google.com/search?sxsrf=ALeKk02xWd8c8IkvCRWGJmoBUOZprderXw%3A1588634336996&ei=4KKwXqmhPM285OUP0462uAE&q=y%3D%28e%5E-x%29*abs%281cos%2816x%29%29&oq=y%3D%28e%5E-x%29*abs%281cos%2816x%29%29&gs_lcp=CgZwc3ktYWIQAzoECAAQR1DTNljEOWDObGgAcAJ4AIABkAGIAYACkgEDMC4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwipkdaKrJvpAhVNHrkGHVOHDRcQ4dUDCAw&uact=5) in a cyclic manner.
The ***bouncing*** argument lets you adjust how much the ball bounces inside the cycle.

#### Example

![Example of bounce](https://i.imgur.com/PmAmXDM.gif)

```javascript
solid_(darkgray)
  .layer(horiz(.02,red,0.05,1,-.15))
  .layer(circle().scrollY(()=>bounce()))
  .out(o0)
  // Shows a white circle bouncing over a red line
```

## Ranged Oscillators

This are some of the oscillators just seen, with the ability of defining their range.

### sinrange

`sinrange( x, min, max, freq )`

* `x` :: float (default `time`)
* `min` :: float (default `0`)
* `max` :: float (default `1`)
* `freq` :: float (default `1`)

Ranged version of `sin()`. Uses *min* and *max* instead of amplitude.

#### Example

```javascript
solid_(red)
  .add(osc(()=>sinrange(time,20,60),0))
  .out(o0)
  // An oscillator whose frequencty changes from 20 to 60 added to a red background
```

### cosrange

`cosrange( x, min, max, freq )`

* `x` :: float (default `time`)
* `min` :: float (default `0`)
* `max` :: float (default `1`)
* `freq` :: float (default `1`)

Ranged version of `cos()`. Uses *min* and *max* instead of amplitude.

#### Example

```javascript
solid_(red)
  .add(osc(()=>sinrange(time,20,60),0))
  .diff(osc(()=>cosrange(time,30,70),0).color_(purple))
  .out(o0)
  // Overlaping oscillators with frequency changes
```

### sawrange

`sawrange( x, amp, freq )`

* `x` :: float (default `time`)
* `min` :: float (default `0`)
* `max` :: float (default `1`)
* `freq` :: float (default `1`)

Ranged version of `saw()`. Uses *min* and *max* instead of amplitude.

#### Example

```javascript
solid_(olive)
  .layer(star(.8,()=>sawrange(time,5,7,.2)))
  .out(o0)
  // A white 5 point star that adds 2 points over time, in a cyclic manner, over a olive background
```

---

# Interactivity

## Mouse interactivity

Antlia allows you to easily make use of the position of the mouse and the event of clicking over the page.

### mouseX

`mouseX` `()=>mouseX()/2`

mouseX returns the relative position of the mouse over the horizontal axis (0.5 full left, 0.5 full right). Note that you don't need to use the `()=>` notation to use it **unless** you want to make operations to the value. Then you should use it as seen above.

#### Example

![Example of mouseX](https://i.imgur.com/xRC2gvH.gif)

```javascript
solid_(black)
  .layer(circle(.1,white,0.01,1,mouseX))
  .out(o0)
  // A white circle that moves horizontally with your cursor
```

### mouseXOffset

`mouseXOffset` :: float (default `-.0135`)

There's always a little offset when using the mouse, change the value of this variable if you need to make it precise.

### mouseY

`mouseY` `()=>mouseY()/2`

mouseY returns the relative position of the mouse over the vertical axis (0.5 full left, 0.5 full right). Note that you don't need to use the `()=>` notation to use it **unless** you want to make operations to the value. Then you should use it as seen above.

#### Example

![Example of mouseY](https://i.imgur.com/Zkxr2oC.gif)

```javascript
solid_(black)
  .layer(circle(.1,white,0.01,1,mouseX,mouseY))
  .out(o0)
  // A white circle that follows your cursor
```

### mouseYOffset

`mouseXOffset` :: float (default `-.0253`)

There's always a little offset when using the mouse, change the value of this variable if you need to make it precise.

### click

`()=>click`

click is a variable that is 0, and changes to 1 while you're pressing the click button on your mouse.

#### Example

[**GIF: Example of click**](https://i.imgur.com/i8kohUz.mp4)

```javascript
osc(40,.1,1)
  .modulate(osc(18))
  .modulateScale(src(o0).rotate(-.1),()=>click)
  .out(o0)
  //feedback will only occur while clicking
```

### Mouse interactivity example

#### Draw inside Hydra:

![draw inside hydra](https://i.imgur.com/GHLqqH8.gif)

```
solid()
  .add(circle(.03).scroll(mouseX,mouseY),()=>click)
  .add(o0)
  .out(o0)
```

## Keyboard interactivity

Antlia allows you to use the arrow keys to interact with your code. You can do it in two ways: You can use the different arrow keys the same as you can use [click](#click), changing values from 0 to 1 while pressing. Or you can also change the value of an [axis](#keyy). For example, pressing the up arrow key will increase the value of the [key.y axis](#keyy), while the down arrow key will decrease it. Same goes for left and right with the [key.x axis](#keyx), respectively.

Shoutout to [JuanFdS](https://github.com/JuanFdS) from [CLiC](https://colectivo-de-livecoders.gitlab.io/) for his JavaScript knowledge that made the axis function possible <3.

### key.up

`()=>key.up`

key.up is a variable that is 0, and changes to 1 while you're pressing the up arrow key on your keyboard.

#### Example

```javascript
circle(.6).diff(osc(8))
    .modulateScrollY(src(o0).scale(.98),()=>key.up)
    .out(o0)
  //feedback will only occur while pressing the up arrow key
```

### key.down

`()=>key.down`

key.down is a variable that is 0, and changes to 1 while you're pressing the down arrow key on your keyboard.

#### Example

```javascript
circle(.6).diff(osc(8))
    .modulateScrollY(src(o0).scale(.98),()=>-key.down)
    .out(o0)
  //feedback will only occur while pressing the down arrow key
```

### key.left

`()=>key.left`

key.left is a variable that is 0, and changes to 1 while you're pressing the left arrow key on your keyboard.

#### Example

```javascript
circle(.6).diff(osc(8))
      .modulate(src(o0),()=>key.left/4)
      .out(o0)
  //feedback will only occur while pressing the left arrow key
```

### key.right

`()=>key.right`

key.right is a variable that is 0, and changes to 1 while you're pressing the right arrow key on your keyboard.

#### Example

```javascript
circle(.6).diff(osc(8))
      .modulate(src(o0),()=>-key.right/4)
      .out(o0)
  //feedback will only occur while pressing the right arrow key
```

### initKeyControl

`initKeyControl()`

To save resources, the [key.y](#keyy) and [key.x](#keyx) axes discussed [above](#keyboard-interactivity) will only start working as expected if you first evaluate this function. Make sure not to evaluate this more than once, cause it will double the effect + take more resources of your pc.

#### Note

Remember you can evaluate the following to reset the values of the axes, or put it above your block of code so that they reset everytime you evaluate it. This can come in handy.

```javascript
key.x = 0
key.y = 0
```

### key.y

`()=>key.y`

key.y is an [axis](#keyboard-interactivity), its value will increase when you press the up arrow key, and decrease when pressing the down arrow key.

#### Example

```javascript
key.x = 0; key.y = 0;
circle(.6).diff(osc(8,.1,1))
      .modulateScrollY(src(o0),()=>key.y)
      .out(o0)
  // control the feedback with your up and down arrow keys:
```

### key.x

`()=>key.x`

key.x is an [axis](#keyboard-interactivity), its value will increase when you press the left arrow key, and decrease when pressing the right arrow key.

#### Example

```javascript
key.x = 0; key.y = 0;
circle(.6).diff(osc(8,.1,1).hue(()=>key.y))
  .modulate(src(o0),()=>key.x)
  .out(o0)
  // control the feedback with your left and right arrow keys, while controlling the hue with the up and down arrow keys.
```

### key.sensibility

`key.sensibility` :: default `0.02`

Change this value to adjust how big of a change pressing the arrow keys makes.

## Examples using axes

### Moving objects in the screen

![moving objects 1](https://i.imgur.com/EEL2NkL.gif)

```javascript
key.x = 0; key.y = 0;
solid_(darkred)
    .layer(star(.2,5,white).scroll(()=>key.x,()=>key.y))
    .out(o0)
    // move the star around the screen with your arrow keys
```

![moving objects 2](https://i.imgur.com/3ZYaBz2.gif)

```javascript
key.x = 0; key.y = 0;
solid_(darkblue).hue(()=>key.x*2).layer(grid(24,12,.12))
    .modulateScale(circle(.2,white,.8).scroll(()=>key.x,()=>key.y),-.5)
    .out(o0)
    // move the deformation effect around the screen with your arrow keys
```

### Controlling variables

[**GIF: Controlling variables with the arrow keys**](https://i.imgur.com/VRgeRVf.mp4)

```javascript
key.x = 0; key.y = 0;
osc(50,0.07,2).luma(.4)
    .hue(()=>key.y)
    .modulateRotate(o0,()=>key.x)
    .rotate(()=>key.x)
    .out(o0)
  // control the sketch with your arrow keys
```
