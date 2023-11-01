let animaliSelvatici = ['Leone', 'Tigre', 'Leopardo'];
console.log('------ANIMALI SELVATICI-------');

for(i=0; i <= animaliSelvatici.length - 1; i++){
    console.log('Nome: ', animaliSelvatici[i]);
}

let animaliDomestici = ['Cane', 'Gatto', 'Criceto'];
console.log('------ANIMALI DOMESTICI-------');

for(i=0; i <= animaliDomestici.length -1; i++){
    console.log('Nome: ', animaliDomestici[i]);
}

let tuttiGLiAnimali = animaliSelvatici.concat(animaliDomestici);
console.log('------CONCATENATI-------');

for(i=0;i <= tuttiGLiAnimali.length -1; i++){
    console.log('Nome: ', tuttiGLiAnimali[i]);
}

console.log('------GIOCO NICK-------');

let nome = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');

let nomeToLowerCase = nome.toLowerCase() + '-';
let cognomeToLowerCase = cognome.toLowerCase();
//console.log(nomeToLowerCase, cognomeToLowerCase);

let nomeCognome = nomeToLowerCase.concat(cognomeToLowerCase);
//console.log(nomeCognome);

let nomeCognomeTrim = nomeCognome.trim();
//console.log(nomeCognomeTrim);

let annoNascita = parseInt(prompt('Anno di nascita'));
//console.log(annoNascita);

let numeroRandom = getRandomInt(annoNascita, 100000);
//console.log(numeroRandom);

let nickNum = nomeCognomeTrim.concat(numeroRandom);
console.log(nickNum);

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }