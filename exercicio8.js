// Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 iremos adaptar melhor nossa aplicação. Antes de tudo, assim que executar a aplicação você irá verificar no localStorage se já existe a chave “endereco” caso haja, deverá ser informado que já existe um endereço na nossa base de dados e se o usuário deseja fazer uma nova requisição para um novo endereço, após disponibilizar o prompt para a captura do novo cep, salve os dados na mesma chave “endereco” existente no localStorage. Caso não haja a chave o fluxo deve ser feito como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a requisição, e salvar os dados no localStorage.

// OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.


let enderecoExiste = localStorage.getItem("endereco"); //verificar se já existe o endereço salvo
                     //verifica se há algum valor no localStorage com a chave "endereco" -> se houver retorna valor correspondente, se não, retorna null

if (enderecoExiste){ //verifica se existe o endereço já salvo
 let atualizaEndereco = confirm("Endereço já consta na base de dados, deseja atualizar? Digite sim ou não para prosseguir");

 if(atualizaEndereco){ //caso ele queira atualizar o endereço
  pegarEndereco();
 }else{
  alert("Finalizando");
 }
}else {
 pegarEndereco(); //se não houver endereço já salvo, captura novo endereço
}

function pegarEndereco(){
let cep_informado = prompt("Digite seu CEP: ");

let options = { //precisa para a requisição do fetch
 method: 'GET'
}

fetch(`https://viacep.com.br/ws/${cep_informado}/json`, options) 

.then((respostaFetch) =>{ 
 return respostaFetch.json();  
})

.then((respostaApi) => { 
 let endereco = `${respostaApi.logradouro}, ${respostaApi.complemento}, ${respostaApi.bairro}, 
 ${respostaApi.uf}`; 

 let confirmacao = confirm(endereco + " | Os dados estão corretos?, digite sim para salvá-los");

 if(confirmacao){
 localStorage.setItem("endereco", JSON.stringify(respostaApi)); 
 alert("Endereço salvo com sucesso.");
 }
})

.catch((erro) => {
alert("Erro");
});
}
