//Element.classList

// - Exemplo

<div id="meu elemento" class="classe">
 
</div>

const meuElemento = document.getElementById("meu elemento")

meuElemento.classList.add("novo-estilo");
//adiciona a classe "meu estilo"

meuElemento.classList.remove("classe")
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
// Adiciona a classe "dark-mode" caso ela não faça da lista e remove ela caso faça.


//RESULTADO
<div id="meu-elemento" class="novo-estilo darl=k-mode">
</div>


