# Sliders.js
### *Simple and beautiful sliders in pure JavaScript!*

Sliders.js allows you to add practical, value sliders as inputs to your HTML forms.
**Check [live demo](http://webly3d.net/static/Sliders.js/slider.html).**

> ![Screenshot](images/screenshot2.png)

## Features

### 1. Easy to setup

First **download** files: [sliders.js](https://github.com/BlueManCZ/Sliders.js/blob/master/sliders.js) and [slider.css](https://github.com/BlueManCZ/Sliders.js/blob/master/slider.css).

Then **include** these files into your HTML file:
##### JavaScript in <body\>
```html
<script type="text/javascript" src="sliders.js"></script>
```
##### CSS in <head\>
```html
<link rel=stylesheet href="slider.css">
```
### 2. Easy to use
You can easily create slider as HTML input.
```html
<input type="text" class="slider1" name="value1" text="Value 1:">
```

**Important!** Each slider must have same class "slider1" and different name attribute!

### 3. Customizable

There are many attributes, which can modify slider's functionalities.

**Here is list of them:**

<table>
  <tr>
    <th>Attribute
    <th>Value
    <th>Description
    <th>Default
  </tr>
  <tr>
    <td><b>text
    <td>text
    <td>Visible slider title
    <td>-
  </tr>
  <tr>
    <td><b>min
    <td>number
    <td>Lower boundary of slider, must be lower than max
    <td>0
  </tr>
  <tr>
    <td><b>max
    <td>number
    <td>Upper boundary of slider, must be higher than min
    <td>100
  </tr>
  <tr>
    <td><b>value
    <td>number
    <td>Default value of slider
    <td>min
  </tr>
  <tr>
    <td><b>round
    <td>number
    <td>Decimal places of value rounding
    <td>0
  </tr>
  <tr>
    <td><b>animate
    <td>yes / no
    <td>Enable or disable slider animation
    <td>yes
  </tr>
  <tr>
    <td><b>smooth
    <td>yes / no
    <td>Smooth movement of small range slider
    <td>no
  </tr>
  <tr>
    <td><b>color
    <td>color
    <td>Specify fill color
    <td>#7EF4FF
  </tr>

</table>

**Use attributes in input tag:** (example)
```html
<input type="text" class="slider1" name="value1" text="Value 1:" min="10" max="20" value="15" round="2">
```

You can of course use the default input attributes as **id**, **autocomplete**, **title**, etc.
