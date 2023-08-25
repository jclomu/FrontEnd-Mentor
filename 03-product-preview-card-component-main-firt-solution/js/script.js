// Obtén una referencia a la imagen de la tarjeta
const cardImage = document.getElementById("cardImage");

// Función para verificar el tamaño de la pantalla y cambiar la imagen
function screenSizeViewer() {
    if (window.innerWidth < 768) {
      cardImage.src = "./images/image-product-mobile.jpg";
    } else {
      cardImage.src = "./images/image-product-desktop.jpg";
    }
  }

// Ejecuta la función al cargar la página
screenSizeViewer();

// Agrega un eventListener para el evento resize de la ventana
window.addEventListener("resize", screenSizeViewer);