import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

    constructor(popup) {
        super(popup)
        this._image = this._popup.querySelector(".popup-photo__image");

        this._caption = this._popup.querySelector(".popup-photo__title");
    }

    open(data) {
        this._caption.textContent = data.name;
        this._image.src = data.link;
        this._image.alt = data.name;
        super.open()
    }

}