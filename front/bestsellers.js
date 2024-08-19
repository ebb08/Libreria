
const libros = [
  {
    titulo: "La casa de los espíritus",
    descripcion: "Una saga familiar que abarca varias generaciones de la familia Trueba en un país latinoamericano no especificado, mezclando realidad y elementos fantásticos.",
    autor: "Isabel Allende",
    imagen: "./img/la-casa.jpg"
  },
  {
    titulo: "El prisionero del cielo",
    descripcion: "Una novela de intriga y misterio que nos transporta a la Barcelona de los años 50, donde Daniel Sempere descubre un misterioso libro en la librería de su padre.",
    autor: "Carlos Ruiz Zafón",
    imagen: "./img/el-prisionero.jpg"
  },
  {
    titulo: "Don Quijote de la Mancha",
    descripcion: "La historia de un hidalgo que se vuelve loco leyendo libros de caballerías y decide salir en busca de aventuras junto a su fiel escudero, Sancho Panza.",
    autor: "Miguel de Cervantes",
    imagen: "./img/don-quijote.jpg"
  },
  {
    titulo: "El laberinto de los espíritus",
    descripcion: "Una historia de pasiones, intrigas y aventuras. En esta novela se cierran los ciclos de La Sombra del Viento, El Juego del Ángel y El Prisionero del Cielo.",
    autor: "Carlos Ruiz Zafón",
    imagen: "./img/el-laberinto.jpg"
  }
];


// Función para generar cada tarjeta de libro
function generarLibro(libro) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  const imagen = document.createElement('img');
  imagen.src = libro.imagen;
  imagen.alt = libro.titulo;

  const titulo = document.createElement('h3');
  titulo.textContent = libro.titulo;

  const descripcion = document.createElement('p');
  descripcion.textContent = libro.descripcion;

  const autor = document.createElement('p');
  autor.textContent = `Autor: ${libro.autor}`;

  bookCard.appendChild(imagen);
  bookCard.appendChild(titulo);
  bookCard.appendChild(descripcion);
  bookCard.appendChild(autor);

  return bookCard;
}

// Función para inicializar los libros en la página
function inicializarLibros() {
  const bookGrid = document.getElementById('bookGrid');
  libros.forEach(libro => {
    const libroElemento = generarLibro(libro);
    bookGrid.appendChild(libroElemento);
  });
}

// Llamar a la función de inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', inicializarLibros);
