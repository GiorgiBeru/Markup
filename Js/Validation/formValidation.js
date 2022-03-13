//Variables for all of the inputs in the form

const form = document.querySelector("form[name='checkout-form']"),
    nameInput = document.querySelector("input[name='name']");
emailInput = document.querySelector("input[name='email']");
phoneInput = document.querySelector("input[name='phone']");
addressInput = document.querySelector("input[name='address']");
cityInput = document.querySelector("input[name='city']");
zipCodeInput = document.querySelector("input[name='zipCode']");
countryInput = document.querySelector("input[name='country']");
accountInput = document.querySelector("input[name='account']");
pinInput = document.querySelector("input[name='pin']");

// array of inputs, this is needed to loop through all inputs and reset borders
let inputFields = [
    nameInput,
    emailInput,
    phoneInput,
    addressInput,
    cityInput,
    zipCodeInput,
    countryInput,
    accountInput,
    pinInput,
];

let isFormValid = false;
let isValidationOn = false;

// regex's for form validation

function isValidName(elm) {
    var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return nameRegex.test(elm);
}

function isValidEmail(elm) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(elm)
}

function isValidPhoneNumber(elm) {
    var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g; 
    return phoneRegex.test(elm)
}

function isValidZipCode(elm) {
    var zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return zipCodeRegex.test(elm);
}

function isValidAccNo(elm) {
    var numberRegex = /\d+/g; 
    return numberRegex.test(elm)
}

// functions to either validate the input or invalidate the input

const invalidateInput = (elm) => {
    elm.style.border = "1px solid red";
    elm.previousElementSibling.querySelector(".error-message").style.display =
        "block";
};

const validateInput = (elm) => {
    elm.style.border = "1px solid #D87D4A";
    elm.previousElementSibling.querySelector(".error-message").style.display =
        "none";
};

// The below function will be called on click to validate all of the input fields within the form

const validateAllInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputFields.forEach(validateInput);

    if (!isValidName(nameInput.value)) {
        invalidateInput(nameInput);
        isFormValid = false;
    }

    if(!isValidEmail(emailInput.value)){
        invalidateInput(emailInput); 
        isFormValid = false;
    }

    if(!isValidPhoneNumber(phoneInput.value) || phoneInput.value.length < 11){
        invalidateInput(phoneInput); 
        isFormValid = false;
    }

    //I have not set up a regex for addresses due to the inaccuracy of it
    //I would recommend using something like smartystreets for reliability 

    if(addressInput.value.length < 7){
        invalidateInput(addressInput); 
        isFormValid = false
    }


    if (!isValidZipCode(zipCodeInput.value)){
        invalidateInput(zipCodeInput);
        isFormValid = false;
    }

    //I have not set up a regex for city due to the inaccuracy of it
    //I would recommend using something like smartystreets for reliability 

    if(cityInput.value.length < 7){
        invalidateInput(cityInput); 
        isFormValid = false
    }

    //I have not set up a regex for countries due to the inaccuracy of it
    //I would recommend using something like smartystreets for reliability 

    if(countryInput.value.length < 4){
        invalidateInput(countryInput); 
        isFormValid = false
    }

    const eMoneyPaymentType = document.querySelector(".e-money"); 
    if(eMoneyPaymentType.classList.contains("selected")){

        if(!isValidAccNo(accountInput.value) || accountInput.value.length !== 9){
            invalidateInput(accountInput); 
            isFormValid = false
        }
        
        if(pinInput.value.length !== 4){
            invalidateInput(pinInput);
            isFormValid = false
        }
    }
};


for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", validateAllInputs);
}


const payBtn = document.querySelector(".pay-btn");


payBtn.addEventListener("click", () => {
    isValidationOn = true;
    validateAllInputs();
    if (isFormValid) {
        form.reset();
        for (var i = 0; i < inputFields.length; i++) {
            inputFields[i].style.border = "1px solid #cfcfcf";
        }
        const fadedBg = document.querySelector(".order-complete-faded-bg");
        fadedBg.style.display = "block"; 
        document.querySelector(".order-complete").style.display = "flex";
        document.body.style.overflowY = "hidden";
    }
});
