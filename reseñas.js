// Datos de las reseñas (simulados como array de objetos)
const reseñas = [
  {
    usuario: "Usuario 1",
    calificación: "★★★★★",
    comentario: "¡Excelente servicio! Muy recomendado.",
    avatar: "./img/usuario.jpg"
  },
  {
    usuario: "Usuario 2",
    calificación: "★★★☆☆",
    comentario: "Bueno, pero podría mejorar en algunos aspectos.",
    avatar: "./img/usuario.jpg"
  },
  {
    usuario: "Usuario 3",
    calificación: "★★★☆☆",
    comentario: "Bueno, pero podría mejorar en algunos aspectos.",
    avatar: "./img/usuario.jpg"
  },
  {
    usuario: "Usuario 4",
    calificación: "★★★☆☆",
    comentario: "Bueno, pero podría mejorar en algunos aspectos.",
    avatar: "./img/usuario.jpg"
  }
];

// Función para generar las reseñas dinámicamente
function generarReseñas() {
  const contenedorReseñas = document.querySelector('.reseñas');

  reseñas.forEach((res) => {
    // Crear elementos HTML para cada reseña
    const reseñaDiv = document.createElement('div');
    reseñaDiv.classList.add('reseña');

    const avatarImg = document.createElement('img');
    avatarImg.src = res.avatar;
    avatarImg.alt = res.usuario;
    avatarImg.classList.add('avatar');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const usuarioH3 = document.createElement('h3');
    usuarioH3.textContent = res.usuario;

    const calificaciónP = document.createElement('p');
    calificaciónP.classList.add('calificación');
    calificaciónP.textContent = res.calificación;

    const comentarioP = document.createElement('p');
    comentarioP.classList.add('comentario');
    comentarioP.textContent = `"${res.comentario}"`;

    // Construir la estructura de la reseña
    infoDiv.appendChild(usuarioH3);
    infoDiv.appendChild(calificaciónP);
    infoDiv.appendChild(comentarioP);

    reseñaDiv.appendChild(avatarImg);
    reseñaDiv.appendChild(infoDiv);

    // Agregar la reseña al contenedor de reseñas
    contenedorReseñas.appendChild(reseñaDiv);
  });
}

// Llamar a la función para generar las reseñas al cargar la página
document.addEventListener('DOMContentLoaded', generarReseñas);
