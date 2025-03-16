document.addEventListener("DOMContentLoaded", function () {
    var nombreElement = document.getElementById("nombre");
    var lineaCargaElement = document.getElementById("lineaCarga");
    var huecoElement = document.getElementById("hueco");

    nombreElement.style.display = "block";

    nombreElement.addEventListener("animationend", function () {
        // Establecer el ancho de la línea de carga gradualmente
        lineaCargaElement.style.width = "100%";

        // Después de que la animación de la línea de carga esté completa
        setTimeout(function () {
            // Establecer la altura del hueco gradualmente
            huecoElement.style.height = "100%";

            // Redirigir a mainPage.html después de que el hueco esté completo
            setTimeout(function () {
                window.location.href = "MainPage/mainPage.html";
            }, 2000); // 2000 ms es la duración de la animación de carga
        }, 2000); // 2000 ms es la duración de la animación de la línea de carga
    });
});
 