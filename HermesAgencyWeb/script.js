document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0;
    const intervalTime = 3000; // Tiempo en milisegundos entre cada transición
    let slideInterval; // Variable para almacenar el intervalo
  
    function startSlide() {
      slideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= carouselTrack.children.length) {
          currentIndex = 0; // Vuelve al inicio si llega al final
        }
        updateCarousel();
      }, intervalTime);
    }
  
    function updateCarousel() {
      const itemWidth = carouselTrack.children[0].offsetWidth;
      carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  
    startSlide(); // Inicia la transición automática al cargar la página
  
    prevBtn.addEventListener("click", function () {
      clearInterval(slideInterval); // Detiene la transición automática al hacer clic
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });
  
    nextBtn.addEventListener("click", function () {
      clearInterval(slideInterval); // Detiene la transición automática al hacer clic
      currentIndex = Math.min(currentIndex + 1, carouselTrack.children.length - 1);
      updateCarousel();
    });
  });
  