document.addEventListener('DOMContentLoaded', function() {
  // Datos de los géneros
  const generos = [
      { titulo: 'Ficción', descripcion: 'Libros de narrativa inventada.' },
      { titulo: 'No Ficción', descripcion: 'Libros basados en hechos reales o informativos.' },
      { titulo: 'Historia', descripcion: 'Libros que narran eventos del pasado.' },
      { titulo: 'Biografía', descripcion: 'Libros que relatan la vida de una persona.' },
      { titulo: 'Ciencia', descripcion: 'Libros sobre ciencia y descubrimientos.' },
      { titulo: 'Autoayuda', descripcion: 'Libros que proporcionan consejos y guías prácticas.' }
  ];

  // Obtener el contenedor de generos
  const generosContainer = document.getElementById('generos-container');

  // Iterar sobre cada género y crear una tarjeta para cada uno
  generos.forEach(genero => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta');

      tarjeta.innerHTML = `
          <h3>${genero.titulo}</h3>
          <p>${genero.descripcion}</p>
      `;

      generosContainer.appendChild(tarjeta);
  });
});
