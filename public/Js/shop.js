document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const pagination = document.querySelector('.pagination');
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      track.style.transform = 'translateX(' + translateValue + ')';
      updatePagination();
    }
  
    function updatePagination() {
      pagination.innerHTML = '';
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (index === currentIndex) {
          dot.classList.add('active-dot');
        }
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        pagination.appendChild(dot);
      });
    }
  
    // Actualiza el tamaño de la pista al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateCarousel);
  
    // Inicializa la paginación y el carrusel
    updateCarousel();
  });
  