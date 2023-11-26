const createDiv = (classparam) => {
	const div = document.createElement("div");
	div.className = classparam;
	return div;
};

const createImg = (srcImage,classparam, altParam) => {
	const img = document.createElement("img");
    img.src = srcImage;
    img.className = classparam;
    img.alt = altParam;
	return img;
};

const createLinkTodo = (srcParam, classparam, todoData) => {
	const link = document.createElement("a");
	link.className = classparam;
	link.href = todoData.url;
	link.textContent = todoData.label;

	// const dataLink = dataMenu.map(getLink);
	// link.textContent = dataLink.label;

	return link;
};

const createLink = (href, classparam, label) => {
	const link = document.createElement("a");
	link.className = classparam;
    link.href = href;
    link.textContent = label;

    // const dataLink = dataMenu.map(getLink);
    // link.textContent = dataLink.label;
    
	return link;
};

const createLi = (src) => {
	const wrappLi = document.createElement("li");

	wrappLi.className = "btn navbar-list-item";


    const link = createLinkTodo(src, "navbar-list-item-link", {
			url: "#",
			label: "Home",
		});
	wrappLi.append(link);
	return wrappLi;
};

const createNavbar = () => {
	const navbar = document.createElement("nav");
	navbar.className = "navbar row grow-1 collapse";

	const navbarList = document.createElement("ul");
	navbarList.className = "navbar-list grow-1";

	const navLi = document.createElement("li");
	navLi.className = "btn navbar-list-item";

	const link = document.createElement("a");

	const list = createLi();
	navbarList.append(list);
	navbar.append(navbarList);
	return navbar;
};

const createNavbarMeta = () => {


	const navbarList = document.createElement("ul");
	navbarList.className = "navbar-list";

	// const navLi = document.createElement("li");
    // navLi.className = "btn navbar-list-item";

    // const link = document.createElement("a");
    
    const list = createLi();
    navbarList.append(list);

	return navbarList;
};

const createHero = () => {
    const heroContEl = createDiv("container-fluid");
    const rowContEl = createDiv('row');
    const col6El = createDiv("col-6 d-flex d-flex-center-center");
    const col6InternoEl = createDiv("col-6 box-title");
    const titleEl = document.createElement('h1');
    titleEl.textContent = "Thougthful Gifting Made Easy";
    const paragEl = document.createElement('p');
    paragEl.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const link = createLink("#", "btn btnMain", "Get started");

    const imgHeroCol6 = createDiv("div");
    imgHeroCol6.className = "col-6";

    const imgHero = createImg("img/love.png", "img-fluid", "love");
    imgHeroCol6.append(imgHero);

    col6InternoEl.append(titleEl, paragEl, link);
    col6El.append(col6InternoEl);
    rowContEl.append(col6El);
    rowContEl.append(imgHeroCol6);
    heroContEl.append(rowContEl);

    return heroContEl;

};

const createHeader = () => {
	const wrappEl = document.createElement("header");
	wrappEl.className = "main-header p-30-5 relative";

	const btnToggleEl = document.createElement("button");
    btnToggleEl.className = "toggleIcon";
    
    btnToggleEl.addEventListener("click", () => {
                navbar.classList.toggle("show");
            });

	const btnToggleIcoEl = document.createElement("i");
	btnToggleIcoEl.className = "fa fa-bars fa-2x main-color";

	// const containerEl = document.createElement("div");
	// containerEl.className = "container";

	const createContainerEl = createDiv("container");
	const createRowEl = createDiv("row row-header-main");
	const boxLogo = createDiv("text-center-mobile");
	const logolink = createLinkTodo( "#","", "");
    const logoImg = createImg("img/logoipsum-330.svg", '', 'Logo');

    const navbar = createNavbar();
    const navbarMeta = createNavbarMeta();
    
    logolink.append(logoImg);
	boxLogo.append(logolink);
    createRowEl.append(boxLogo);
    navbar.append(navbarMeta);
    createRowEl.append(navbar);
    createContainerEl.append(createRowEl);
    btnToggleEl.append(btnToggleIcoEl);
	wrappEl.append(btnToggleEl, createContainerEl);

	return wrappEl;
};


let dataMenu = [
	{
		url: "#",
		label: "Home",
	},
	{
		url: "/about",
		label: "About",
	},
	{
		url: "/pages",
		label: "Pages",
	},
	{
		url: "/contact",
		label: "Contact",
	},
	,
	{
		url: "/singup",
		label: "Signup",
	},
	{
		url: "/order-now",
		label: "Order Now",
	}
];



// function getLink(item) {
//     return [item.url, item.label];
// }

const getLink = (item) => {
     return [item.url, item.label];
 }
// console.log(dataMenu.map(getLink));

// let dataLink = (param) => {
    
//     const data = param.map((param) => [
//         param.url, param.label
//     ]);
    
//     return data
// }


// console.log(dataLink(dataMenu));

//  console.log(dataMenu.map(getLink));


//  const test = dataMenu.map((data) => [data.url, data.label]);
// const test = dataMenu.map(getLink);
//  console.log(test);



const appCanvas = document.querySelector(".app");
const header = createHeader();
const hero = createHero();
appCanvas.append(header,hero);
