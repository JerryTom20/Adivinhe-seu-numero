//let titulo = document.querySelector('h1');
//titulo.innerHTML='Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero de 0 a 10';


let numeroSecreto = 2;

function ProjetoNaTela(tag, texto){
      let campo= document.querySelector(tag);
      campo.innerHTML=texto;
}

ProjetoNaTela('h1', 'Jogo do numero secreto');
ProjetoNaTela('p', 'Escolha um numero de 0 a 10');



function verificarChute() {
      
      let chute = document.querySelector('input').value;
      if (chute == numeroSecreto){
            ProjetoNaTela('h1', 'Você acertou !')
            ProjetoNaTela('p', 'Você acertou o numero secreto')
      }else{ 
            if(chute >numeroSecreto){
                 ProjetoNaTela
            }
      console.log(chute === numeroSecreto);
      
} 

function gerarNumeroAleatrio(){
     return parseInt(Math.random()*10 + 1);

}

