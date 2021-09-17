# Drum Kit Game

This is a simple Javascript game where the user can play the sounds of a drum kit. 

## Table of contents

- [Overview](#overview)
  - [The Objective](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The Objective

Users should be able to:

- Play the curresponding sound of the drum kits by clicking on the images
- Play the curresponding sound of the drum kits by typing on the curresponding keyboard keys


### Links

- Live Site URL: [Live](https://dannyguzman31.github.io/Sign-up-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript


### What I learned

In this project, I learned to add images using CSS and also I learned playing sound using JavaScript through the Audio method.

```css
.w {
background-image: url("images/tom1.png");
}
```
```js
 switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3'); // plays sound
    tom1.play();
      break;
```

## Author

- Website - [Daniel Guzman](https://guzdeveloper.com)
- Linkedin - [@dguzman31](https://www.linkedin.com/in/dguzman31/)
