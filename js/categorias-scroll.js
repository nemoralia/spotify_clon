document.addEventListener("DOMContentLoaded", function () {
  const categorias = document.querySelector(".biblioteca-categorias");
  const flechaDerecha = document.querySelector(".categorias-flecha");
  const flechaIzquierda = document.querySelector(".categorias-flecha-izquierda");

  if (categorias && flechaDerecha && flechaIzquierda) {
    const syncCategorias = function () {
      flechaIzquierda.style.display = categorias.scrollLeft > 0 ? "inline-block" : "none";
      flechaDerecha.style.display =
        categorias.scrollLeft + categorias.clientWidth < categorias.scrollWidth ? "inline-block" : "none";
    };

    syncCategorias();

    categorias.addEventListener("scroll", syncCategorias);
    window.addEventListener("resize", syncCategorias);

    flechaDerecha.addEventListener("click", function () {
      categorias.scrollBy({ left: 120, behavior: "smooth" });
    });

    flechaIzquierda.addEventListener("click", function () {
      categorias.scrollBy({ left: -120, behavior: "smooth" });
    });
  }

  const wrappers = document.querySelectorAll(".mix-wrapper");

  wrappers.forEach(function (wrapper) {
    const mix = wrapper.querySelector(".mix-contenedor");
    const flechaMixDerecha = wrapper.querySelector(".mix-flecha-derecha");
    const flechaMixIzquierda = wrapper.querySelector(".mix-flecha-izquierda");

    if (!mix || !flechaMixDerecha || !flechaMixIzquierda) return;

    const getScrollStep = function () {
      const firstCard = mix.querySelector(".mix");
      if (!firstCard) return 220;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(mix).columnGap || getComputedStyle(mix).gap || "0");
      const cardPlusGap = cardWidth + gap;

      const visibleCards = Math.max(1, Math.floor(mix.clientWidth / cardPlusGap));
      const cardsPerClick = visibleCards >= 5 ? 2 : 1;

      return Math.round(cardPlusGap * cardsPerClick);
    };

    const syncFlechas = function () {
      flechaMixIzquierda.style.display = mix.scrollLeft > 0 ? "inline-block" : "none";
      flechaMixDerecha.style.display =
        mix.scrollLeft + mix.clientWidth < mix.scrollWidth - 1 ? "inline-block" : "none";
    };

    syncFlechas();

    mix.addEventListener("scroll", syncFlechas);
    window.addEventListener("resize", syncFlechas);

    flechaMixDerecha.addEventListener("click", function () {
      mix.scrollBy({ left: getScrollStep(), behavior: "smooth" });
    });

    flechaMixIzquierda.addEventListener("click", function () {
      mix.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
    });
  });
});