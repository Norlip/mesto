const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.button_type_edit');
const addPopup = document.querySelector('.popup-add');
const addButton = document.querySelector('.button_type_add');
const addCloseButton = document.querySelector('.popup-add__close');
const elementsGrid = document.querySelector(".elements__grid");
const delButton = document.querySelector(".button_type_del");



let popAddTitle = document.querySelector('.popup-add__input_type_name');
let popAddDescript = document.querySelector('.popup-add__input_type_title');
let title = document.querySelector('.profile__name');
let descript = document.querySelector('.profile__descript');
let popTitle = document.querySelector('.popup__input_type_name');
let popDescript = document.querySelector('.popup__input_type_title');
let formElement = document.querySelector(".popup__form");
let formAddElement = document.querySelector(".popup-add__form");


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

const photoCloseButton = document.querySelector('.popup-photo__close');
const photoImage = document.querySelector('.elements__photo');
const photoPhotoImage = document.querySelector('.popup-photo__image');
const photoPopup = document.querySelector('.popup-photo');
const popupTitle = document.querySelector('.popup-photo__title');


function addCard(name, link) {
    const temple = document.querySelector(".template").content.cloneNode(true);
    temple.querySelector(".elements__name").textContent = name;
    temple.querySelector(".elements__photo").src = link;
    temple.querySelector(".button_type_del").addEventListener("click", event => {
        const el = event.target.closest(".elements_li");
        if (el) {
            el.remove();
        }

    });
    temple.querySelector(".button_type_like").addEventListener("click", event => {
        if (event.target.classList.contains("button_type_like-activ")) { event.target.classList.remove("button_type_like-activ"); }
        else {
            event.target.classList.add("button_type_like-activ");
        }

    });

    temple.querySelector(".elements__photo").addEventListener("click", () => {
        photoPopup.classList.add("popup-photo_opened");

        photoPhotoImage.src = link;
        popupTitle.textContent = name;

    });
    photoCloseButton.addEventListener("click", () => {
        photoPopup.classList.remove("popup-photo_opened");


    });


    elementsGrid.prepend(temple);


}

initialCards.forEach(function (item) {
    addCard(item.name, item.link);

});

function showPop() {
    popup.classList.add('popup_opened');
    popTitle.value = title.textContent;
    popDescript.value = descript.textContent;
}

function showAddPop() {
    addPopup.classList.add('popup-add_opened');

}

function closePop() {
    popup.classList.remove('popup_opened')
}

function closeAddPop() {
    addPopup.classList.remove('popup-add_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = popTitle.value;
    descript.textContent = popDescript.value;
    closePop();
}
function formAddSubmitHandler(evt) {
    evt.preventDefault();
    addCard(popAddTitle.value, popAddDescript.value);
    closeAddPop();
    popAddTitle.value = "";
    popAddDescript.value = "";
}


formElement.addEventListener("submit", formSubmitHandler);
formAddElement.addEventListener("submit", formAddSubmitHandler);
editButton.addEventListener("click", showPop);
popupCloseButton.addEventListener("click", closePop);
addButton.addEventListener("click", showAddPop);
addCloseButton.addEventListener("click", closeAddPop);

