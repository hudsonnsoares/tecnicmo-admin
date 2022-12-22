//Selecionar Técnico seleciona Tudo | x |
//Selecionar Fase Seleciona a fase + suas habilidades | |
//Selecionar as habilidades individualmente | |

//Calcular o custo do curso e mostra no campo Total
//A soma deve calcular apenas os campos selecionados

var selecaoTecAdmin = document.querySelector('#TecAdmin');
var todasFases = document.querySelectorAll('.Inputfase');
var todasHabilidades = document.querySelectorAll('.lista input');
var conteudoFase = document.querySelectorAll('.conteudoFase');

selecaoTecAdmin.addEventListener("click", function(){
  selecionaTec(selecaoTecAdmin);
})

for(i = 0; i < todasFases.length; i++){
  idFase = todasFases[i].id;
  selecionaId = document.querySelector('#'+idFase);
  seleciona(selecionaId);
}

function seleciona(selecao){
  selecao.addEventListener("click", function(){
    if(selecao.checked == true){
      for(var i=0;i < conteudoFase.length; i++){
        idHabFase = conteudoFase[i].id;
        selecionaidHabFase = document.querySelectorAll("#" + idHabFase + " .lista input");

        for(var j=0;j < selecionaidHabFase.length;j++){
          console.log(selecionaidHabFase[j]);
          selecionaidHabFase[j].checked = true;
          break;
        }
        
      }
    }
  });
}

function selecionaTec(selecao){
  if(selecao.checked == true){
    for(var i=0; i<todasFases.length;i++){
      idFase = todasFases[i].id;
      selecionaId = document.querySelector("#"+idFase);
      selecionaId.checked = true;
    }
    for(var i=0; i<todasHabilidades.length;i++){
      idHab = todasHabilidades[i].id;
      selecionaIdHabil = document.querySelector("#"+idHab);
      selecionaIdHabil.checked = true;
    }
  }else{
    for(var i=0; i<todasFases.length;i++){
      idFase = todasFases[i].id;
      selecionaId = document.querySelector('#'+idFase);
      selecionaId.checked = false;
    }
    for(var i=0; i<todasHabilidades.length;i++){
      idHab = todasHabilidades[i].id;
      selecionaIdHabil = document.querySelector("#"+idHab);
      selecionaIdHabil.checked = false;
    }
  }
}