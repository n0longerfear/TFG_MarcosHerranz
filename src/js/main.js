/*para eliminar la visibilidad del boton continuar al dar al menu de la pagina */
document.addEventListener('DOMContentLoaded', function () {
    const loggedOutLinks = document.querySelectorAll('.nav-link.logged-out');
    const accederMainButton = document.querySelector('.acceder-main');

    loggedOutLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Ocultar el botón acceder-main al hacer clic en el enlace con la clase nav-link.logged-out
            accederMainButton.style.display = 'none';
        });
    });

    // Agregamos un evento de clic al documento para detectar clics en cualquier parte del documento
    document.addEventListener('click', function (event) {
        // Verificamos si el clic no fue en un enlace logged-out
        if (!event.target.closest('.nav-link.logged-out')) {
            // Mostrar el botón acceder-main si no se hizo clic en un enlace logged-out
            accederMainButton.style.display = 'block';
        }
    });
});
