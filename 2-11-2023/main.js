/////////////////////////////////////////////////// Ex. 1

function whatClimate (temp) {
    if (temp <= 0) {
        return temp + ' - Clima: glaciale';
    } else if(temp <= 9) {
        return temp + ' - Clima: freddo';
    } else if(temp <= 15){
        return temp + ' - Clima: mite';
    } else if(temp <= 25){
        return temp + ' - Clima: caldo';
    } else if(temp <= 40){
        return temp + ' - Clima: molto caldo';
    } else if(temp <= 49) {
        return temp + ' - Clima: troppo caldo';
    } else if(temp >= 50){
        return temp + ' - Clima: sei in un forno';
    } else {
        return ' Dato non valido riprova';
    }
}
console.log('------------ Esercizio 1: ------------')
console.log('Temperatura in gradi:', whatClimate(54));

/////////////////////////////////////////////////// Ex. 2

// Object
const francesco = {
    name : 'Francesco',
    age : 36,
    hobbies : ['codice', 'animali', 'graphic design', 'trekking', 'calcio a 5', 'palestra', 'cibo'],
    favouriteFilm : ['The Imitation Game','A Beautiful Mind', '21 Blackjack'],
    imFrancesco : function () {
        return 'Mi chiamo: ' + this.name + '. Ho ' + this.age + ' anni. Le mie passioni sono: ' + this.hobbies + '. I miei film preferiti sono: ' + this.favouriteFilm;
    }
}
console.log('------------ Esercizio 2: ------------')
console.log(francesco.imFrancesco());

/////////////////////////////////////////////////// Ex. 3

let wishlist = [];

function addWishlist (param) {
    wishlist.push(param);
}

addWishlist('The Imitation Game');
addWishlist('A Beautiful Mind');
addWishlist('21 Blackjack');
addWishlist('Apocalypto');

console.log('------------ Esercizio 3: ------------')
console.log('---- Lista Preferiti: ----')
function shoWishlist(array){   
    for(i= 0; i <= array.length; i++){
       return array;
    }
}

shoWishlist(wishlist);
// console.log(wishlist.toString()) 

function removeFromWishlist (param){
    
    if (wishlist.includes(param)) {
        
        let num = wishlist.indexOf(param);
        
        // console.log('Si il film esiste');

        // console.log('Indice elemento  nell\'array: ', num);

        wishlist.splice(num,1);
        
        console.log('---- removeFromWishlist: ----')

        console.log(wishlist.toString());
        
        
        }else {
            console.log('Titolo non trovato');
        }
    
}

console.log(wishlist.toString());

removeFromWishlist('The Imitation Game');

// let num = wishlist.indexOf('A Beautiful Mind');
//         console.log(num);

//console.log(wishlist.toString()) 




