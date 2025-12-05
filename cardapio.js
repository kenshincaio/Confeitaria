// Função que cria o item no HTML (mantém a sua)
function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}


// 🔥 NOVO: Buscar o cardápio na API
fetch("https://confeitaria-api-uqku.onrender.com/cardapio")
    .then(response => response.json())
    .then(dados => {
        // "dados" deve ser uma lista de produtos
        dados.forEach(item => {
            criarItemCardapio(item.nome, item.descricao, item.foto)
        })
    })
    .catch(erro => {
        console.error("Erro ao consultar API:", erro)
    })
