import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
    constructor(name, link, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handl = handleCardClick;
    }

    _like(e) {
        e.target.classList.toggle("button_type_like-activ");
    }

    _del(e) {
        e.target.closest(".template__li").remove();
    }

    _handlePreviewPicture() {
        const photoPopup = document.querySelector('.popup-photo');
        const photoPhotoImage = document.querySelector('.popup-photo__image');
        const popupTitle = document.querySelector('.popup-photo__title');

        openPop(photoPopup);
        photoPhotoImage.src = this._link;
        photoPhotoImage.alt = "Фото";
        popupTitle.textContent = this._name;

    }

    _setEventListeners() {

        this._photo.addEventListener('click', () =>
            this._handl(this));
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
        this._photo.alt = "Фото";

        this._setEventListeners();
        return this._element;;

    }


}
