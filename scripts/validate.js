
const setEventListeners = (formElement, rest) => {
    const inputList = Array.from(formElement.querySelectorAll(rest.inputSelector));
    const buttonElement = formElement.querySelector(rest.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            check(formElement, inputElement, rest);
            setButton(buttonElement, inputList, rest);
        });
    });
};
const enableValidation = ({ formSelector, ...rest }) => {
    const getFormList = Array.from(document.querySelectorAll(formSelector));
    getFormList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, rest);
    })
};

/*enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
*/


function showError(form, input, rest) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(rest.errorClass);
    input.classList.add(rest.inputErrorClass);
}
function hideError(form, input, rest) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(rest.errorClass);
    input.classList.remove(rest.inputErrorClass);

}

function check(form, input, rest) {

    if (!input.validity.valid) {

        showError(form, input, rest);
    }
    else {
        hideError(form, input, rest);

    }

}
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};
function setButton(button, inputList, rest) {
    if (hasInvalidInput(inputList)) {
        button.classList.add(rest.inactiveButtonClass);
        button.disabled = true;


    }
    else {
        button.classList.remove(rest.inactiveButtonClass);
        button.disabled = false;

    }

}




