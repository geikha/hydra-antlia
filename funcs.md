# Functions : OUTDATED (Will update soon)

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
