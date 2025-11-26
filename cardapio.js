alert('oi foi carregado')
// Vamos criar os elementos do HTML com JavaScript dinamicamente

function criarItemCardapio(titulo, descricao, foto){
  const divItemCardapio = document.createElement('div') 
  // colocar a classe
  
  const h3Titulo = document.createElement('h3')
  h3Titulo.textContent = titulo

  const pDescricao = document.createElement('p')
  pDescricao.textContent = descricao
  // adicionar a classe

  const img = document.createElement('img')
  img.src =  foto
}
