// Ocultar loader después de 2.5 segundos
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, 2500);
});

// Manejo del formulario (solo frontend por ahora)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('yogaForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí normalmente enviarías los datos a un backend o servicio como EmailJS
      alert('¡Gracias por tu inscripción! Pronto nos pondremos en contacto contigo.');
      this.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.getElementById("indicators");

  const cards = Array.from(track.children);
  const totalCards = cards.length;
  const visibleCards = 3; // Mostramos 3 tarjetas
  let currentIndex = 1; // Empezamos en la primera "real" (índice 1 porque hay un clon al inicio)

  // Configuramos el carrusel para que empiece en la primera real
  track.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;

  // Botón siguiente
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      // Si llegamos al final (último clon), volvemos al inicio real
      track.style.transition = "none";
      currentIndex = 1;
      setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
      }, 20);
      return;
    }
    track.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  });

  // Botón anterior
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      // Si estamos en el clon del principio, vamos al final real
      track.style.transition = "none";
      currentIndex = totalCards - visibleCards - 1;
      setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
      }, 20);
      return;
    }
    track.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  });
});