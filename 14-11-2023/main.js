/*

Esercizio 1

Sulla base della lezione del 14 Novembre, trasferire tutta la parte logica del codice fatto a lezione 
in modo statico (HTML) in modo dinamico (JAVASCRIPT). Quindi creando voi gli elementi tramite JS.

*/

const roboProdGen = (title) => {

    const reccommendedSection = document.createElement('section');
    const titlePage = document.createElement('h1');
    const roboList = document.createElement('div');
    const roboSingle = document.createElement('div');
    const boxText = document.createElement('div')
    const price = document.createElement('p');
    const titleSingle = document.createElement('h4');
    const thumbnailUrl = document.createElement('img');

    reccommendedSection.className = 'recommended';
    roboList.className = 'robo-list';
    roboSingle.className= 'robo';
    boxText.className='text';
   
    price.textContent='445';
    titlePage.textContent = 'Recommended 4 you';
    titleSingle.textContent = title;
    thumbnailUrl.src = 'https://robohash.org/franco';
    thumbnailUrl.alt='Francesco';
    
    reccommendedSection.append(titlePage, roboList);
    roboList.append(roboSingle);
    roboSingle.append(boxText, thumbnailUrl);
    boxText.append(price,titleSingle);
    
    return reccommendedSection;

}

// document.body.append(roboProdGen('Francesco'));

/*
Esercizio 2
Applicare un costrutto per la gestione degli
errori Try e Catch all'esecuzione della funzione 
roboProdGen. Non importa scatenare alcun errore 
specifico, basta la sintassi corretta 
applicata nel modo giusto.
*/

    // try {
    //     document.body.append(robosProdGen('Francesco'));
    // }
    // catch(error) {
    //     alert(error);
    // }

/*

Avanzato

In allegato trovere lo screenshoot di un design 
trovato online e che abbiamo utilizzato come riferimento 
per creare la lista del nostro store di robots. 
Completarla, tutta in dinamico, 
aggiungendo quanti più elementi possibili. 
Aggiungere anche ad ogni singola card robot 
il pulsantino per i preferiti e quello per l'acquisto.
 Utilizzate come testo delle emoji. 
 La navbar inferiore nera è del tutto opzionale,
  ma chi vuole può lavorarci.

  */

  const createApp = (productData) => {

    const appRounded = document.createElement('div');
    const mainHeader = document.createElement('header');

    appRounded.className='appRounded';
    mainHeader.className='main_header';

    const headerTitleBox = document.createElement('div')
    const headerTitleText = document.createElement('h1');

    headerTitleBox.className='header-title';
    headerTitleText.textContent='Frind Best Furnitures';
    
    const navCart = document.createElement('nav');
    const cartList = document.createElement('ul')
    const faSearchCart = document.createElement('li');
    const faCart = document.createElement('li');
    const iSearch = document.createElement('i');
    const iCart = document.createElement('i');

    navCart.className='cart';
    cartList.className='cart-list';
    iSearch.className='fa fa-search fa-2x';
    iCart.className='fa fa-shopping-cart fa-2x';
    
    const navbarList = document.createElement('ul');
    navbarList.className='navbar-list';

    const liSearchActive = document.createElement('li');
    liSearchActive.className='active';
    
    const spanAll = document.createElement('span');
    spanAll.textContent='All';
    const iSearchSmall = document.createElement('i');
    iSearchSmall.className='fa fa-search';
    const liChair = document.createElement('li');
    const liChairIco = document.createElement('i');
    const liChairSpan = document.createElement('span');
    liChairSpan.textContent='Chair';
    liChairIco.className='fa fa-calendar-check-o';

    const liTable = document.createElement('li');
    const liChairTableIco = document.createElement('i');
    const liTableSpan = document.createElement('span');
    liTableSpan.textContent="Table";
    liChairTableIco.className="fa fa-calendar-o";

     const liSofa = document.createElement('li');
    const liSofaIco = document.createElement('i');
    const liSofaSpan = document.createElement('span');
    liSofaIco.className="fa fa-bed";
    liSofaSpan.textContent="Sofa";

    const liLamp = document.createElement('li');
    const liLampIco = document.createElement('i');
    const liLampSpan = document.createElement('span');
    liLampIco.className="fa fa-shower";
    liLampSpan.textContent="Lamp";

    const forYouSection = document.createElement('div');
    const forYouTitle = document.createElement('h1');
    forYouTitle.textContent="Reccomended for You";
    const productWrapp = document.createElement('div');
    productWrapp.className='productWrapp';

    const singleProdWrapp = document.createElement('div');
    singleProdWrapp.className='singleProdWrapp';

    const heartBox = document.createElement('div');
    const heartRounded = document.createElement('div');
    const heartIco = document.createElement('i');

    heartBox.className='heartBox';
    heartRounded.className='heart';
    heartIco.className="fa fa-heart-o";

    const thumbnailBox = document.createElement('div')
    const thumbnail = document.createElement('img');
    thumbnailBox.className="thumbnail";
    thumbnail.src=productData.imgSrc  ;
    
    const meta = document.createElement('div');
    const metaTextBox = document.createElement('div');
    const metaPrice = document.createElement('h5');
    const metaName = document.createElement('p');
    meta.className='meta';
    metaTextBox.className="metaText";
    metaPrice.textContent=productData.price;
    metaName.textContent=productData.name;

    const metaAddBox = document.createElement('div');
    const faPlus = document.createElement('i');
    metaAddBox.className='meta_add';
    faPlus.className="fa fa-plus";

    const mainFooter = document.createElement('footer');
    const footerNav = document.createElement('ul');
    mainFooter.className="main-footer";
    footerNav.className="footerNav";

    const liHomeActive = document.createElement('li');
    const liHomeIco = document.createElement('i');
    liHomeIco.className="fa fa-home active";

    const liHeart = document.createElement('li');
    const liHeartIco = document.createElement('i');
    liHeartIco.className="fa fa-heart-o";

    const liCart = document.createElement('li');
    const liCartIco = document.createElement('i');
    liCartIco.className="fa fa-shopping-cart";

    const liUser = document.createElement('li');
    const liUserIco = document.createElement('i');
    liUserIco.className="fa fa-user-o";

    appRounded.append(mainHeader);
    
    mainHeader.append(headerTitleBox);
    headerTitleBox.append(headerTitleText);
    mainHeader.append(navCart);
    navCart.append(cartList);
    cartList.append(faSearchCart);
    faSearchCart.append(iSearch);
    cartList.append(faCart);
    faCart.append(iCart);
    appRounded.append(navbarList);
    navbarList.append(liSearchActive);
    liSearchActive.append(iSearchSmall);
    liSearchActive.append(spanAll);
    navbarList.append(liChair);
    liChair.append(liChairIco);
    liChair.append(liChairSpan);
    navbarList.append(liTable);
    liTable.append(liChairTableIco);
    liTable.append(liTableSpan);
    navbarList.append(liLamp);
    liLamp.append(liLampIco);
    liLamp.append(liLampSpan)
    appRounded.append(forYouSection);
    forYouSection.append(forYouTitle);
    
    appRounded.append(productWrapp);
    productWrapp.append(singleProdWrapp);

    singleProdWrapp.append(heartBox);
    heartBox.append(heartRounded);
    heartRounded.append(heartIco);

    singleProdWrapp.append(thumbnailBox);
    thumbnailBox.append(thumbnail);

    singleProdWrapp.append(meta);
    meta.append(metaTextBox);
    metaTextBox.append(metaPrice);
    metaTextBox.append(metaName);
    meta.append(metaAddBox);
    metaAddBox.append(faPlus);

    appRounded.append(mainFooter);
    mainFooter.append(footerNav);
    footerNav.append(liHomeActive);
    liHomeActive.append(liHomeIco);
    footerNav.append(liHeart);
    liHeart.append(liHeartIco);
    footerNav.append(liCart);
    liCart.append(liCartIco);
    footerNav.append(liUser);
    liUser.append(liUserIco);


    return appRounded;

  }

  const productList = [
      {
        id:1,
        price:'43.89',
        name:'Rocking Chair',
        imgSrc: 'img/sedia.png'
      },
      {
        id:2,
        price:'743.89',
        name:'Table',
        imgSrc: 'img/tavolo.png'
      },
      {
        id:3,
        price:'599.99',
        name:'Bed',
        imgSrc: 'img/letto.png'
      },
      {
        id:4,
        price:'1500.00',
        name:'Table office',
        imgSrc: 'img/tavolo-ufficio.png'
      }
  ];

  

//   const header = () => {
//     const headerTitleBox = document.createElement('div')
//     const headerTitleText = document.createElement('h1');
    
//     headerTitleBox.append(headerTitleText);
//     return headerTitleBox;
//   }
  
  //  document.body.append(createApp());
   
document.body.append(createApp());