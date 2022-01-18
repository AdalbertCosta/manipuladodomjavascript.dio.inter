//Metódos

//Estrutura
// html - head - tag - id - classe

//Selecionando os elementos de uma página

document.getElementById('titulo')
// <h1 id="titulo">Miha página</h1>

document.getElementbyTagName('li')
/*
[
  <li>Projeto 1</>
  <li>Projeto 2</>
  <li>Projeto 3</>
]
*/

document.getElementsByClassName('textos');

document.querySelectorAll('.primeira-classe .segunda.classe');


document.querySelectorAll('li .opcao');


//Adicionando e deletando elementos

document.createElement(element) // Cria um novo elemento HTML.
document.removeChild(element) // remove um elemento.
document.appendChild(element) // Adiciona um elemento.
document.replaceChild(new,old) // substitui um elemento.
