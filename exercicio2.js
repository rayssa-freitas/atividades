//Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário. Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores). Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. Utilize async/await para realizar a chamada de forma assíncrona.

//Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações, exibe-as no console.


async function inicio(){
const usuario = await getUserInfo();
lerUsuario(usuario);
}

async function getUserInfo() { 
return new Promise(resolve => {
 setTimeout(() => {
  const usuario = {};
   usuario.nome = prompt("Digite seu nome: ");
   usuario.idade = parseInt(prompt("Digite sua idade: "));
   usuario.email = prompt("Digite seu e-mail: ");

  resolve(usuario);
  }, 2000);
});
}

function lerUsuario(usuario){
 console.log(usuario);
}

inicio();