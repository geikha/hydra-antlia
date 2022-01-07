# Maths

## Constants

### screenRatio

`screenRatio = window.innerHeight/window.innerWidth`

Very self-descriptive, multiply the X scale of something to make it perfectly square.

#### Example

[**GIF: Example of screenRatio**](https://i.imgur.com/23SNMN0.gif)

```javascript
osc()
  .diff(shape(4).scale(1,screenRatio))
  .out(o0)
```

### PI | pi

`PI = Math.PI`
`pi = Math.PI`

Shorter version of 'Math.PI'

#### Example

[**GIF: Example of PI**](https://i.imgur.com/Xrw7LXd.mp4)

```javascript
osc()
  .diff(shape(4).scale(1,screenRatio))
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

### sin

`sin( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.sin()`, with the adition of *amp* and *freq* arguments for faster coding.

### cos

`cos( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.cos()`, with the adition of *amp* and *freq* arguments for faster coding.

### tan

`tan( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Shorter version of `Math.tan()`, with the adition of *amp* and *freq* arguments for faster coding.

### saw

`saw( x, amp, freq )`

* `x` :: float (default `time`)
* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

Emulates a [sawtooth wave](https://en.wikipedia.org/wiki/Sawtooth_wave)

### bounce

`bounce( x, amp, freq, bouncing )`

* `t` :: float (default `time`)
* `amp` :: float (default `3`)
* `freq` :: float (default `1`)
* `bouncing` :: float (default `8`)

Emulates [the bouncing of a ball](https://www.google.com/search?sxsrf=ALeKk02xWd8c8IkvCRWGJmoBUOZprderXw%3A1588634336996&ei=4KKwXqmhPM285OUP0462uAE&q=y%3D%28e%5E-x%29*abs%281cos%2816x%29%29&oq=y%3D%28e%5E-x%29*abs%281cos%2816x%29%29&gs_lcp=CgZwc3ktYWIQAzoECAAQR1DTNljEOWDObGgAcAJ4AIABkAGIAYACkgEDMC4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwipkdaKrJvpAhVNHrkGHVOHDRcQ4dUDCAw&uact=5) in a cyclic manner.
The ***bouncing*** argument lets you adjust how much the ball bounces inside the cycle.

## Timed Oscillators

Same as above but without the need of typing "time" to the input of the oscillators. They are all named as above but with a t next to it.

`sin(time,1,1) == sint(1,1)`

### sint

`sint( amp, freq )`

* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

### cost

`cost( amp, freq )`

* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

### tant

`tant( amp, freq )`

* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

### sawt

`sawt( amp, freq )`

* `amp` :: float (default `1`)
* `freq` :: float (default `1`)

### bouncet

`bouncet( amp, freq, bouncing )`

* `amp` :: float (default `3`)
* `freq` :: float (default `1`)
* `bouncing` :: float (default `8`)

## Ranged Oscillators

These are some of the oscillators just seen, with the ability of defining their range.

### sinrange

`sinrange( x, min, max, freq )`

* `x` :: float (default `time`)
* `min` :: float (default `0`)
* `max` :: float (default `1`)
* `freq` :: float (default `1`)

Ranged version of `sin()`. Uses *min* and *max* instead of amplitude.

#### Example

```javascript
solid(.8,0,0)
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

### sawrange

`sawrange( x, amp, freq )`

* `x` :: float (default `time`)
* `min` :: float (default `0`)
* `max` :: float (default `1`)
* `freq` :: float (default `1`)

Ranged version of `saw()`. Uses *min* and *max* instead of amplitude.

### osctorange

`osctorange( osc, min, max )`

* `osc` :: float
* `min` :: float
* `max` :: float

Takes any value in a range from [-1,1] and transforms it to a given range. This is what the ranged oscillators seen above use. You can use this if you are operating with various oscillators and want to range them. It won't always work well because it expects values from [-1,1] but it's useful in some scenarios.