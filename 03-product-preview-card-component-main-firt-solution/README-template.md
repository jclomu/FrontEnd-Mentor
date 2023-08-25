# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop](./screenshoot/Producto Preview Card Desktop Screen Shot.jpg)
![Mobile](./screenshoot/Producto Preview Card Mobile Screen Shot.jpg)

## My process

The first thing I did was analyze the composition comparing similarities between the mobile version and the desktop version, with this I defined the HTML structure and the classes.

Later I styled it to match the mobile design and later I made the necessary adaptations to make it responsive to desktops according to the included design.

At the end of the css I added the hover to change the color of the button with a small transition to make it more dynamic.

I noticed that the style guide had 2 images of the same product: one for the desktop and mobile versions respectively, so I decided to use an eventListener with JavaScript to detect the screen size. This eventListener calls a function that changes the "src" of the <img> depending on the size of the screen.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned to change html parameters from javascript

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Cambio de Imagen con JavaScript</title>
</head>
<body>
  <div class="tarjeta">
    <img id="imagenTarjeta" src="" alt="Imagen de la tarjeta">
    <div class="contenido">Contenido de la tarjeta</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
```js
// Obtén una referencia a la imagen de la tarjeta
const imagenTarjeta = document.getElementById("imagenTarjeta");

// Función para verificar el tamaño de la pantalla y cambiar la imagen
function verificarTamañoPantalla() {
  if (window.innerWidth < 768) {
    imagenTarjeta.src = "imagen-movil.jpg";
  } else {
    imagenTarjeta.src = "imagen-desktop.jpg";
  }
}

// Ejecuta la función al cargar la página
verificarTamañoPantalla();

// Agrega un eventListener para el evento resize de la ventana
window.addEventListener("resize", verificarTamañoPantalla);

```

### Continued development

I will start to use more javascript in my projects to better understand how it works.

I also want to use more transitions to give more life to my creations.

## Author

- Frontend Mentor - [@jclomu](https://www.frontendmentor.io/profile/jclomu)

