
/*
Esercizio 1
Scrivere in Javascript (quindi dinamico) tutta la sezione HTML relativa alla Navbar (mobile),
lasciando come elemento iniziale HTML il tag <nav class="navbar">. 
Cosi come abbiamo fatto con la sezione main <main class="main"> oggi a lezione.

*/

import { createElement, createHeadNav, createHeadLinkMobile } from "./modules/components.js";

const createHead = createHeadNav();
const createLinkMobile = createHeadLinkMobile();

const navbar = document.querySelector('.navbar');
navbar.append(createHead, createLinkMobile);
 


/*

Avanzato
Creare una modale, per il momento che non si apra ad alcun evento, 
che recuperi un oggetto tramite fetch dalla stessa API usata nel 
progetto.   
Siate creativi in questo, 
lo stile e le funzionalità sono a vostro piacere.

*/


const apiKey = "d0f8455fc395e60bede1e8769f1753e2"; 
const idFilm = 12; 
const apiUrl = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}&language=it-IT`;

const modal = document.querySelector('.modal');
const modalTitle = createElement('h2', 'text-upp');
const modalImg = createElement('img', 'img-modal');

fetch(apiUrl)
	.then((response) => {
		return response.json();
	})
    .then((movieData) => {
        modalImg.src = `https://image.tmdb.org/t/p/w154/${movieData.poster_path}`;
        modalTitle.textContent=movieData.title;
        modal.append(modalTitle, modalImg);
		console.log("Dettagli del film:", movieData);
	})
	.catch((error) => {
		console.error("Errore durante la richiesta:", error);
});






























// a parte

let arrowRight = document.querySelector(".arrowRight");
let arrowLeft = document.querySelector('.arrowLeft');
let cardsList = document.querySelector('.cards-list');

arrowRight.addEventListener("click", () => {
	console.log("Card-list Scroll Right");
    cardsList.scrollLeft += 1000
});

arrowLeft.addEventListener("click", () => {
    console.log("Card-list Scroll Left");
    cardsList.scrollLeft -= 1000
});