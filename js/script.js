//Selecionar Técnico seleciona Tudo | x |
//Selecionar Fase Seleciona a fase + suas habilidades | x |
//Selecionar as habilidades individualmente | |

//Calcular o custo do curso e mostra no campo Total
//A soma deve calcular apenas os campos selecionados

var selecaoTecAdmin = document.querySelector('#TecAdmin');
var todasFases = document.querySelectorAll('.Inputfase');
var todasHabilidades = document.querySelectorAll('.lista input');
var conteudoFase = document.querySelectorAll('.conteudoFase');

var conteudoUm = document.querySelectorAll("#contentUM input");
var conteudoDois = document.querySelectorAll("#contentDois input");
var conteudoTres = document.querySelectorAll("#contentTres input");
var conteudoQuatro = document.querySelectorAll("#contentQuatro input");
var conteudoCinco = document.querySelectorAll("#contentCinco input");

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
      cont = 0;
      if(selecao.id == "PrimeiraFase"){
        for(var i=0;i < conteudoUm.length; i++){
          idHabFase = conteudoUm[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = true;
        }
      }else if(selecao.id == "SegundaFase"){
        for(var i=0;i < conteudoDois.length; i++){
          idHabFase = conteudoDois[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = true;
        }
      }
      else if(selecao.id == "TerceiraFase"){
        for(var i=0;i < conteudoTres.length; i++){
          idHabFase = conteudoTres[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = true;
        }
      }
      else if(selecao.id == "QuartaFase"){
        for(var i=0;i < conteudoQuatro.length; i++){
          idHabFase = conteudoQuatro[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = true;
        }
      }
      else if(selecao.id == "QuintaFase"){
        for(var i=0;i < conteudoCinco.length; i++){
          idHabFase = conteudoCinco[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = true;
        }
      }
    }else{
      if(selecao.id == "PrimeiraFase"){
        for(var i=0;i < conteudoUm.length; i++){
          idHabFase = conteudoUm[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = false;
        }
      }else if(selecao.id == "SegundaFase"){
        for(var i=0;i < conteudoDois.length; i++){
          idHabFase = conteudoDois[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = false;
        }
      }
      else if(selecao.id == "TerceiraFase"){
        for(var i=0;i < conteudoTres.length; i++){
          idHabFase = conteudoTres[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = false;
        }
      }
      else if(selecao.id == "QuartaFase"){
        for(var i=0;i < conteudoQuatro.length; i++){
          idHabFase = conteudoQuatro[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = false;
        }
      }
      else if(selecao.id == "QuintaFase"){
        for(var i=0;i < conteudoCinco.length; i++){
          idHabFase = conteudoCinco[i].id;
          selecionaidHabFase = document.querySelector("#" + idHabFase);
          selecionaidHabFase.checked = false;
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