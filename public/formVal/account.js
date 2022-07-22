//focus on first form
let cursorFocus = () => {
    let pointFocus = document.registration.username.focus();
    return true;
};

//Check if firstname entered is 2 to 14 characters
let validateUser = (min, max, inputField, errorname) => {
    let nameAplhabets = /^[A-Za-z]+$/;
    if (inputField.value.length == 0) {
        errorname.innerHTML = 'User name is required';
        errorname.style.color = '#fc0f14';
        errorname.style.fontSize = '13px';
        inputField.focus();

        return false;
    } else if (!inputField.value.match(nameAplhabets) || inputField.value.length < min || inputField.value.length > max) {
        errorname.innerHTML = 'Must be 3-14 characters long';
        errorname.style.color = '#fc0f14';
        errorname.style.fontSize = '13px';
        inputField.focus();
        return false;
    }
    else {
        //Clear error message;
        errorname.innerHTML = '';

        return true;

    };

}

let validateRole = (errorrole) => {
    let role = document.getElementById('role')
    if (role.value == 'default') {
        errorrole.innerHTML = 'User role is required';
        errorrole.style.color = '#fc0f14';
        errorrole.style.fontSize = '13px';

        return false;
    } else {
        errorrole.innerHTML = '';
        return true;
    }
}
//validate branch

//validate email
let validateEmail = (emailField, erroremail) => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailField.value.lenth == 0) {
        erroremail.innerHTML = 'Email is required';
        erroremail.style.color = '#fc0f14';
        erroremail.style.fontSize = '13px';
        emailField.focus();

        return false;
    }
    if (!emailField.value.match(emailFormat)) {
        //Show error message if it doesn't match
        erroremail.innerHTML = 'Enter valid email format';
        erroremail.style.color = '#fc0f14';
        erroremail.style.fontSize = '13px';
        emailField.focus();
    }
    else {
        //Clear error message;
        erroremail.innerHTML = '';
        return true;

    };
}

//validate password
let validatePassword = (min, passwordField, errorpassword) => {
    let passwordLength = /^[a-zA-Z0-9!@#$%^&*]+$/;
    if (passwordField.value.lenth == 0) {
        errorpassword.innerHTML = 'Password is required';
        errorpassword.style.color = '#fc0f14';
        errorpassword.style.fontSize = '13px';
        passwordField.focus();

        return false;

    } else if (!passwordField.value.match(passwordLength) || passwordField.value.length < min) {
        //Show error message if it doesn't match
        errorpassword.innerHTML = 'Must be 6 or more characters strong';
        errorpassword.style.color = '#fc0f14';
        errorpassword.style.fontSize = '13px';
        passwordField.focus();

        return false;
    }
    else {
        //Clear error message;
        errorpassword.innerHTML = '';
        return true;

    };

}

//Comfirm password
let comfirmPassword = (confirmField, errorcomfirmpassword) => {
    let passwordmatch = document.getElementById('password')
    if (passwordmatch.value === confirmField.value) {
        errorcomfirmpassword.innerHTML = '';
        return true;

    } else {
        errorcomfirmpassword.innerHTML = 'Passwords do not match';
        errorcomfirmpassword.style.color = '#fc0f14';
        errorcomfirmpassword.style.fontSize = '13px';

        return false;
    }
}

//On Submitting Registration
let onSubmit = (inputField, selectField, emailField, passwordField) => {
    let name = inputField.value.length;
    let role = selectField.value;
    let email = emailField.value.length;
    let password = passwordField.value.length
    if (name == 0 || role == 0 || email == 0 || password == 0) {
        name.style.border = '2px solid #fc0f14';
        role.style.border = '2px solid #fc0f14';
        email.style.border = '2px solid #fc0f14';
        password.style.border = '2px solid #fc0f14';

        return false;

    } else {
        return true;
    }
}



//PROCUREMENT FIELDS
//product name
let produceNameVal = (min, nameField, errormessage) => {
    let format = /^[a-zA-Z]+$/;
    if (nameField.value == 0) {
        errormessage.innerHTML = 'Field is required';
        errormessage.style.color = '#fc0f14';
        errormessage.style.fontSize = '13px';

        return false;
    } else if (!nameField.value.match(format)) {
        errormessage.innerHTML = 'Please enter alphabets only';
        errormessage.style.color = '#fc0f14';
        errormessage.style.fontSize = '13px';
        return false;

    } else if (nameField.value.length < min) {
        errormessage.innerHTML = 'Must be 3 or more characters';
        errormessage.style.color = '#fc0f14';
        errormessage.style.fontSize = '13px';
        return false;

    } else {
        errormessage.innerHTML = '';
        return true;
    }

}

//validate product type
let produceType = (errortype) => {

    if (option.value == "default") {
        errortype.innerHTML = 'Please select an option';
        errortype.style.color = '#fc0f14';
        errortype.style.fontSize = '13px';

        return false;
    } else {
        errortype.innerHTML = '';
        return true;
    }
}



//product type

let dealerName = (min, nameField, errordealer) => {
    let format = /^[a-zA-Z0-9_]+$/;
    if (nameField.value == 0) {
        errordealer.innerHTML = 'Field is required';
        errordealer.style.color = '#fc0f14';
        errordealer.style.fontSize = '13px';

        return false;
    } else if (!nameField.value.match(format)) {
        errordealer.innerHTML = 'Please enter alphabets only';
        errordealer.style.color = '#fc0f14';
        errordealer.style.fontSize = '13px';
        return false;

    } else if (nameField.value.length < min) {
        errordealer.innerHTML = 'Must be 3 or more characters';
        errordealer.style.color = '#fc0f14';
        errordealer.style.fontSize = '13px';
        return false;

    } else {
        errordealer.innerHTML = '';
        return true;
    }

}


//Buying Price validation
let priceVal = (min, priceField, errorprice) => {
    let format = /^[0-9]+$/;
    if (priceField.value.length == 0) {
        errorprice.innerHTML = 'Field is required';
        errorprice.style.color = '#fc0f14';
        errorprice.style.fontSize = '13px';

        return cost;
    }
    else if (!priceField.value.match(format)) {

        errorprice.innerHTML = 'Please enter digits only';
        errorprice.style.color = '#fc0f14';
        errorprice.style.fontSize = '13px';
        return false;

    } else if (priceField.value.length < min) {
        errorprice.innerHTML = 'Must be five or more digits';
        errorprice.style.color = '#fc0f14';
        errorprice.style.fontSize = '13px';
        return false;

    } else {
        errorprice.innerHTML = '';
        return true;
    }
}

//Tonnage validation
let tonnageVal = (min, tonnageField, errortonnage) => {
    let format = /^[0-9]+$/;
    if (tonnageField.value.length == 0) {
        errortonnage.innerHTML = 'Field is required';
        errortonnage.style.color = '#fc0f14';
        errortonnage.style.fontSize = '13px';
        return false;
    }
    else if (!tonnageField.value.match(format)) {

        errortonnage.innerHTML = 'Please enter digits only';
        errortonnage.style.color = '#fc0f14';
        errortonnage.style.fontSize = '13px';
        return false;

    } else if (tonnageField.value.length < min) {
        errortonnage.innerHTML = 'Must be three or more digits';
        errortonnage.style.color = '#fc0f14';
        errortonnage.style.fontSize = '13px';
        return false;

    } else {
        errorprice.innerHTML = '';
        return true;
    }
}

//validate Selling Price

let sellingVal = (min, sellingField, errorselling) => {
    let format = /^[0-9]+$/;
    if (sellingField.value.length == 0) {
        errorselling.innerHTML = 'Field is required';
        errorselling.style.color = '#fc0f14';
        errorselling.style.fontSize = '13px';

        return cost;
    }
    else if (!sellingField.value.match(format)) {

        errorselling.innerHTML = 'Please enter digits only';
        errorselling.style.color = '#fc0f14';
        errorselling.style.fontSize = '13px';
        return false;

    } else if (sellingField.value.length < min) {
        errorselling.innerHTML = 'Must be five or more digits';
        errorselling.style.color = '#fc0f14';
        errorselling.style.fontSize = '13px';
        return false;

    } else {
        errorselling.innerHTML = '';
        return true;
    }
}

//Validate phone
let phoneVal = (min, phoneField, errorphone) => {
    let phoneformat = /[0-9]+$/;
    let unit = 'UGX'
    if (phoneField.value.length == 0) {
        errorphone.innerHTML = 'Field is required';
        errorphone.style.color = '#fc0f14';
        errorphone.style.fontSize = '13px';
        return false;
    }
    else if (!phoneField.value.match(phoneformat)) {

        errorphone.innerHTML = 'Please enter digits only ';
        errorphone.style.color = '#fc0f14';
        errorphone.style.fontSize = '13px';
        return false;

    } else if (phoneField.value.length < min) {
        errorphone.innerHTML = 'Must be 10 digits example 0751919490';
        errorphone.style.color = '#fc0f14';
        errorphone.style.fontSize = '13px';
        return false;

    } else {
        errorphone.innerHTML = '';
        return true;
    }
}
