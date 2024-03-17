//Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

//Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

//OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro

const prompt = require("prompt-sync")();

const promise = new Promise((resolve, reject) => {
 let valor = parseInt(prompt("Digite um valor "));
 
 if(valor%2==0){
  resolve(valor);
 } else {
  reject("impar");
 }
});

promise
.then((par) => {
 console.log("O valor digitado é um número par :) ");
})

.catch((impar) => {
 console.log("Error: O valor digitado é um número ímpar :( ");
});