const createElement = (type, className) => {
	const wrappEl = document.createElement(type);
	wrappEl.className = className;
	return wrappEl;
};

const createHeadNav = () => {
	const wrappEl = createElement("div", "head_navbar");
	const logoEl = createElement("img", "logoSmall");
	logoEl.src =
		"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
	logoEl.alt = "Logo";

	const inputSearchEl = createElement("input", "search");
	inputSearchEl.type = "text";
	inputSearchEl.placeholder = " Cerca";
	inputSearchEl.autocomplete = "off";
	wrappEl.append(logoEl, inputSearchEl);

	return wrappEl;
};

const createHeadLinkMobile = () => {
	const wrappEl = createElement("div", " head_link");
	const boxListEl = createElement("ul", "list-link");
	const itemList1El = document.createElement("li");
	const itemList2El = document.createElement("li");
	const labelEl = document.createElement("label");
	const select = document.createElement("select");
	const option = document.createElement("option");

	itemList1El.textContent = "Tv Show";
	itemList2El.textContent = "Movies";

	labelEl.textContent = "Categories";

	option.value = "";
	option.textContent = "";

	select.append(option);
	boxListEl.append(itemList1El, itemList2El, labelEl, select);
	wrappEl.append(boxListEl);

	return wrappEl;
};

export { createElement, createHeadNav, createHeadLinkMobile };