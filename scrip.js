const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }

}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}">x </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}




document.addEventListener("DOMContentLoaded", function() {
  const abrirGaleria = document.getElementById("abrirGaleria");
  const cerrarGaleria = document.getElementById("cerrarGaleria");
  const linkInicio = document.getElementById("linkInicio");
  const galeria = document.getElementById("Galeriaoculta");
  const slides = document.querySelectorAll(".slide");
  const navLinks = document.querySelectorAll(".links a");

  let currentIndex = 0;
  let autoSlideInterval;
  
  const secciones = document.querySelectorAll("main > div, section");

  function mostrarGaleria() {
    galeria.style.display = "block";
    setTimeout(() => galeria.classList.add("activa"), 10);
    secciones.forEach(sec => sec.style.display = "none");
    document.body.classList.add("no-scroll");
    iniciarAutoSlide();
  }

  function ocultarGaleria() {
    galeria.classList.remove("activa");
    setTimeout(() => {
      galeria.style.display = "none";
      secciones.forEach(sec => sec.style.display = "");
      document.body.classList.remove("no-scroll");
      detenerAutoSlide();
    }, 600);
  }

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function siguienteSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    mostrarSlide(currentIndex);
  }

  function iniciarAutoSlide() {
    mostrarSlide(0);
    autoSlideInterval = setInterval(siguienteSlide, 4000); 
  }

  function detenerAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  navLinks.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      mostrarSlide(index);
      detenerAutoSlide();
      iniciarAutoSlide();
    });
  });

  abrirGaleria.addEventListener("click", e => {
    e.preventDefault();
    mostrarGaleria();
  });

  cerrarGaleria.addEventListener("click", e => {
    e.preventDefault();
    ocultarGaleria();
  });

  linkInicio.addEventListener("click", e => {
    e.preventDefault();
    ocultarGaleria();
  });
});

const toggleButton = document.getElementById('registro');
const formSection = document.getElementById('registrar');

toggleButton.addEventListener('click', function(event) {
  event.preventDefault();
  formSection.classList.toggle('form-container'); 
});


