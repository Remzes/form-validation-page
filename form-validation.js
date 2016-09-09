/*
 Date: 3/6/2016
 */

var formValidity = [];
function formValidation() { //Check content of the form whether it has empty inputs or select attributes
    var inputElements = document.querySelectorAll("#form-container input");
    var errorDiv = document.getElementById("errorCheck");
    var selectElements = document.querySelectorAll("select");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;
    try {

        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.border = "1px red solid";
                requiredValidity = false;
            } else {
                currentElement.style.border = "";
            }
        }
        for (var j = 0; j < selectElements.length; j++) {
            currentElement = selectElements[j];
            if (currentElement.selectedIndex === -1) {
                requiredValidity = false;
                currentElement.style.border = "1px red solid";
            }
            else {
                currentElement.style.border = "";
            }
        }
        if (requiredValidity === false) {
            throw "Please, complete all fields";
        }
        formValidity[0] = true;
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (e) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = e;
        formValidity[0] = false;
    }
}

function checkSelect() { //check select attributes again and clear border properties if it is chosen
    var currentElement;
    var selectElements = document.querySelectorAll("select");
    for (var j = 0; j < selectElements.length; j++) {
        currentElement = selectElements[j];
        if (currentElement.selectedIndex === -1) {
            formValidity[1] = false;
            currentElement.style.border = "1px red solid";
        }
        else {
            currentElement.style.border = "";
            formValidity[1] = true;
        }
    }
}


function clearDefaultSelect() { //delete default selected options
    var selectElements = document.querySelectorAll("select");
    for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].selectedIndex = -1;
    }
}

function checkFirstName() { //checking First Name field in the form on the length of input
    var fname = document.getElementById("firstName");
    if (fname.value.length > 15) {
        formValidity[2] = false;
        document.getElementById("finame").innerHTML = "It must be less than 15 letters";
        fname.style.border = "1px red solid";
    } else {
        fname.style.border = "";
        document.getElementById("finame").innerHTML = "";
        formValidity[2] = true;
    }

    if (!fname.value) {
        fname.style.border = "1px red solid";
        formValidity[2] = false;
    }

}

function checkFirstNameBegins() { //checking First Name field in the form on the first letter whether it is uppercase
    var fname = document.getElementById("firstName");
    var arrayOfFname = fname.value.split("");
    if (arrayOfFname[0] === arrayOfFname[0].toLowerCase()) {
        formValidity[3] = false;
        document.getElementById("finame2").innerHTML = "It must begin by upper case letter";
        fname.style.border = "1px red solid";
    }
    else {
        fname.style.border = "";
        document.getElementById("finame2").innerHTML = "";
        formValidity[3] = true;
    }

}
function checkGenderRadio() { //checking if one of two Gender Radio buttons checked
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (!female.checked && !male.checked) {
        formValidity[4] = false;
        document.getElementById("gender-class").style.border = "1px red solid";
        document.getElementById("fm").innerHTML = "Choose your gender";
    }
    else if (female.checked || male.checked) {
        formValidity[4] = true;
        document.getElementById("fm").innerHTML = "";
        document.getElementById("gender-class").style.border = "";
    }
}
function checkWorkingRadio() { //checking if one of two Working Radio buttons checked
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    if (!no.checked && !yes.checked) {
        formValidity[5] = false;
        document.getElementById("job-class").style.border = "1px red solid";
        document.getElementById("job").innerHTML = "Choose your employment status";
    }
    else if (no.checked || yes.checked) {
        formValidity[5] = true;
        document.getElementById("job").innerHTML = "";
        document.getElementById("job-class").style.border = "";
    }
}
function checkLastName() { //checking Last Name field in the form on the length
    var lname = document.getElementById("lastName");
    if (lname.value.length > 15) {
        formValidity[6] = false;
        lname.style.border = "1px red solid";
        document.getElementById("laname").innerHTML = "It must be less than 15 letters";
    }
    else {
        formValidity[6] = true;
        lname.style.border = "";
        document.getElementById("laname").innerHTML = "";
    }
    if (!lname.value) {
        lname.style.border = "1px red solid";
        formValidity[6] = false;
    }
}


function checkLastNameBegins() { //checking Last Name in the field in the form whether it begins by the uppercase letter
    var lname = document.getElementById("lastName");
    var arrayOfLname = lname.value.split("");
    if (arrayOfLname[0] === arrayOfLname[0].toUpperCase()) {
        lname.style.border = "";
        formValidity[7] = true;
        document.getElementById("laname2").innerHTML = "";
    }
    else {
        formValidity[7] = false;
        lname.style.border = "1px red solid";
        document.getElementById("laname2").innerHTML = "It must begin by upper case letter";
    }
}

function checkPassword() { //checking first Password field in the form
    var passwd = document.getElementById("password");
    var confPasswd = document.getElementById("passwordConfirm");
    var counter = 0;
    var passwdArray = passwd.value.split("");
    if (passwd.value.length >= 8 && passwd.value.length <= 12) {
        formValidity[8] = true;
        passwd.style.border = "";
        confPasswd.style.border = "";
        document.getElementById("passwd").innerHTML = "";
        document.getElementById("rules").style.color = "";
    }
    else {
        formValidity[8] = false;
        passwd.style.border = "1px red solid";
        confPasswd.style.border = "1px red solid";
        document.getElementById("passwd").innerHTML = "The password does not comply";
        document.getElementById("rules").style.color = "red";
    }
}

function checkPassword_2() { //Check password whether it has numbers
    var passwd = document.getElementById("password");
    var passwdArray = passwd.value.split("");
    var confPasswd = document.getElementById("passwordConfirm");
    var counter = 0;
    for (var i = 0; i < passwd.value.length; i++) {
        if (!isNaN(passwdArray[i])) {
            counter++;
        }
    }
    if (counter === 0) {
        formValidity[9] = false;
        document.getElementById("passwd2").innerHTML = "The password must contain numbers";
        passwd.style.border = "1px red solid";
        confPasswd.style.border = "1px red solid";
        document.getElementById("rules").style.color = "red";
    }
    else if (counter > 0) {
        document.getElementById("passwd2").innerHTML = "";
        passwd.style.border = "";
        formValidity[9] = true;
        confPasswd.style.border = "";
        document.getElementById("rules").style.color = "";
    }
}

function checkPassword_3() {//Check password whether it has '/' or '.'
    var passwd = document.getElementById("password");
    var confPasswd = document.getElementById("passwordConfirm");
    if (passwd.value.indexOf('/') === -1 && passwd.value.indexOf('.') === -1) {
        passwd.style.border = "1px red solid";
        confPasswd.style.border = "1px red solid";
        document.getElementById("passwd3").innerHTML = "The password must contain '/' and '.'";
        formValidity[10] = false;
        document.getElementById("rules").style.color = "red";
    }
    else {
        passwd.style.border = "";
        formValidity[10] = true;
        confPasswd.style.border = "";
        document.getElementById("passwd3").innerHTML = "";
        document.getElementById("rules").style.color = "";
    }
}

function clearInputAddress() { //clear address input style after validation
    document.getElementById("streetAddress").style.border = "";
}
function clearPostalCode() { //clear postal code input style after validation
    document.getElementById("postalCode").style.border = "";
}
function clearInputCountry() { //clear country input style after validation
    document.getElementById("country").style.border = "";
}
function clearInputCity() { //clear city input style after validation
    document.getElementById("city").style.border = "";
}
function clearInputProvince() { //clear province input style after validation
    document.getElementById("province").style.border = "";
}
function clearInputProgram() { //clear program input style after validation
    document.getElementById("program").style.border = "";
}


function checkConfirmPassword() {//Check whether Password and Confirm Password inputs equal;
    var passwd = document.getElementById("password");
    var confirmPassword = document.getElementById("passwordConfirm");
    if (passwd.value) {
        if (passwd.value === confirmPassword.value) {
            formValidity[11] = true;
            passwd.style.background = "";
            confirmPassword.style.background = "";
            confirmPassword.style.border = "";
            document.getElementById("confirmPasswd").innerHTML = "";
        }
        else {
            formValidity[11] = false;
            passwd.style.background = "orange";
            confirmPassword.style.background = "orange";
            document.getElementById("confirmPasswd").innerHTML = "Passwords don't equal each other";
        }
    }

}

function checkEmail() {//Checking Email input whether it contains '@' or '.'
    var email = document.getElementById("e-mail");
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        email.style.border = "1px red solid";
        document.getElementById("email").innerHTML = "E-mail address does not comply";
        formValidity[12] = false;
    }
    else {
        formValidity[12] = true;
        email.style.border = "";
        document.getElementById("email").innerHTML = "";
    }

}

function checkPhone() { //checking Phone input
    var phone = document.getElementById("phoneNumber");
    document.getElementById("phone2").innerHTML = "";
    phone.style.border = "";
    try {
        if (phone.value.length > 10) throw "Max length of the phone number is 10";
        formValidity[13] = true;
    }
    catch (e) {
        phone.style.border = "1px red solid";
        document.getElementById("phone2").innerHTML = e;
        formValidity[13] = false;
    }

    if (isNaN(phone.value)) {
        phone.style.border = "1px red solid";
        formValidity[14] = false;
        document.getElementById("phone").innerHTML = "It must contain only digits 0-9"
    } else {
        phone.style.border = "";
        formValidity[14] = true;
        document.getElementById("phone").innerHTML = "";
    }

}

function checkPostalCodeFormat() {//Create Postal Code Format for definite countries (Canada and the USA)
    var code = document.getElementById("postalCode");
    var country = document.getElementById("country");
    if (country.value.toLocaleLowerCase() == "canada") {
        code.placeholder = "Format A9A 9A9";
    }
    else if (country.value.toLocaleLowerCase() == "usa" || country.value.toLowerCase() == "the usa") {
        code.placeholder = "Format 99999";
    }
    else {
        code.placeholder = "";
    }
}

function checkPostalCode() {//Check whether format of the Postal Code is right
    var code = document.getElementById("postalCode");
    var country = document.getElementById("country");
    var codeArray = code.value.split("");
    if (country.value.toLocaleLowerCase() == "canada") {
        if (isNaN(codeArray[0]) && !isNaN(codeArray[1]) && isNaN(codeArray[2]) && codeArray[3] === " " && !isNaN(codeArray[4]) && isNaN(codeArray[5]) && !isNaN(codeArray[6])) {
            formValidity[15] = true;
            code.style.border = "";
            document.getElementById("code").innerHTML = ""

        } else {
            formValidity[15] = false;
            code.style.border = "1px red solid";
            document.getElementById("code").innerHTML = "Format must be A9A 9A9";
        }
    }
    else if (country.value.toLocaleLowerCase() == "usa" || country.value.toLowerCase() == "the usa") {
        if (!isNaN(codeArray[0]) && !isNaN(codeArray[1]) && !isNaN(codeArray[2]) && !isNaN(codeArray[3]) && !isNaN(codeArray[4])) {
            formValidity[15] = true;
            code.style.border = "";
            document.getElementById("code2").innerHTML = "";
        } else {
            formValidity[15] = false;
            code.style.border = "1px red solid";
            document.getElementById("code2").innerHTML = "Format must be 99999"
        }
    }
}

function zeroPlaceholder() {
    var instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
        instrBox.value = "";
    }
}

function checkPlaceholder() {
    var instrBox = document.getElementById("instructions");
    if (instrBox.value === "") {
        instrBox.style.color = "rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var instrBox = document.getElementById("postalCode");
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
        if (instrBox.addEventListener) {
            instrBox.addEventListener("focus", zeroPlaceholder, false);
            instrBox.addEventListener("blur", checkPlaceholder, false);
        } else if (instrBox.attachEvent) {
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}

function createEventListeners() { //Create all necessary event listeners
    var form = document.getElementById("form-container");
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var passwd = document.getElementById("password");
    var passwdConfirm = document.getElementById("passwordConfirm");
    var email = document.getElementById("e-mail");
    var phone = document.getElementById("phoneNumber");
    var country = document.getElementById("country");
    var code = document.getElementById("postalCode");
    var selectElements = document.querySelectorAll("select");

    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

    if (fname.addEventListener) {
        fname.addEventListener("change", checkFirstName, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onchange", checkFirstName);
    }

    if (fname.addEventListener) {
        fname.addEventListener("blur", checkFirstNameBegins, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onblur", checkFirstNameBegins);
    }

    if (lname.addEventListener) {
        lname.addEventListener("change", checkLastName, false);
    } else if (lname.attachEvent) {
        lname.attachEvent("onchange", checkLastName);
    }

    if (lname.addEventListener) {
        lname.addEventListener("change", checkLastNameBegins, false);
    } else if (lname.attachEvent) {
        lname.attachEvent("onchange", checkLastNameBegins);
    }

    if (passwd.addEventListener) {
        passwd.addEventListener("change", checkPassword, false);
    } else if (passwd.attachEvent) {
        passwd.attachEvent("onchange", checkPassword);
    }

    if (passwd.addEventListener){
        passwd.addEventListener("change",checkPassword_2, false);
    }else if (passwd.attachEvent){
        passwd.attachEvent("onchange",checkPassword_2);
    }

    if (passwd.addEventListener){
        passwd.addEventListener("change",checkPassword_3, false);
    }else if (passwd.attachEvent){
        passwd.attachEvent("onchange",checkPassword_3);
    }

    if (passwdConfirm.addEventListener) {
        passwdConfirm.addEventListener("change", checkConfirmPassword, false);
    } else if (passwdConfirm.attachEvent) {
        passwdConfirm.attachEvent("onchange", checkConfirmPassword);
    }

    if (email.addEventListener) {
        email.addEventListener("change", checkEmail, false);
    } else if (email.attachEvent) {
        email.attachEvent("onchange", checkEmail);
    }

    if (phone.addEventListener) {
        phone.addEventListener("change", checkPhone, false);
    } else if (phone.attachEvent) {
        phone.attachEvent("onchange", checkPhone);
    }

    if (country.addEventListener) {
        country.addEventListener("change", checkPostalCodeFormat, false);
    } else if (country.attachEvent) {
        country.attachEvent("onchange", checkPostalCodeFormat);
    }

    if (code.addEventListener) {
        code.addEventListener("change", checkPostalCode, false);
    } else if (code.attachEvent) {
        code.attachEvent("onchange", checkPostalCode);
    }



    for (var j = 0; j < selectElements.length; j++) {
        if (selectElements[j].addEventListener) {
            selectElements[j].addEventListener("change", checkSelect, false);
        } else if (selectElements[j].attachEvent) {
            selectElements[j].attachEvent("onchange", checkSelect);
        }
    }

    clearDefaultSelect();
    generatePlaceholder();
}

function validateForm(e) {//Check form and submit it if it does not contain mistakes
    e.preventDefault();

    //formValidy = true;
    formValidation();
    checkFirstName();
    checkLastName();
    checkLastNameBegins();
    checkFirstNameBegins();
    checkPassword();
    checkPassword_2();
    checkPassword_3();
    checkEmail();
    checkPhone();
    checkGenderRadio();
    checkWorkingRadio();
    formValidation();
    //if (formValidity === true) {
    //    document.getElementsByTagName("form")[0].submit();
    //    console.log("good");
    //}
    var counter = 0;
    console.log(formValidity);
    for (var i = 0; i < formValidity.length; i++){
        if (!formValidity[i]){
            counter++;
        }
    }
    if (counter === 0){
        document.getElementsByTagName("form")[0].submit();
    }
}

if (window.addEventListener) {//upload event listeners
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}