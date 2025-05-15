fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(dados => {
    const gallery = document.getElementById('poster-gallery');


    if (gallery) {
      dados.forEach(filme => {
        const article = document.createElement('article');
        article.classList.add('image-card');

        const link = document.createElement('a');
        link.href = `detalhes.html?id=${filme.id}`;

        const img = document.createElement('img');
        img.src = filme.imagem;
        img.alt = filme.titulo;

        const titulo = document.createElement('h6');
        titulo.textContent = filme.titulo;

        link.appendChild(img);
        article.appendChild(link);
        article.appendChild(titulo);
        gallery.appendChild(article);
      });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("id");

    if (movieId) {
      const filme = dados.find(f => f.id == movieId);
      const container = document.getElementById('filme-detalhes');


      if (container && filme) {
        container.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}">
      <p><strong>Título:</strong> ${filme.titulo}</p>
      <p><strong>Descrição:</strong> ${filme.descricao}</p>
      <p><strong>Lançamento:</strong> ${filme.data}</p>
      <p><strong>Bilheteria:</strong> ${filme.bilheteria}</p>
    `;
      }
    }

    if (movieId) {
      const filme = dados.find(f => f.id == movieId);
      const container = document.getElementById('detalhes-imagens');


      if (container && filme) {
        container.innerHTML = `
      <img src="${filme.images[0]}" alt="${filme.titulo}">
      <img src="${filme.images[1]}" alt="${filme.titulo}">
      <img src="${filme.images[2]}" alt="${filme.titulo}">
    `;
      }
    }
  })
  .catch(error => console.error('Erro ao buscar dados:', error));

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
  document.getElementById("title1")

}