import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js"

const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const addCloseButton = document.querySelector('.popup-add__close');
const editCloseButton = document.querySelector('.popup-edit__close');
const editFormButton = document.querySelector('.popup-edit__button');
const addFormButton = document.querySelector('.popup-add__button');
const formElement = document.querySelector('.popup-edit__button');
const pop = document.querySelectorAll('.popup');
const popContent = document.querySelectorAll('.popup__content');


const elementsGrid = document.querySelector(".elements__grid");
const delButton = document.querySelector(".button_type_del");
const popupAdd = document.querySelector(".popup-add");
const popupEdit = document.querySelector(".popup-edit");


const title = document.querySelector('.profile__name');
const descript = document.querySelector('.profile__descript');
const popTitle = document.querySelector('.popup-edit__input_type_name');
const popDescript = document.querySelector('.popup-edit__input_type_title');
const formEditElement = document.querySelector(".popup-edit__form");
const formAddElement = document.querySelector(".popup-add__form");

const popAddTitle = document.querySelector('.popup-add__input_type_name');
const popAddDescript = document.querySelector('.popup-add__input_type_title');
const inputLists = document.querySelector('.popup-add__input_type_title');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const forms = Array.from(document.forms);
const photoCloseButton = document.querySelector('.popup-photo__close');
const photoImage = document.querySelector('.elements__photo');
const photoPhotoImage = document.querySelector('.popup-photo__image');
const photoPopup = document.querySelector('.popup-photo');
const popupTitle = document.querySelector('.popup-photo__title');

const validset = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


/*function esc(evt) {
    if (evt.key === "Escape") {
        const popupActive = document.querySelector('.popup_opened');
        closePop(popupActive);
    }
}





function getCard(name, link) {
    const temple = document.querySelector(".template").content.cloneNode(true);
    temple.querySelector(".template__name").textContent = name;
    const photo = temple.querySelector(".template__photo");
    photo.src = link;
    temple.querySelector(".button_type_del").addEventListener("click", event => {
        event.target.closest(".template__li0").remove()

    });

    temple.querySelector(".button_type_like").addEventListener("click", event => {

        event.target.classList.toggle("button_type_like-activ");


    });

    photo.addEventListener("click", () => {
        openPop(photoPopup);
        photoPhotoImage.src = link;
        popupTitle.textContent = name;

    });

    photoCloseButton.addEventListener("click", (evt) => {
        closePop(photoPopup);

    });



    return temple;;

}


function preCard(card) {
    elementsGrid.prepend(card);

}

initialCards.forEach(function (item) {
    const card = getCard(item.name, item.link);
    preCard(card)
});
*/
function getCard(name, link) {
    const card = new Card(name, link, "template")
    const cardElement = card.create();
    document.querySelector(".elements__grid").prepend(cardElement);

}
function openPop(pop) {

    pop.classList.add("popup_opened");

}

function closePop(pop) {
    pop.classList.remove("popup_opened");
}
function openEditPop(pop) {
    popTitle.value = title.textContent;
    popDescript.value = descript.textContent;
    openPop(pop);
}

function handleformSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = popTitle.value;
    descript.textContent = popDescript.value;
    closePop(popupEdit);
}
function handleFormSubmit(evt) {
    evt.preventDefault();
    const card = getCard(popAddTitle.value, popAddDescript.value);
    closePop(popupAdd);
    popAddTitle.value = "";
    popAddDescript.value = "";
    addFormButton.disabled = true;
    addFormButton.classList.add("popup__button_disabled");
}

addButton.addEventListener("click", function () { openPop(popupAdd) });
editButton.addEventListener("click", function () { openEditPop(popupEdit) });
formEditElement.addEventListener("submit", handleformSubmitHandler);
addCloseButton.addEventListener("click", function () { closePop(popupAdd) });
editCloseButton.addEventListener("click", function () { closePop(popupEdit) });
formAddElement.addEventListener("submit", handleFormSubmit);

/*
popContent.forEach(function (evt) {
    evt.addEventListener("click", (evt) => {
        evt.target.stopPropagation();

    })

});
*/


pop.forEach(function (evt) {
    evt.addEventListener("click", (evt) => {
        closePop(evt.target);
    })


})

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "template")
    const cardElement = card.create();
    document.querySelector(".elements__grid").prepend(cardElement);
})


forms.forEach(form => {
    const formValidator = new FormValidator(form, validset);
    formValidator.enableValidation();

})