/* 
--------------------------------- Esercizio 1 ---------------------------------

Tra le molteplici sezioni ed effetti visivi nel web, esistono alcuni elementi ricorrenti. 
Tra questi sicuramente emergono le cards, i caroselli, gli sliders di immagini, e così via. 
Per l"esercitazione numero 1, creare una sezione hero dinamicamente (quindi javascript).
Esempio di sezione Hero: https://www.w3schools.com/howto/howto_css_hero_image.asp

--------------------------------------------------------------------------------
*/

/*
 <section class="hero">
            <button class="hideHero">Hide this hero section</button>
    </section><!-- hero -->
*/

const heroGenerator = (urlBg, contentBtn) => {
    const sectionHero = document.createElement("section");
    const buttonHero = document.createElement("button");

    sectionHero.setAttribute("class","hero");
    sectionHero.style.backgroundImage = urlBg;
    buttonHero.setAttribute("class","hideHero");
    buttonHero.textContent = contentBtn;

    buttonHero.addEventListener('click',hideInFunc)
    

    sectionHero.append(buttonHero);
    return sectionHero;
}

document.body.append(heroGenerator("url('./img/fish-378286_1280.jpeg')", "Hide this hero section"))

  
/*
--------------------------------- Esercizio 2 ---------------------------------

Sicuramente la vostra Hero page includerà un button vero? (Se non lo avete aggiunto correte!). 
Aggiungere a questo pulsante un evento di tipo click, cosicchè non appena viene cliccato scateni 
una funzione che nasconda tutta la sezione hero per intera. (Aiutatevi con la proprietà CSS display: none).

--------------------------------------------------------------------------------
*/

function hideInFunc(){
    this.parentNode.style.display="none";
}

/*
Avanzato
Sulla base dell'oggetto fornito sotto, creare una sezione gallery. 
Questa sezione deve essere popolata dinamicamente, attraverso una funzione creata ad-hoc 
imageGenerator che generi una immagine in base agli argomenti passati all'invocazione. 
Il risultato deve essere almeno una immagine completa di src, alt e id. 
Trovate Queste 3 chiavi all'interno dell'oggetto stesso. 
Inoltre l'immagine avrà anche un attributo di tipo class che permetterà l'aggiunta di CSS.
*/

/*
<section class="gallery">
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=1" class="gallery_item_img" alt="immagine"></div>
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=2" class="gallery_item_img" alt="immagine"></div>
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=3" class="gallery_item_img" alt="immagine"></div>
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=4" class="gallery_item_img" alt="immagine"></div>
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=5" class="gallery_item_img" alt="immagine"></div>
    <div class="gallery_item"><img src="https://picsum.photos/700/400?random=6" class="gallery_item_img" alt="immagine"></div>
</section>
*/

const gallery = () => {
    const galleryBox = document.createElement('section');       
    galleryBox.setAttribute('class','gallery');
    
    return galleryBox;
    
}
document.body.append(gallery());

const imageGenerator = (id,url,alt) => {

    const galleryItem = document.createElement('div');
    const galleryItemImg = document.createElement('img');
    galleryItem.append(galleryItemImg);

    galleryItem.setAttribute('class','gallery_item');
    galleryItemImg.setAttribute('class', 'gallery_item_img');
    galleryItemImg.setAttribute('src', url);
    galleryItemImg.setAttribute('id',id);
    galleryItemImg.setAttribute('alt', alt);
        
    return galleryItem;
}

galleryBox = document.querySelector('.gallery');
//galleryBox.append(imageGenerator(1,'https://picsum.photos/700/400?random=1','Alt img'));

/* 
--------------------------------- Avanzato 2 ---------------------------------

  Qui cè un array di oggetti, renderizzare n immagini per quanti sono gli oggetti presenti nell'array. 
  Utilizzare la stessa funzione imageGenerator. 
  Attenzione, la funzione imageGenerator deve essere pura!

-------------------------------------------------------------------------------
*/

 const imageList = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/700/400?random=1",
      altText: "Immagine 1",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/700/400?random=2",
      altText: "Immagine 2",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/700/400?random=3",
      altText: "Immagine 3",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/700/400?random=4",
      altText: "Immagine 4",
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/700/400?random=5",
      altText: "Immagine 5",
    },
    {
      id: 6,
      imgUrl: "https://picsum.photos/700/400?random=6",
      altText: "Immagine 6",
    },
    {
      id: 7,
      imgUrl: "https://picsum.photos/700/400?random=7",
      altText: "Immagine 7",
    },
    {
      id: 8,
      imgUrl: "https://picsum.photos/700/400?random=8",
      altText: "Immagine 8",
    },
    {
      id: 9,
      imgUrl: "https://picsum.photos/700/400?random=9",
      altText: "Immagine 9",
    },
    {
      id: 10,
      imgUrl: "https://picsum.photos/700/400?random=10",
      altText: "Immagine 10",
    },
    {
        id: 11,
        imgUrl: "https://picsum.photos/700/400?random=11",
        altText: "Immagine 10",
      },
      {
        id: 12,
        imgUrl: "https://picsum.photos/700/400?random=12",
        altText: "Immagine 10",
      }
  ];

  imageList.forEach(function(param){
      const imgGen = imageGenerator(
          param.id, param.imgUrl,param.altText
      );
      galleryBox.append(imgGen);
  } )

 




