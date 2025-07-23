document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el contenedor de categorías y la flecha
    const categorias = document.querySelector('.biblioteca-categorias');
    // Selecciona la flecha para desplazar
    const flechaDerecha = document.querySelector('.categorias-flecha');
    // Añade un evento de clic a la flecha
    const flechaIzquierda = document.querySelector('.categorias-flecha-izquierda');

    flechaIzquierda.style.display = 'none'; // Oculta la flecha izquierda inicialmente
    categorias.addEventListener('scroll', function() {
        // Muestra u oculta la flecha izquierda según el desplazamiento
        if (categorias.scrollLeft > 0) {
            flechaIzquierda.style.display = 'inline-block';
        } else {
            flechaIzquierda.style.display = 'none';
        }
    });



    flechaDerecha.addEventListener('click', function() {
        // Desplaza el contenedor de categorías hacia la derecha
        categorias.scrollBy({
            left: 120, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    flechaIzquierda.addEventListener('click', function() {
        // Desplaza el contenedor de categorías hacia la izquierda
        categorias.scrollBy({
            left: -120, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });
}); 