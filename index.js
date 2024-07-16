var elementosDuvida = document.querySelectorAll(".duvida")
/*Aqui está criando uma var (variavel) chamada elementosDuvida pegando todos os elementos(document.querySelectorAll) de uma classe 
chamada duvida (".duvida") que existe no css e html*/
elementosDuvida.forEach(function (duvida){
    /*elementosDuvida - variavel criada lá em cima
    .forEach - criar uma função para cada elemento da variavel mencionada
    (fuction - função
    (duvida) - nome da função*/ 
    duvida.addEventListener ('click', function  () {
    /*aqui o .add.EventListener ouve os eventos e adiciona evento para a função duvida
    Abre parênteses e especifica o evento 
    'click' - evento de clicar
    fuction - função 
    contexto geral - Vai adicionar/executar um evento para cada elemento toda vez que clicar */
     /*duvida.classList.add('fundo-verde')
     Fragmentação:
     duvida - nome da função
     .classList - Lista de classe
      .add - adicionar nome as classes
      ('fundo-verde') Nome das classes 
      contexto geral - o evento acima vai adicionar a classe fundo-verde qaundo algum elemento da classe duvida for clicado. 
      obs: se ja tiverem nome o nome vai aparecer do lado do existente nesse caso: class = duvida fundo-verde */
      duvida.classList.toggle("ativa")
     /*No caso aqui ele vai adicionar a classe "ativa" se ela não existir e tirar se ela existir quando o usuário clicar. */
      
    })
})