 const prompt = require("prompt-sync")({sigint: true})
 var colocacao = prompt("Diga sua posição " )
const posicoes = ["Ouro","Prata","Bronze","NADA!!!"]

function medalhaDeAcordoComPosicao(numero) 
{
 if (numero == 1){
  console.log("Você ganhou " + posicoes[0])
 }
 else if (numero == 2){
  console.log("Você ganhou " + posicoes[1])
 }
 else if (numero == 3) {
  console.log("Você ganhou " + posicoes[2])
 }
 else {
  console.log("Você não ganhou " + posicoes[3])
 }

} 

let medalha = medalhaDeAcordoComPosicao(colocacao)

