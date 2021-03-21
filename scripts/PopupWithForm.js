import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {

    constructor(popup, callBack, selectorList, selecotrForm) {

        super(popup)
        this._popup = document.querySelector(popup);
        this._callBack = callBack;
        this._form = document.querySelector(selecotrForm)
        this._list = Array.from(this._form.querySelectorAll(selectorList));
        this._button = this._popup.querySelector(".popup__button");

    }

    _getInputValues() {

        const inputValues = {};
        this._list.forEach((item) => {
            inputValues[item.name] = item.value;
        });
        return inputValues;

    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputValues(), evt);


        });
    }


    close() {
        super.close();
        this._list.forEach((input) => {
            input.value = '';
        });
    }



}