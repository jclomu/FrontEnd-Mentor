document.addEventListener("DOMContentLoaded", function () {
    const ratingButtons = document.querySelectorAll(".boton");
    const ratingMessage = document.querySelector(".thankyou-state__result--selected");
    const submitButton = document.getElementById("rating-state__submit");
    const ratingState = document.getElementById("rating-state");
    const thankyouState = document.getElementById("thankyou-state");

  
    ratingButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const rating = index + 1;
            ratingMessage.textContent = rating;
            
            ratingButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");

            if (rating > 0) {
                submitButton.removeAttribute("disabled");
            };
        });
    });

    submitButton.addEventListener("click", function () {
        // Verificar si el botón de envío está habilitado antes de realizar la acción
        if (!submitButton.hasAttribute("disabled")) {
          ratingState.classList.remove("active");
          thankyouState.classList.add("active");
        }
    });
});

