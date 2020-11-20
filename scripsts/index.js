const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');

const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.button');



let title = document.querySelector('.profile__name');
let descript = document.querySelector('.profile__descript');


let PopTitle = document.querySelector('.popup__input_type_name');
let PopDescript = document.querySelector('.popup__input_type_title');

let FormButton = document.querySelector(".popup__button");

function showPop() {
    popup.classList.add('popup_opened');
    PopTitle.value = title.textContent;
    PopDescript.value = descript.textContent;


}

function closePop() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = PopTitle.value;
    descript.textContent = PopDescript.value;
}



FormButton.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", showPop);
popupCloseButton.addEventListener("click", closePop);