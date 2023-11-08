/*************************************************************************************************************************** 
****************************************************************************************************************************

Esercizio 1

Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks. 
Fate in modo che possa calcolare le quattro operazioni base matematiche ( + - * /) e che prenda 
non due ma tre valori numerici sui quali eseguire queste operazioni. In questo caso, potete aiutarvi 
con il codice della lezione.

****************************************************************************************************************************
****************************************************************************************************************************/

// Callback
const add = (num1, num2, num3) => num1 + num2 + num3;
const sub = (num1, num2, num3) => num1 - num2 - num3;
const mul = (num1, num2, num3) => num1 * num2 * num3;
const div = (num1, num2, num3) => num1 / num2 / num3;

/*
 function numRandMax(max){
     return Math.floor(Math.random() * max);
 }
 */

function numRand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function calc (param){
    const firstNum = numRand(101,200);
    console.log(firstNum);
    const secondNum = numRand(51,100);
    console.log(secondNum);
    const thirdNum = numRand(1,50);
    console.log(thirdNum);
    return param(parseInt(firstNum), parseInt(secondNum), parseInt(thirdNum));
}

console.log('--------- Add:', calc(add));
console.log('--------- Sub:', calc(sub));
console.log('--------- Mul:', calc(mul));
console.log('--------- Div:', calc(div));

/*************************************************************************************************************************** 
****************************************************************************************************************************

Esercizio 2

Creare un array di oggetti che simuli la lista del carrello di un e-commerce. 
Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine, e una descrizione. 
Processate il seguente array di oggetti con map e forEach, e scriverne in commento la differenza.
Basta solo stamparne il contenuto.

****************************************************************************************************************************
****************************************************************************************************************************/

let cat = [
    {   
        id : 1,
        name : 'Copa Mundial',
        brand: 'Adidas',
        category: 'scarpe-da-calcio',
        costo: 130,
        descrizione: 'Scarpe da calcio Adidas mod.: Copa Mundial',
        imageSrc : '/img/adidas_copa_mundial.jpg'
    },

    {   
        id : 2,
        name : 'Tiempo',
        brand: 'Nike',
        category: 'scarpe-da-calcio',
        costo: 120,
        descrizione: 'Scarpe da calcio Nike mod.: Tiempo',
        imageSrc : '/img/adidas_tiempo.jpg'
    },
    {   
        id : 3,
        name : 'Stadio',
        brand: 'Lotto',
        category: 'scarpe-da-calcio',
        costo: 80,
        descrizione: '',
        imageSrc : '/img/lotto_stadio.jpg'
    }

];

/*
  cat.map((cat) =>{
        console.log(cat.name);
        console.log(cat.costo);
        console.log(cat);
    }); 
    cat.forEach((cat) =>{
        console.log(cat.name);
        console.log(cat.costo);
        console.log(cat);
    }); 
*/

console.log('----------- Diffedenze: map da i 3 oggetti dell\'array anche se null, forEach non restituisce niente "undefined" -----------');

const mapResult = cat.map((cat) => (cat.length >= 2 ? cat : null));
console.log("map:", mapResult);

const forEachResult = cat.forEach((cat) => (cat.length >= 1 ? cat : null));
console.log("forEach:", forEachResult);

/*************************************************************************************************************************** 
****************************************************************************************************************************

Avanzato - Trasformazione e Filtraggio di un Elenco di Numeri

Descrizione:
Dati due array di numeri, utilizzando i metodi map e filter:

Trasformazione (utilizzando map):
Prendere il primo array e moltiplicare ogni elemento per 2. Prendere il secondo array e aggiungere 5 ad ogni elemento.

Filtraggio (utilizzando filter):
Dal primo array trasformato, filtrare e tenere solo i numeri che sono maggiori di 10. 
Dal secondo array trasformato, filtrare e tenere solo i numeri pari.

Esempio: dati i seguenti array:

array1 = [3, 6, 9, 12]

array2 = [5, 10, 15, 20]

Dopo la trasformazione: array1 trasformato diventa [6, 12, 18, 24]

array2 trasformato diventa [10, 15, 20, 25]

Dopo il filtraggio: Dal array1 trasformato, tenere solo i numeri maggiori di 10: [12, 18, 24] Dal array2 trasformato, 
tenere solo i numeri pari: [10, 20]

Cosa fare? Scrivere una funzione transformAndFilter che accetta due array, applica le operazioni di trasformazione 
e filtraggio sopra descritte, e restituisce due nuovi array con i risultati. Alla fine fare console.log per verificarne
 il risulato come l'esempio sopra.

****************************************************************************************************************************
****************************************************************************************************************************/

let arr1 = [ 3, 6, 9, 12 ]
console.log('------ Array1 Start ------');
console.log(arr1);

let arr2 = [ 5, 10, 15, 20 ]
console.log('------ Array2 Start ------');
console.log(arr2);

let newArr1 = []

let newArr2 = []

let newArr3 = []

let newArr4 = []

function transformAndFilter(arr1, arr2) {
    
    arr1.map((arr1) => {
        let moltiplica = arr1*2;
        newArr1.push(moltiplica);
        return newArr1;
        });
    
    arr2.map((arr2) => {
        let add = arr2+5;
        newArr2.push(add);
        return newArr2;
        });

    newArr1.filter((arr1) => {
        if (arr1 >= 10) {
            newArr3.push(arr1);    
        }

        return newArr3;
        })

    newArr2.filter((arr1) => {
        if (arr1 % 2 == 0) {
            newArr4.push(arr1);    
        }
        return newArr4;
        })
}

transformAndFilter(arr1, arr2);

console.log('------ Array1 1a Trasformazione ------');
console.log(newArr1);
console.log('------ Array2 1a Trasformazione ------');
console.log(newArr2);
console.log('------ Array1 2a Trasformazione ------');
console.log(newArr3);
console.log('------ Array2 2a Trasformazione ------');
console.log(newArr4);


