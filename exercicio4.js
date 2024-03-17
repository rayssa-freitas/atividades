//Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.


function pegaDados() { //nao preciso usar prompt-sync quando for no HTML 
 const usuario = {};
 usuario.nome = prompt("Digite seu nome: ");
 usuario.idade = parseInt(prompt("Digite sua idade: "));
 usuario.email = prompt("Digite seu e-mail: ");
 return usuario;
}
 const user = pegaDados();
//uso uma chave para salvar / (item + objeto) 
            //para que seja possivel puxar novamente essa informação salva do localStorage
 localStorage.setItem("user", JSON.stringify(pegaDados())); //conversão para string
 console.log("dados salvos")