
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            check(formElement, inputElement);
            setButton(buttonElement, inputList);
        });
    });
};
const enableValidation = ({ formSelector }) => {
    const getFormList = Array.from(document.querySelectorAll(formSelector));
    getFormList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    })
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});



function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;

}
function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";

}

function check(form, input) {

    if (!input.validity.valid) {
        showError(form, input);
    }
    else {
        hideError(form, input);

    }

}
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};
function setButton(button, inputList) {

    if (hasInvalidInput(inputList)) {
        button.disabled = true;
    }
    else {
        button.disabled = false;

    }

}

//Пришлось самому разбираться. Надеюсь я все правильно понял



