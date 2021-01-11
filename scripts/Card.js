export class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _like(temple) {
        temple.querySelector(".button_type_like").addEventListener("click", event => {

            event.target.classList.toggle("button_type_like-activ");

        });
    }

    _del(temple) {
        temple.querySelector(".button_type_del").addEventListener("click", event => {
            event.target.closest(".template__li").remove()
        })
    }


    _esc(evt) {
        if (evt.key === "Escape") {
            const popupActive = document.querySelector('.popup_opened');
            this._closePop(popupActive);

        }
    }

    _openPop(pop) {
        pop.classList.add("popup_opened");
        document.addEventListener('keydown', (event) => { this._esc(event) });
    }

    _closePop(pop) {
        pop.classList.remove("popup_opened");
        document.removeEventListener('keydown', (event) => { this._esc(event) });
    }

    _pop(photo) {
        const photoCloseButton = document.querySelector('.popup-photo__close');
        const photoPopup = document.querySelector('.popup-photo');
        const photoPhotoImage = document.querySelector('.popup-photo__image');
        const popupTitle = document.querySelector('.popup-photo__title');

        photo.addEventListener("click", () => {
            this._openPop(photoPopup);
            photoPhotoImage.src = this._link;
            popupTitle.textContent = this._name;

        });

        photoCloseButton.addEventListener("click", (evt) => {
            this._closePop(photoPopup);

        });

    }

    create() {
        const temple = document.querySelector(this._cardSelector).content.cloneNode(true);
        temple.querySelector(".template__name").textContent = this._name;
        const photo = temple.querySelector(".template__photo");
        photo.src = this._link;


        this._like(temple);
        this._del(temple);
        this._pop(photo);


        /* photo.addEventListener("click", () => {
             openPop(photoPopup);
             photoPhotoImage.src = this._link;
             popupTitle.textContent = this._name;
    
         });
    /*
         photoCloseButton.addEventListener("click", (evt) => {
             closePop(photoPopup);
    
         });
    */
        return temple;;

    }


}
