## Geometric shapes

### square

`square( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)

Shows a perfect square on the screen. Try to remember these arguments because they are found on every other shape.

#### Example

```javascript
osc()
  .layer(square(.4))
  .out(o0)
  // Shows a square over an osc()
```

### circle

`circle( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.007`)

Shows a perfect circle on the screen.

#### Example

```javascript
voronoi()
  .layer(circle(.4))
  .layer(circle(.7).color(1,1,1,[0,1].smooth()))
  .out(o0)
  // Shows a blue circle pulsating over a red circle over a voronoi background.
```

### triangle

`triangle( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)

Shows an equilateral triangle on the screen. Note that on Hydra, it can be difficult to have a triangle centered on the screen depending it size, Antlia will take care of that for you.

#### Example

```javascript
solid()
  .layer(triangle(.5))
  .out(o0)
```

### rectangle

`rectangle( s, ratio, smooth )`

* `s` (size) :: float (default `.3`)
* `ratio` :: Array (default `[1,1]`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)

Shows a rectangle on the screen with a specified ratio.

#### Example

```javascript
solid(0.2,0.2,0.2)
  .layer(rectangle(.5,[2,1]).color(1, 0, 0.5))
  .diff(rectangle(.6,[4,5]))
  .out(o0)
  // Shows a 2:1 pink rectangle over a dark grey background. While that is being affected by a 4:5 rectangle.
```
**Note:** The second element of the *ratio* Array can be a function (i.e. a sine wave), but not the other way around. At least that's how it's working now.

## Strips

Strips are lines that go all across the screen.

### horiz

`horiz( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `.0007`)

Shows a horizontal line on the screen. Note that the 'x' argument from before is removed, since it's no longer needed.

#### Example

```javascript
solid(0.1, 0.8, 1)
  .layer(horiz(.4))
  .layer(star(.4,32).color(1, 0.75, 0))
  .out(o0)
  // The flag of Argentina
```

### vert

`vert( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `.0007`)

Shows a vertical line on the screen. Note that the 'y' argument from before is removed, since it's no longer needed.

#### Example

```javascript
solid(.1,.3,.75)
  .layer(horiz(.25))
  .layer(vert(.25*screenRatio).scrollX(.1))
  .layer(horiz(.15).color(1,0,0))
  .layer(vert(.15*screenRatio).scrollX(.1).color(1,0,0))
  .out(o0)
  // The flag of Iceland
```
See how if you want a vertical strip to have the exact same thickness as a horizontal one, you can multiply the size value by the [screenratio](#screenratio).

### leftdiag

`leftdiag( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)

Shows a diagonal line on the screen that goes from the upper left part of the screen to the lower right.

#### Example

```javascript
solid()
  .add(
    osc(60,.1,2)
      .modulateRotate(osc(20)).modulate(o0)
    .mult(leftdiag(.2)))
  .out(o0)
  // Shows a diagonal strip with a colourish feedback loop inside of it.
```

### rightdiag

`rightdiag( s, smooth )`

* `s` (size) :: float (default `.3`)
* `smooth` (amount of diffusion at the edges) :: float (default `0`)

Shows a diagonal line on the screen that goes from the upper right part of the screen to the lower left.

#### Example

```javascript
solid(0, 0.5, 1)
  .layer(leftdiag(.15)).layer(rightdiag(.15))
  .out(o0)
  // The scottish flag.
```

## Quadrants

Quadrants are the different parts of the screen you get by dividing it into 4 equal pieces.

### firstquad

`firstquad( r, g, b, a )`

Shows the upper left quadrant.

### secondquad

`secondquad( r, g, b, a )`

Shows the lower left quadrant.

### thirdquad

`thirdquad( r, g, b, a )`

Shows the upper right quadrant.

### fourthquad

`fourthquad( r, g, b, a )`

Shows the lower right quadrant.

### quad

`quad( n, r, g, b, a )`

Shows the nth quadrant.

### Example

```javascript
solid()
  .layer(voronoi().shift().mask(firstquad()))
  .layer(secondquad(1,0,0))
  .layer(thirdquad(0.75, 0.75, 1))
  .layer(osc().diff(osc().rotate()).mask(fourthquad()))
  .out(o0)
  // Shows something different on every part of the screen
```

## Extra Sources

### star

`star( s, v, smooth )`

* `s` (size) :: float (default `.3`)
* `v` (vertices) :: float (default `5`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.007`)

Shows a star of *v* vertices. Know that *v* can recieve a function (i.e. [sawrange](#sawrange)), but be careful not to use a number between -2 and 2 (exclusive).

#### Example

```javascript
solid(.9,0,0)
  .layer(star(1,5).color(1, 0.75, 0))
  .layer(star(.75,5).color(.9,0,0))
  .out(o0)
  // Soviet Star.
```

### grid

`grid( x, y, b, smooth )`

* `x` (columns) :: float (default `8`)
* `y` (rows) :: float (default `4`)
* `b` (boldness) :: float (default `0.05`)
* `smooth` (amount of diffusion at the edges) :: float (default `0.001`)

Shows a grid of *x* columns and *y* rows.

#### Example

```javascript
solid(.2,.2,.2)
  .layer(grid(16,8,.1))
  .modulateScale(circle(.32,1),-.4)
  .out(o0)
  // Show a grid with a strong rectilinean deformation
```