const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const addCloseButton = document.querySelector('.popup-add__close');
const elementsGrid = document.querySelector(".elements__grid");
const delButton = document.querySelector(".button_type_del");
const popupAdd = document.querySelector(".popup-add");
const popupEdit = document.querySelector(".popup-edit");
const popupPhoto = document.querySelector(".popup-photo");

const popAddTitle = document.querySelector('.popup-add__input_type_name');

const popAddDescript = document.querySelector('.popup-add__input_type_title');

const title = document.querySelector('.profile__name');
const descript = document.querySelector('.profile__descript');
const popTitle = document.querySelector('.popup-edit__input_type_name');
const popDescript = document.querySelector('.popup-edit__input_type_title');
const formElement = document.querySelector(".popup-edit__form");
const formAddElement = document.querySelector(".popup-add__form");


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

function openPop(pop) {
    pop.classList.add("popup_opened");
}

function openEditPop(pop) {
    popTitle.value = title.textContent;
    popDescript.value = descript.textContent;
    openPop(pop);
}

function closePop(pop) {
    pop.classList.remove("popup_opened");
}

function getCard(name, link) {
    const temple = document.querySelector(".template").content.cloneNode(true);
    temple.querySelector(".elements__name").textContent = name;
    const photo = temple.querySelector(".elements__photo");
    photo.src = link;
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

    photo.addEventListener("click", () => {
        openPop(photoPopup);
        photoPhotoImage.src = link;
        popupTitle.textContent = name;

    });
    photoCloseButton.addEventListener("click", () => {
        closePop(photoPopup);

    });

    return temple;;

}

initialCards.forEach(function (item) {
    const card = getCard(item.name, item.link);
    elementsGrid.prepend(card);
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
    elementsGrid.prepend(card);
    closePop(popupAdd);
    popAddTitle.value = "";
    popAddDescript.value = "";
}

addButton.addEventListener("click", function () { openPop(popupAdd) });
editButton.addEventListener("click", function () { openEditPop(popupEdit) });

formElement.addEventListener("submit", handleformSubmitHandler);
formAddElement.addEventListener("submit", handleFormSubmit);

