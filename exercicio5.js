//Construa uma comunicação com a fetch API para a url (https://api.thecatapi.com/v1/images/search?limit=10 ). Essa API retorna uma lista de objetos com 10 imagens aleatórias, sua missão será imprimir em um document.write todas as imagens com a seguinte formatação:
//“<img src=’${url_da_imagem}’/> <br />”
// //Para fazer a interação pela lista utilize forEach ou o laço for of.
// A ideia será passar pelo array apenas para pegar a url_da_imagem e ir imprimindo em um document.write() a tag com a formatação dada acima.
// a url_da_imagem virá em cada objeto dentro do array na propriedade url.
// Para acessar a documentação da API acesse: Report Wrapper - Report Dashboards
// (opcional) Caso queira uma visualização melhor coloque na tag img o atributo width: Ex: width='200'

let options = {
 method: 'GET'
}
//requisição GET -> retorna objetos (as imagens)
fetch('https://api.thecatapi.com/v1/images/search?limit=10', options)

.then((respostaFetch) =>{
 return respostaFetch.json(); //processa a resposta como um arquivo .json
})

.then((respostaApi) => { //processmento de dados da API -> passa como parametro
 
 for(let imagens of respostaApi){ //for of usado dentro dos elementos do array (dos links(id) das imagens) - armazena dentro da respostaApi, passa a conter as imagens retornadas pela API -> passa para variavel "let imagens" - passa a conter cada objeto
  let urlImagem =  imagens.url; //acesso a url do objeto imagem //declaro a variavel urlImagem e atribuo a ela a url da imagem atual que está passando pelo loop, a qual está armazenada dentro de imagens.url (propriedade.objeto) -> assim a utilize na tag img para o documento HTML

 document.write(`<img width='200' src='${urlImagem}'/> <br/> <br/>`); //for of faz a URL da imagem é extraída e adicionada a uma tag de imagem no documento HTML
}
})

.catch((erro) => {
document.write("erro");
})

