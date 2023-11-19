/*
Esercizio 1
Sulla base della lezione del giorno, creare un timer al cui scadere di 3 secondi 
e mezzo chieda all'utente se è maggiorenne con un popup. 
Il popup è solo testuale, nessun altro elemento.

Esercizio avanzato
A partire dall'esercizio 1, aggiungere due pulsanti uno con su scritto Si e uno No che svolgano le seguenti attività:

il pulsante si chiude il popup (eliminandolo) e lasciando all'utente la possibilità di continuare a vedere il sito;
il pulsante no che fa un redirect a google.com (per il redirect cercate sulla rete come fare);
Inoltre, quando il popup è attivo (quindi aperto con la scelta di prese si o no), il resto della pagina sottostante deve essere nascosta.

*/

const createContent = () => {
    const contentWrapp = document.createElement('div');
    const contentTitle = document.createElement('h2');
    const contentText = document.createElement('p');

    contentWrapp.className='content';
    contentTitle.textContent='Lorem Ipsum';
    contentText.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident in libero, possimus est voluptas nobis rerum. Corporis, cum maiores eum necessitatibus nihil fugit dolores. Ipsum velit veniam dolor expedita.';

    contentWrapp.append(contentTitle, contentText);    
    
    return contentWrapp;
}


const createPopup = () => {
    const wrapperP = document.createElement('div');
    const textP = document.createElement('p');

    const boxSi = document.createElement('div');
    

    const boxNo = document.createElement('div');
    
    
    boxNo.className="box";
    boxNo.id="boxNo";
    boxSi.className="box";
    boxSi.id="boxSi";

    boxSi.textContent="Si";
    boxNo.textContent="No";

    wrapperP.className='popup';
    textP.textContent='Sei maggiorenne?';

    wrapperP.append(textP, boxSi,boxNo);

    boxSi.addEventListener('click', () => {
        wrapperP.remove();
        document.body.append(createContent());
        
    } )

    boxNo.addEventListener('click', () => {
        window.location.href = "http://www.google.com";
    } )


    return wrapperP;
}

setTimeout(() => {
    let content = document.querySelector('.content');
    content.remove();

    document.body.append(createPopup());
}, 3500)


/*
Esercizio 2
Eseguire una chimata di tipo fetch al seguente indirizzo https://dummyjson.com/products. 
Dalla risposta che ne consegue, stampare un array che contiene non tutti i valori ma 
solo quelli il cui prezzo (chiave price) sia inferiore a 50.
*/

fetch('https://dummyjson.com/products')
.then((res) => res.json())
//.then((data) => console.log(data));
.then((data) => console.log(data.products.filter((prod) => prod.price < 50))
);