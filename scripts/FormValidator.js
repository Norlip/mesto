export class FormValidator {
    constructor(form, settings) {
        this._form = form;
        this._settings = settings;

    }
    _check(form, input, rest) {

        if (!input.validity.valid) {

            this._showError(form, input, rest);
        }
        else {
            this._hideError(form, input, rest);

        }

    }
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _setButton(button, inputList, rest) {
        if (this._hasInvalidInput(inputList)) {
            button.classList.add(rest.inactiveButtonClass);
            button.disabled = true;


        }
        else {
            button.classList.remove(rest.inactiveButtonClass);
            button.disabled = false;

        }

    }

    _showError(form, input, rest) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(rest.errorClass);
        input.classList.add(rest.inputErrorClass);
    }
    _hideError(form, input, rest) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        error.classList.remove(rest.errorClass);
        input.classList.remove(rest.inputErrorClass);

    }
    _enable({ formSelector, ...rest }) {
        const getFormList = Array.from(document.querySelectorAll(formSelector));
        getFormList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
            this._setEventListeners(formElement, rest);
        })
    };
    _setEventListeners(formElement, rest) {
        const inputList = Array.from(formElement.querySelectorAll(rest.inputSelector));
        const buttonElement = formElement.querySelector(rest.submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._check(formElement, inputElement, rest);
                this._setButton(buttonElement, inputList, rest);
            });
        });
    };

    enableValidation() {
        this._setEventListeners(this._form, this._settings);
    }
}