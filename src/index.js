import { Card } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { Popup } from "../scripts/Popup.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { FormValidator } from "../scripts/FormValidator.js";
import './index.css';
import { editButton , addButton , addCloseButton , photoClose, addFormButton ,photoPopup ,title, descript, popTitle, popDescript, formEditElement ,formAddElement, popAddTitle ,element ,popAddDescript, initialCards ,validset ,editSave ,docName ,docDesc, editClose} from "../utils/utils"


export function onClickClose(el) {
    el.onclick = function (e) {
        if (e.target.classList.contains('popup')) {
            closePop(el)
        };
    };
}



function closePop(pop) {
    pop.classList.remove("popup_opened");
    document.removeEventListener("click", onClickClose(pop))

}



function handleformSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = popTitle.value;
    descript.textContent = popDescript.value;
}

const addPop = new PopupWithForm(".popup-add", (it) => handleformSubmitHandler(it), ".popup-add__input", ".popup-add__form");
addPop.setEventListeners()
addButton.addEventListener("click", () => {
    addPop.open()
});


function handleFormSubmit(evt) {
    evt.preventDefault();

    const Cards = [
        {
            name: popAddTitle.value,
            link: popAddDescript.value
        }
    ];

    const cardsSection = new Section(
        {
            items: Cards,
            renderer: (item) => {
                const card = new Card(item.name, item.link, "template", () => popView.open(item))
                const cardEl = card.create()
                cardsSection.addItem(cardEl)


            },

        },
        element
    );
    cardsSection.renderItem()

    addPop.close()
    addFormButton.disabled = true;
    addFormButton.classList.add("popup__button_disabled");
}


photoClose.addEventListener("click", (evt) => {
    closePop(photoPopup);

});


formEditElement.addEventListener("submit", handleformSubmitHandler);
addCloseButton.addEventListener("click", () => { addPop.close() });
formAddElement.addEventListener("submit", handleFormSubmit);

const popView = new PopupWithImage(".popup-photo")
popView.setEventListeners();

const cardsSection = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item.name, item.link, "template", () => popView.open(item))
            const cardEl = card.create()
            cardsSection.addItem(cardEl)
        },

    },
    element
);

cardsSection.renderItem()

forms.forEach(form => {
    const formValidator = new FormValidator(form, validset);
    formValidator.enableValidation();

})

const editProf = new PopupWithForm(".popup-edit", (it) => handleformSubmitHandler(it), ".popup-edit__input", ".popup-edit__form");
const infoUser = new UserInfo('.profile__name', '.profile__descript');


editProf.setEventListeners()
editButton.addEventListener("click", () => {
    const a = infoUser.getUserInfo()
    infoUser.setUserInfo(a.name, a.info)
    editProf.open()
});



editClose.addEventListener("click", () => { editProf.close() })
editSave.addEventListener("click", () => { infoUser.setUserInfo(docName.value, docDesc.value), editProf.close() })

