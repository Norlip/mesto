export class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _like(ev) {
        ev.target.classList.toggle("button_type_like-activ");
    }

    _del(ev) {
        ev.target.closest(".template__li").remove();
    }



    _pop() {
        const photoCloseButton = document.querySelector('.popup-photo__close');
        const photoPopup = document.querySelector('.popup-photo');
        const photoPhotoImage = document.querySelector('.popup-photo__image');
        const popupTitle = document.querySelector('.popup-photo__title');

        openPop(photoPopup);
        photoPhotoImage.src = this._link;
        popupTitle.textContent = this._name;

        photoCloseButton.addEventListener("click", (evt) => {
            closePop(photoPopup);

        });

    }

    _setEventListeners() {
        this._photo.addEventListener('click', () => {
            this._pop()
        });
        this._likeButton.addEventListener('click', (ev) => {
            this._like(ev)
        });
        this._delButton.addEventListener('click', (ev) => {
            this._del(ev)
        });


    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
        return cardElement;
    }

    create() {
        this._element = this._getTemplate();
        this._photo = this._element.querySelector(".template__photo")
        this._element.querySelector(".template__name").textContent = this._name;
        this._likeButton = this._element.querySelector(".button_type_like");
        this._delButton = this._element.querySelector(".button_type_del");
        this._photo.src = this._link;
        this._setEventListeners();
        return this._element;;

    }


}

function esc(evt) {
    if (evt.key === "Escape") {
        const popupActive = document.querySelector('.popup_opened');
        closePop(popupActive);
    }
}
function openPop(pop) {
    pop.classList.add("popup_opened");
    document.addEventListener('keydown', (event) => { esc(event) });
}

function closePop(pop) {
    pop.classList.remove("popup_opened");
    document.removeEventListener('keydown', (event) => { esc(event) });


}

// Я НЕ ПОНИМАЮ ОТКУДА ПОЯВЛЯЕТСЯ ОШИБКА Cannot read property 'classList' of null. ПРИ ОТКРЫТИИ, Я ЖЕ СНАЧАЛА ДАЮ POP СТАТУС OPENNED, А ПРИ НАЖАТИИ ESC УДАЛЯЮ СТАТУС.
