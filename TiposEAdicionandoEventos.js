//Manipulando DOM
//tipos de eventos

//Eventos do mouse
/* mouseover,mouseout*/

//Eventos de clique
/* click, dbclick */

//Eventos de atualização
/*Change, load*/

//Event listner
/* Diretamente no Javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação. */
const botao = docment.getELementById("meuBotao");

botao.addEventListener("click", outraFuncao);

//Atributo HTML
/* Especifica a função a ser chamada diretamente no elemento HTML.*/

<html>
<body>
<h1> onclick="mudatexto(this)" Clique aqui!</h1>

<script> function mudaTexto(id) {id.innerHTML ="Mudei!";}</script>
</body>
</html>