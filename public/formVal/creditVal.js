//Validate buyer Name
let buyerNameVal = (min, buyerField, errorbuyer) => {
    let format = /^[a-zA-Z]+$/;
    if (buyerField.value == 0) {
        errorbuyer.innerHTML = 'Field is required';
        errorbuyer.style.color = '#fc0f14';
        errorbuyer.style.fontSize = '13px';

        return false;
    } else if (!buyerField.value.match(format)) {
        errorbuyer.innerHTML = 'Please enter alphabets only';
        errorbuyer.style.color = '#fc0f14';
        errorbuyer.style.fontSize = '13px';
        return false;

    } else if (buyerField.value.length < min) {
        errorbuyer.innerHTML = 'Must be 3 or more characters';
        errorbuyer.style.color = '#fc0f14';
        errorbuyer.style.fontSize = '13px';
        return false;

    } else {
        errorbuyer.innerHTML = '';
        return true;
    }

}
//Validate NIn Number
let ninNumVal = (min, ninField, ninerror) => {
    let ninformat = /^[A-Z0-9]+$/
    if (ninField.value == 0) {
        ninerror.innerHTML = 'Field is required';
        ninerror.style.color = '#fc0f14';
        ninerror.style.fontSize = '13px';

        return false;
    } else if (!ninField.value.match(ninformat) || ninField.value.length === min) {
        ninerror.innerHTML = 'Enter valid NIN number';
        ninerror.style.color = '#fc0f14';
        ninerror.style.fontSize = '13px';
        return false;
    } else {
        ninerror.innerHTML = '';
        return true;
    }
}
//validate Contact Field
let contactVal = (min, contactField, contacterror) => {
    let phoneformat = /[0-9]+$/;

    if (contactField.value.length == 0) {
        contacterror.innerHTML = 'Field is required';
        contacterror.style.color = '#fc0f14';
        contacterror.style.fontSize = '13px';
        return false;
    }
    else if (!contactField.value.match(phoneformat) || contactField.value.length < min) {

        contacterror.innerHTML = 'Must be 10 digits example 0751919490';
        contacterror.style.color = '#fc0f14';
        contacterror.style.fontSize = '13px';
        return false;

    } else {
        contacterror.innerHTML = '';
        return true;
    }
}
//validate Location
let locationVal = (min, locationField, locationerror) => {
    let format = /^[A-Z0-9]+$/i
    if (locationField.value == 0) {
        locationerror.innerHTML = 'Field is required';
        locationerror.style.color = '#fc0f14';
        locationerror.style.fontSize = '13px';

        return false;

    } else if (!locationField.value.match(format) || locationField.value.length < min) {
        locationerror.innerHTML = 'Must be 3 or more characters';
        locationerror.style.color = '#fc0f14';
        locationerror.style.fontSize = '13px';
        return false;

    } else {
        errorbuyer.innerHTML = '';
        return true;
    }
}

//validate tonnage
let tonnageVal = (min, tonnageField, tonnageerror) => {
    let tonnageformat = /[0-9]+$/;

    if (tonnageField.value.length == 0) {
        tonnageerror.innerHTML = 'Field is required';
        tonnageerror.style.color = '#fc0f14';
        tonnageerror.style.fontSize = '13px';
        return false;
    }
    else if (!tonnageField.value.match(tonnageformat) || tonnageField.value.length < min) {

        tonnageerror.innerHTML = 'Must be 3 digits and above';
        tonnageerror.style.color = '#fc0f14';
        tonnageerror.style.fontSize = '13px';
        return false;

    } else {
        tonnageerror.innerHTML = '';
        return true;
    }
}

//Validate rate

let rateVal = (min, rateField, rateerror) => {
    let rateformat = /[0-9]+$/;

    if (rateField.value.length == 0) {
        rateerror.innerHTML = 'Field is required';
        rateerror.style.color = '#fc0f14';
        rateerror.style.fontSize = '13px';
        return false;
    }
    else if (!rateField.value.match(rateformat) || rateField.value.length < min) {

        rateerror.innerHTML = 'Must be 3 digits and above';
        rateerror.style.color = '#fc0f14';
        rateerror.style.fontSize = '13px';
        return false;

    } else {
        rateerror.innerHTML = '';
        return true;
    }
}

//Calculate due amount
let dueAmount = () => {

    var tonnage = parseInt(document.getElementById('tonnage').value);
    var rate = parseInt(document.getElementById('rate').value);

    var dueamount = tonnage * rate;
    document.getElementById('dueamount').value = parseInt(dueamount);

}

let agentVal = (min, agentField, agenterror) => {
    let format = /^[a-zA-Z]+$/;
    if (agentField.value == 0) {
        agenterror.innerHTML = 'Field is required';
        agenterror.style.color = '#fc0f14';
        agenterror.style.fontSize = '13px';

        return false;
    } else if (!agentField.value.match(format)) {
        agenterror.innerHTML = 'Please enter alphabets only';
        agenterror.style.color = '#fc0f14';
        agenterror.style.fontSize = '13px';
        return false;

    } else if (agentField.value.length < min) {
        agenterror.innerHTML = 'Must be 3 or more characters';
        agenterror.style.color = '#fc0f14';
        agenterror.style.fontSize = '13px';
        return false;

    } else {
        agenterror.innerHTML = '';
        return true;
    }

}

//Calculate selling price
let sellingPrice = () => {

    let tonnage = parseInt(document.getElementById('tonnage').value); 200
    let rate = parseInt(document.getElementById('rate').value); 300

    let dueamount = tonnage * rate; 
    document.getElementById('sellingprice').value = parseInt(dueamount);

}
