let productVal = (inputField, errormessage) => {
    let format = /^[a-zA-Z0-9_]+$/;
    if (inputField.value.match(format) || inputField > 2) {
        errormessage.innerHTML = '';
    } else {
        errormessage.innerHTML = "Must be letters and/or numbers only";
        errormessage.style.color = 'red';
        errormessage.style.fontSize = '12px';
    }
}