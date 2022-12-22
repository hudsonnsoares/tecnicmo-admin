//Selecionar Técnico seleciona Tudo
//Selecionar Fase Seleciona a fase + suas habilidades
//Selecionar as habilidades individualmente

//Calcular o custo do curso e mostra no campo Total
//A soma deve calcular apenas os campos selecionados

var todasFases = document.querySelectorAll('.Inputfase');
for(var i=0; i<todasFases.length;i++){
  idFase = todasFases[i].id;
  selecionaId = document.querySelector('#'+idFase);
  seleciona(selecionaId);
}





function seleciona(selecao){
  selecao.addEventListener("click", function(){
    console.log(selecao)
  });
  return selecao;
}