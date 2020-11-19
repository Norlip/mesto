const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');

const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');

let title = document.querySelector('.profile__name');
let descript = document.querySelector('.profile__descript');


let POPtitle = document.querySelector('.popup__input_type_name');
let POPdescript = document.querySelector('.popup__input_type_title');

let formElement = document.querySelector(".popup__button");

function showPop() {
    popup.classList.add('popup_opened');
    POPtitle.value = title.textContent;
    POPdescript.value = descript.textContent;


}

function closePop() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = POPtitle.value;
    descript.textContent = POPdescript.value;
}



formElement.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("mousedown", showPop);
popupCloseButton.addEventListener("mousedown", closePop);