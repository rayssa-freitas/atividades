// Continuando o exercício 06 iremos além de informar através do alert o endereço informado pelo cep iremos perguntar também se os dados informados estão corretos, caso esteja tudo correto salve esses dados no localStorage na chave “endereco”.

// OBS: Revise o conteudo do localStorage para relembrar o comando para salvar no localStorage.

let options = {
 method: 'GET'
}

let cep_informado = prompt("Digite seu CEP: ");

fetch(`https://viacep.com.br/ws/${cep_informado}/json`, options) // adiciona $ dentro do {cep_informado} no link
//substituida pelo valor da variável que será digitada pelo usuário -> 
.then((respostaFetch) =>{ //respostaFetch recebe a resposta da API do ViaCep e transforma em um objeto JS 
 return respostaFetch.json();  //extrai e transforma os dados Json em um objeto JS
})

.then((respostaApi) => { //recebo o objeto JS - uso para compor a mensagem e utilizo das propriedades 
 let endereco = `${respostaApi.logradouro}, ${respostaApi.complemento}, ${respostaApi.bairro}, 
 ${respostaApi.uf}`; //uso as propriedades da Api junto ao meu objeto -> as propriedades são retornadas pela própria API -> o objeto possibilita o acesso das informações que vem da API

 let confirmacao = confirm(endereco + " | Os dados estão corretos?, digite sim para salvá-los");
  //confirm retorna true or false
 if(confirmacao){     //uso uma chave para salvar (chave + objeto()) 
            //para que seja possivel puxar novamente essa informação salva do localStorage
 localStorage.setItem("endereco", JSON.stringify(respostaApi)); //salvo o objeto como string dentro do JSON -> localStorage só aceita strings/salvo os dados que estão contidos dentro da variavel endereco no objeto respostaApi
 alert("Endereço salvo com sucesso.");
 }else{
  alert("Finalizando...");
 }
})

.catch((erro) => {
alert("Erro");
})