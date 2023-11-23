/*

Esercizio 1

Sulla base della lezione del giorno, effettuare una chiamata al seguente endpoint e richiedere una lista di immagini. 
Fare quindi il console log che presenti i soli valori contenuti dentro la chiave download_url. Attenzione, usare Async/Await.

Endpoint: https://picsum.photos/v2/list

*/

const asyncAwait = async() =>{
    const res = await fetch("https://picsum.photos/v2/list") ;
    const data = await res.json();
    const dataImg = data.map((param) => console.log(param.download_url));
    return dataImg
}
asyncAwait();

/*
Esercizio 2
 Creare una funzione che renderizzi una immagine e un testo. Una volta creata la funzione,
 renderizzare i dati del seguente oggetto:
 */

 /*
 Avanzato

All'esercizio 2 aggiungere le seguenta funzionalità:
Non renderizzare più una sola immagine, ma la lista completa che arriva dalla chiamata dell'esercizio 1;
 */