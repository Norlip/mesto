export const editButton = document.querySelector('.button_type_edit');
export const addButton = document.querySelector('.button_type_add');
export const addCloseButton = document.querySelector('.popup-add__close');
export const photoClose = document.querySelector('.popup-photo__close');
export const addFormButton = document.querySelector('.popup-add__button');
export const photoPopup = document.querySelector('.popup-photo');

export const title = document.querySelector(".profile__name")
export const descript = document.querySelector(".profile__descript")

export const popTitle = document.querySelector('.popup-edit__input_type_name');
export const popDescript = document.querySelector('.popup-edit__input_type_title');
export const formEditElement = document.querySelector(".popup-edit__form");
export const formAddElement = document.querySelector(".popup-add__form");

export const popAddTitle = document.querySelector('.popup-add__input_type_name');
export const element = '.elements__grid';

export const popAddDescript = document.querySelector('.popup-add__input_type_title');

export const initialCards = [
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
export const forms = Array.from(document.forms);

export const validset = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
export const editClose = document.querySelector(".popup-edit__close")
export const editSave = document.querySelector(".popup-edit__button")

export const docName = document.querySelector(".popup-edit__input_type_name")
export const docDesc = document.querySelector(".popup-edit__input_type_title")