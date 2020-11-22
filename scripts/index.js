const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.button');

let title = document.querySelector('.profile__name');
let descript = document.querySelector('.profile__descript');
let popTitle = document.querySelector('.popup__input_type_name');
let popDescript = document.querySelector('.popup__input_type_title');
let formElement = document.querySelector(".popup__form");

function showPop() {
    popup.classList.add('popup_opened');
    popTitle.value = title.textContent;
    popDescript.value = descript.textContent;
}

function closePop() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = popTitle.value;
    descript.textContent = popDescript.value;
    closePop();
}

formElement.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", showPop);
popupCloseButton.addEventListener("click", closePop);