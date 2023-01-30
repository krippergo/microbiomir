let nodeMain = document.querySelector(`#main`);
let nodeGallery = document.querySelector(`#gallery`);
let nodeMainBM = document.querySelector(`#main-burger-menu`);
let nodeGalleryBM = document.querySelector(`#gallery-burger-menu`);
let description = document.querySelector(`#c-description`);
let gallery = document.querySelector(`#c-gallery`);
let button = document.querySelector(`#open-menu`);
let buttons = document.querySelector(`#buttons-on-burger-menu`);
let startGame = document.querySelector(`#models`);
let startGameBM = document.querySelector(`#models-burger-menu`);
let header = document.querySelector(`#header`);
let subHeader = document.querySelector(`#sub-header`);
let footer = document.querySelector(`#footer`);
let loadGame = document.querySelector(`#load`);
let start = document.querySelector(`#start`);
let exit = document.querySelector(`#exit`);
let gameContainer = document.querySelector(`#game-container`);
let gameContainerOne = document.querySelector(`#game-container-one`);
let videoContainer = document.querySelector(`#video-container`);
let imagesOpenContainer = document.querySelector(`.images-open-container`);
let imgOpenContainer = document.querySelector(`.img-open-container`);
let openImg = document.querySelector(`.open-img`);
let openVideo = document.querySelector(`.open-video`);
let x = document.querySelector(`.x`);
let burgerMenu = document.querySelector(`.sub-header-burger-menu`);
let models = document.querySelector(`.three-d-container`);
let imgGallery = document.querySelectorAll(`.img-gallery`);
let videoGallery = document.querySelectorAll(`.video-gallery`);

let interval;
let count;
let intervalTwo;

nodeMain.addEventListener(`click`, function () {
	description.classList.remove(`none`);
	gallery.classList.add(`none`);
	nodeMain.classList.add(`open`);
	nodeGallery.classList.remove(`open`);
});

nodeGallery.addEventListener(`click`, function () {
	description.classList.add(`none`);
	gallery.classList.remove(`none`);
	nodeMain.classList.remove(`open`);
	nodeGallery.classList.add(`open`);
});

nodeMainBM.addEventListener(`click`, function () {
	description.classList.remove(`none`);
	gallery.classList.add(`none`);
	nodeMainBM.classList.add(`open-burger-menu`);
	nodeGalleryBM.classList.remove(`open-burger-menu`);
});

nodeGalleryBM.addEventListener(`click`, function () {
	description.classList.add(`none`);
	gallery.classList.remove(`none`);
	nodeMainBM.classList.remove(`open-burger-menu`);
	nodeGalleryBM.classList.add(`open-burger-menu`);
});

button.addEventListener(`click`, function () {
	buttons.classList.toggle(`none`);
});

x.addEventListener(`click`, function () {
	imagesOpenContainer.classList.add(`none`);
	imgOpenContainer.classList.add(`none`);
	openImg.src = ``;
	openVideo.src = ``;
	openVideo.classList.add(`none`);
	openImg.classList.add(`none`);
});

startGame.addEventListener(`click`, function () {
	description.classList.add(`none`);
	gallery.classList.add(`none`);
	header.classList.add(`none`);
	subHeader.classList.add(`none`);
	footer.classList.add(`none`);
	gameContainer.classList.remove(`none`);
	burgerMenu.classList.add(`none`);
	nodeGallery.classList.remove(`open`);
	nodeMain.classList.remove(`open`);
	count = 0;
	interval = setInterval(loading, 200);
});

startGameBM.addEventListener(`click`, function () {
	description.classList.add(`none`);
	gallery.classList.add(`none`);
	header.classList.add(`none`);
	subHeader.classList.add(`none`);
	footer.classList.add(`none`);
	gameContainer.classList.remove(`none`);
	burgerMenu.classList.add(`none`);
	nodeGallery.classList.remove(`open`);
	nodeMain.classList.remove(`open`);
	count = 0;
	interval = setInterval(loading, 200);
});

start.addEventListener(`click`, function () {
	description.classList.add(`none`);
	gallery.classList.add(`none`);
	gameContainer.classList.add(`none`);
	gameContainerOne.classList.add(`none`);
	nodeMain.classList.add(`open`);
	nodeGallery.classList.remove(`open`);
	burgerMenu.classList.add(`none`);
	header.classList.add(`none`);
	subHeader.classList.add(`none`);
	footer.classList.add(`none`);
	videoContainer.classList.remove(`none`);
	intervalTwo = setInterval(startThreeM, 18200);
});

exit.addEventListener(`click`, function () {
	description.classList.remove(`none`);
	gameContainerOne.classList.add(`none`);
	nodeMain.classList.add(`open`);
	burgerMenu.classList.remove(`none`);
	header.classList.remove(`none`);
	subHeader.classList.remove(`none`);
	footer.classList.remove(`none`);
});

imgOpenContainer.addEventListener(`click`, function (evt) {
	let node = evt.target;
	if(node == imgOpenContainer) {
		imagesOpenContainer.classList.add(`none`);
		imgOpenContainer.classList.add(`none`);
		openImg.src = ``;
		openVideo.src = ``;
		openVideo.classList.add(`none`);
		openImg.classList.add(`none`);
	}
});

for (let i = 0; i < imgGallery.length; i++) {
	let openedImg = imgGallery[i];

	openedImg.addEventListener(`click`, function () {
		imagesOpenContainer.classList.remove(`none`);
		imgOpenContainer.classList.remove(`none`);
		openImg.src = openedImg.src;
		openVideo.classList.add(`none`);
		openImg.classList.remove(`none`);
	});
}

for (let i = 0; i < videoGallery.length; i++) {
	let openedVideo = videoGallery[i];

	openedVideo.addEventListener(`click`, function () {
		imagesOpenContainer.classList.remove(`none`);
		imgOpenContainer.classList.remove(`none`);
		openVideo.src = openedVideo.src;
		openVideo.classList.remove(`none`);
		openImg.classList.add(`none`);
	});
}

function loading() {
	if(count == 0) {
		loadGame.innerHTML = `загрузка`;
		count++;
	} else if(count == 1) {
		loadGame.innerHTML = `загрузка.`;
		count++;
	}  else if(count == 2) {
		loadGame.innerHTML = `загрузка..`;
		count++;
	}  else if(count == 3) {
		loadGame.innerHTML = `загрузка...`;
		count++;
	}  else if(count == 4) {
		loadGame.innerHTML = `загрузка`;
		count++;
	} else if(count == 5) {
		loadGame.innerHTML = `загрузка.`;
		count++;
	}  else if(count == 6) {
		loadGame.innerHTML = `загрузка..`;
		count++;
	}  else if(count == 7) {
		loadGame.innerHTML = `загрузка...`;
		count++;
	}  else if(count == 8) {
		loadGame.innerHTML = `загрузка`;
		count++;
	}  else if(count == 9) {
		loadGame.innerHTML = `загрузка.`;
		gameContainer.classList.add(`none`);
		gameContainerOne.classList.remove(`none`);
		clearInterval(interval);
	}
}

function startThreeM() {
	clearInterval(intervalTwo);
	videoContainer.classList.add(`none`);
	models.classList.remove(`none`);
}