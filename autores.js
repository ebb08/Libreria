document.addEventListener('DOMContentLoaded', function() {
  const autoresContainer = document.getElementById('autoresContainer');
  
  // Limpia el contenedor antes de añadir nuevos autores
  autoresContainer.innerHTML = '';

  // Datos de los autores
  const autores = [
    { nombre: 'Gabriel García Márquez', imagen: './img/gabriel.jpg', genero: 'Realismo mágico' },
    { nombre: 'Laura Restrepo', imagen: './img/laura.jpg', genero: 'Novela' },
    { nombre: 'Piedad Bonnett', imagen: './img/piedad.jpg', genero: 'Poesía' },
    { nombre: 'Fernando Vallejo', imagen: './img/fernando.jpg', genero: 'Novela' }
  ];

  // Generar las tarjetas de autores dinámicamente
  autores.forEach((autor) => {
    const autorDiv = document.createElement('div');
    autorDiv.classList.add('autor');

    const imagen = document.createElement('img');
    imagen.src = autor.imagen;
    imagen.alt = autor.nombre;

    const informacionDiv = document.createElement('div');
    informacionDiv.classList.add('informacion');

    const nombre = document.createElement('h2');
    nombre.textContent = autor.nombre;

    const genero = document.createElement('p');
    genero.textContent = `Género: ${autor.genero}`;

    informacionDiv.appendChild(nombre);
    informacionDiv.appendChild(genero);

    autorDiv.appendChild(imagen);
    autorDiv.appendChild(informacionDiv);

    autoresContainer.appendChild(autorDiv);
  });
});
