document.addEventListener('DOMContentLoaded', function() { // Selecciona el contenedor de categorías y la flecha
    
    const categorias = document.querySelector('.biblioteca-categorias'); // Selecciona la flecha para desplazar
    const flechaDerecha = document.querySelector('.categorias-flecha'); // Añade un evento de clic a la flecha
    const flechaIzquierda = document.querySelector('.categorias-flecha-izquierda');
    flechaIzquierda.style.display = 'none'; // Oculta la flecha izquierda inicialmente
    categorias.addEventListener('scroll', function() { // Muestra u oculta la flecha izquierda según el desplazamiento

        if (categorias.scrollLeft > 0) {
            flechaIzquierda.style.display = 'inline-block';
        } else {
            flechaIzquierda.style.display = 'none';
        }
    });



    flechaDerecha.addEventListener('click', function() { // Desplaza el contenedor de categorías hacia la derecha
        categorias.scrollBy({
            left: 120, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    flechaIzquierda.addEventListener('click', function() { // Desplaza el contenedor de categorías hacia la izquierda
        categorias.scrollBy({
            left: -120, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });
}); 


    //MIX
    const mix = document.querySelector('.mix-contenedor'); // Selecciona la flecha para desplazar
    const flechaMixDerecha = document.querySelector('.mix-flecha-derecha'); // Añade un evento de clic a la flecha
    const flechaMixIzquierda = document.querySelector('.mix-flecha-izquierda');

    
    flechaMixIzquierda.style.display = 'none'; // Oculta la flecha izquierda inicialmente
    flechaMixDerecha.style.display = mix.scrollWidth>mix.clientWidth ? 'inline-block' : 'none';


    mix.addEventListener('scroll', function() {
  // Mostrar flecha izquierda si hay scroll hacia atrás
  if (mix.scrollLeft > 0) {
    flechaMixIzquierda.style.display = 'inline-block';
  } else {
    flechaMixIzquierda.style.display = 'none';
  }

  // Mostrar flecha derecha si aún hay más contenido a la derecha
  if (mix.scrollLeft + mix.clientWidth < mix.scrollWidth) {
    flechaMixDerecha.style.display = 'inline-block';
  } else {
    flechaMixDerecha.style.display = 'none';
  }
});

    flechaMixDerecha.addEventListener('click', function() { // Desplaza el contenedor de categorías hacia la derecha
        mix.scrollBy({
            left: 200, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    flechaMixIzquierda.addEventListener('click', function() { // Desplaza el contenedor de categorías hacia la izquierda
        mix.scrollBy({
            left: -200, // Ajusta el valor según el ancho de tus botones
            behavior: 'smooth' // Desplazamiento suave
        });
    });