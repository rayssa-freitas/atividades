//Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML.
let options = {
 method: 'GET'
};

fetch('https://pokeapi.co/api/v2/pokemon/ditto', options)

.then((respostaFetch) => {
 return respostaFetch.json();
})

.then((respostaApi)=>{
// console.log(respostaApi); 
// console.log(respostaApi.sprites); 
// console.log(respostaApi.sprites.front_default);  
 let url = respostaApi.sprites.front_default;
 document.write(`<img src='${url}'/>`)

 let nome = respostaApi.species.name;
 document.write(`<h1>${respostaApi.name}</h1>`)
})

.catch((erro) =>{
 console.log("erro");
})