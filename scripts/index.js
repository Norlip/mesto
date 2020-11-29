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

const photoCloseButton = document.querySelector('.popup-photo__close');
const photoImage = document.querySelector('.elements__photo');
const photoPhotoImage = document.querySelector('.popup-photo__image');
const photoPopup = document.querySelector('.popup-photo');
const popupTitle = document.querySelector('.popup-photo__title');

function Esc(evt) {
    if (evt.key === "Escape") {
        const popupActive = document.querySelector('.popup_opened');
        closePop(popupActive);
    }
}

function openPop(pop) {
    pop.classList.add("popup_opened");
    document.addEventListener('keydown', Esc);
}

function openEditPop(pop) {
    popTitle.value = title.textContent;
    popDescript.value = descript.textContent;
    openPop(pop);
}

function closePop(pop) {
    pop.classList.remove("popup_opened");
    document.removeEventListener('keydown', Esc);
}

function getCard(name, link) {
    const temple = document.querySelector(".template").content.cloneNode(true);
    temple.querySelector(".elements__name").textContent = name;
    const photo = temple.querySelector(".elements__photo");
    photo.src = link;
    temple.querySelector(".button_type_del").addEventListener("click", event => {
        event.target.closest(".elements_li").remove()

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

function PreCard(card) {
    elementsGrid.prepend(card);

}
initialCards.forEach(function (item) {
    const card = getCard(item.name, item.link);
    PreCard(card)
});

function handleformSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = popTitle.value;
    descript.textContent = popDescript.value;
    closePop(popupEdit);
}
function handleFormSubmit(evt) {
    evt.preventDefault();
    const card = getCard(popAddTitle.value, popAddDescript.value);
    PreCard(card)
    closePop(popupAdd);
    popAddTitle.value = "";
    popAddDescript.value = "";
}

addButton.addEventListener("click", function () { openPop(popupAdd) });
editButton.addEventListener("click", function () { openEditPop(popupEdit) });
formEditElement.addEventListener("submit", handleformSubmitHandler);
addCloseButton.addEventListener("click", function () { closePop(popupAdd) });
editCloseButton.addEventListener("click", function () { closePop(popupEdit) });
formAddElement.addEventListener("submit", handleFormSubmit);


popContent.forEach(function (evt) {
    evt.addEventListener("click", (evt) => {
        evt.targt.stopPropagation();

    })

});

pop.forEach(function (evt) {
    evt.addEventListener("click", (evt) => {
        closePop(evt.target);
    })


})


