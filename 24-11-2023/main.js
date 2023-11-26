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

const createLink = (srcParam, classparam, content) => {
	const link = document.createElement("a");
	link.className = classparam;
	link.href = srcParam;
	link.textContent = content;
	return link;
};

const createNavbar = (param) => {
	//   const { url, label } = dataMenu;
	const navbar = document.createElement("nav");
	navbar.className = "navbar row grow-1 collapse";

	const navbarList = document.createElement("ul");
	navbarList.className = "navbar-list grow-1";

	// const navLi = document.createElement("li");
	// navLi.className = "btn navbar-list-item";

	//  const navLinK = createLink(
	// 			getLink(dataMenu[0]),
	// 			"navbar-list-item-link",
	// 			getLink(dataMenu[1])
	// 		);

	// navLi.append(navLinK);
 
	//  dataMenu.forEach((dataMenu) => {
	// 		navbar.appendChild(getLink(dataMenu.url));
	// 	});

	// const list = getLink(dataMenu);
    const dataM = param.map(getLink);
    dataM.url;
     navbarList.append(dataM);
	navbar.append(navbarList);
	return navbar;
};

const createHeader = () => {
	const wrappEl = document.createElement("header");
	wrappEl.className = "main-header p-30-5 relative";

	const btnToggleEl = document.createElement("button");
	btnToggleEl.className = "toggleIcon";

	const btnToggleIcoEl = document.createElement("i");
	btnToggleIcoEl.className = "fa fa-bars fa-2x main-color";

	// const containerEl = document.createElement("div");
	// containerEl.className = "container";

	const createContainerEl = createDiv("container");
	const createRowEl = createDiv("row row-header-main");
	const boxLogo = createDiv("text-center-mobile");
	const logolink = createLink( "#","", "");
    const logoImg = createImg("img/logoipsum-330.svg", '', 'Logo');

     const navbar = createNavbar(dataMenu);

    
    logolink.append(logoImg);
	boxLogo.append(logolink);
    createRowEl.append(boxLogo);
    createRowEl.append(navbar);
    createContainerEl.append(createRowEl);
    btnToggleEl.append(btnToggleIcoEl);
	wrappEl.append(btnToggleEl, createContainerEl);

	return wrappEl;
};


let dataMenu = [
	{
		url: "/home",
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
    let url = item.url;
    return url;
    // let label = [item.label];
    // let li = '<li>' . 
    //  return [item.url, item.label];
 }
console.log(dataMenu.map(getLink));

// let dataLink = (param) => {
    
//     const data = param.map((param) => [
//         param.url, param.label
//     ]);
    
//     return data
// }


// console.log(dataLink(dataMenu));

//  console.log(dataMenu.map(getLink));


// const test = dataMenu.map((data) => [data.url, data.label]);
// const test = dataMenu.map(getLink);
// console.log(test);



const appCanvas = document.querySelector(".app");
const header = createHeader();
appCanvas.appendChild(header);
