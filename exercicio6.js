// Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep (Documentação - https://viacep.com.br/ ).
// OBS:

// Crie uma página html para imprimir o endereço através do cep.

// Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json

// Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: “logradouro, complemento - bairro - localidade/uf”

// o cep_informado será passado por prompt pelo usuário.

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
 let mensagem = `${respostaApi.logradouro}, ${respostaApi.complemento}, ${respostaApi.bairro}, 
 ${respostaApi.uf}`; //uso as propriedades da Api junto ao meu objeto -> as propriedades são retornadas pela própria API 

 alert(mensagem);
})


.catch((erro) => {
alert("erro");
})