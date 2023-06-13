window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.pageYOffset > 30) {
    // document.getElementById("sticky").classList.add("navbar");
    navbar.classList.add("sticky");
  } else {
    // document.getElementById("sticky").classList.remove("navbar");
    navbar.classList.remove("sticky");
  }

  /* Este código es para mover la barra 
  y cambiar de clase, cuando pasa de 150pxs
  y salga un botón */
  if (window.pageYOffset > 150) {
    document.querySelector('.scroll-up-btn').classList.add('show');
  } else {
    document.querySelector('.scroll-up-btn').classList.remove('show');
  }

});

document.querySelector('.menu-btn').addEventListener('click', function () {
  document.querySelector('.navbar .menu').classList.toggle('active');
  document.querySelector('.menu-btn i').classList.toggle('active');
});


//escribir guión de animacióncon mecanografia 
const options = {
  strings: ["Habilidades", "Comunicación", "Trabajo en equipo", "Paciencia", "Perseverancia", "Curiosidad", "Pasión por aprender", "Pensamiento lógico", "Pensamiento Analítico", "Resolución de problemas"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed = new Typed(".mecanografía", options);


const options_2 = {
  strings: ["Trabajo en equipo", "Paciencia", "Perseverancia", "Curiosidad", "Pasión por aprender", "Habilidades", "Comunicación", "Pensamiento lógico", "Pensamiento Analítico", "Resolución de Problemas"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed_2 = new Typed(".mecanografía_2", options_2);



document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150   // duracion  de tiempo al momento de girar
  });
});



