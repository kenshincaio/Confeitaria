document.addEventListener("DOMContentLoaded", () => {
  // Referência para a div onde o cardápio será inserido
  const cardapioDiv = document.getElementById('cardapio');

  // Função para criar o item do cardápio
  function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div');
    divItemCardapio.className = 'item-cardapio'; // Adicionando a classe

    const h3Titulo = document.createElement('h3');
    h3Titulo.textContent = titulo;

    const pDescricao = document.createElement('p');
    pDescricao.textContent = descricao;
    pDescricao.className = 'descricao'; // Adicionando a classe

    const img = document.createElement('img');
    img.src = foto;
    img.className = 'img-item'; // Adicionando a classe

    // Adicionando os elementos na div mãe
    divItemCardapio.appendChild(h3Titulo);
    divItemCardapio.appendChild(pDescricao);
    divItemCardapio.appendChild(img);

    // Inserindo o item no cardápio
    cardapioDiv.appendChild(divItemCardapio);
  }

  // Requisição para obter o cardápio da API
  fetch('https://confeitaria-api-uqku.onrender.com/cardapio')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(data => {
      // Iterando sobre os dados e criando os itens dinamicamente
      data.forEach(item => {
        criarItemCardapio(item.nome, item.descricao, item.foto);
      });
    })
    .catch(error => {
      cardapioDiv.innerHTML = '<p>Erro ao carregar o cardápio. Tente novamente mais tarde.</p>';
      console.error('Erro ao carregar o cardápio:', error);
    });
});
