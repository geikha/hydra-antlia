# Interactivity

## Mouse interactivity

Antlia allows you to easily make use of the position of the mouse and the event of clicking over the page.

### mouseX

`mouseX` `()=>mouseX()/2`

mouseX returns the relative position of the mouse over the horizontal axis (0.5 full left, 0.5 full right). Note that you don't need to use the `()=>` notation to use it **unless** you want to make operations to the value. Then you should use it as seen above.

### mouseXOffset

`mouseXOffset` :: float (default `-.0135`)

There's always a little offset when using the mouse, change the value of this variable if you need to make it precise.

### mouseY

`mouseY` `()=>mouseY()/2`

mouseY returns the relative position of the mouse over the vertical axis (0.5 full left, 0.5 full right). Note that you don't need to use the `()=>` notation to use it **unless** you want to make operations to the value. Then you should use it as seen above.

#### Example

```javascript
solid()
  .layer(shape(32,.1).luma().scroll(mouseX,mouseY))
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

### key.down

`()=>key.down`

key.down is a variable that is 0, and changes to 1 while you're pressing the down arrow key on your keyboard.

### key.left

`()=>key.left`

key.left is a variable that is 0, and changes to 1 while you're pressing the left arrow key on your keyboard.

### key.right

`()=>key.right`

key.right is a variable that is 0, and changes to 1 while you're pressing the right arrow key on your keyboard.

### initKeyControl

`initKeyControl()`

To save resources, the [key.y](#keyy) and [key.x](#keyx) axes mentioned [above](#keyboard-interactivity) will only start working as expected if you first evaluate this function.

### stopKeyControl

`stopKeyControl()`

Stops the key control.

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
shape(64).diff(osc(8,.1,1))
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
shape(16,.5).diff(osc(8,.1,1).hue(()=>key.y))
  .modulate(src(o0),()=>key.x)
  .out(o0)
  // control the feedback with your left and right arrow keys, while controlling the hue with the up and down arrow keys.
```

### key.sensitivity

`key.sensitivity` :: default `0.02`

Change this value to adjust how big of a change pressing the arrow keys makes.

## Examples using axes

### Moving objects in the screen

```javascript
key.x = 0; key.y = 0;
solid(.5,0,0)
    .layer(shape(16,.1).luma().scroll(()=>key.x,()=>key.y))
    .out(o0)
    // move the circle around the screen with your arrow keys
```

```javascript
key.x = 0; key.y = 0;
solid(0,0,.5).hue(()=>key.x*2).add(osc(),.8)
    .modulateScale(shape(16,.1,.8).scroll(()=>key.x,()=>key.y),-.5)
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

## Wheel interactivity

Another axis controlled by the mouse wheel.

### wheel.y

`()=>wheel.y`

The value of this axis variable will increase when scrolling up and decrease on a scroll down.

### wheel.sensitivity

`wheel.sensitivity` :: default `0.02`

Change this value to adjust how big of a change scrolling the mouse wheel makes.