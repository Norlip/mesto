const enableValidation = {
    inputAddSelector: ".popup-add__input",
    inputEditSelector: ".popup-edit__input",
    inactiveButtonClass: 'popup__button_invalid',
    errorClass: 'invalid'
};

// Совершенно не понимаю зачем это, для чего это и как это правльно реализовать. В задании очень плохо обьяснено. 


function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(enableValidation.errorClass);

}
function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(enableValidation.errorClass);

}

function check(form, input) {

    if (!input.validity.valid) {
        showError(form, input);
    }
    else {
        hideError(form, input);

    }

}

function setButton(button, isActive) {

    if (isActive) {
        button.classList.remove(enableValidation.inactiveButtonClass);
        button.disabled = false;
    }
    else {
        button.classList.add(enableValidation.inactiveButtonClass);
        button.disabled = true;

    }

}

inputAdd = document.querySelectorAll(enableValidation.inputAddSelector);
inputEdit = document.querySelectorAll(enableValidation.inputEditSelector);

inputAdd.forEach((input) => {
    input.addEventListener("input", (evt) => {
        check(formAddElement, input);
        setButton(addFormButton, formAddElement.checkValidity());

    });

});

inputEdit.forEach((input) => {
    input.addEventListener("input", (evt) => {
        check(formEditElement, input);
        setButton(editFormButton, formEditElement.checkValidity());

    });

});


