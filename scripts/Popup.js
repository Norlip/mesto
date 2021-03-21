import { onClickClose } from "../src/index.js"

export class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._closeButton = this._popup.querySelector(".popup__close")
        this._handleEscClose = this._handleEscClose.bind(this);

    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        }
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("click", onClickClose(this._popup))
        document.addEventListener('keydown', this._handleEscClose);

    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("click", onClickClose(this._popup))
        document.removeEventListener('keydown', this._handleEscClose);

    }


    setEventListeners() {
        this._closeButton.addEventListener('click', close)

    }

}
