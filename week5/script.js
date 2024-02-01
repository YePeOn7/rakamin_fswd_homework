function submitForm() {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const stipend = document.getElementById("stipend").value

    const table = document.getElementById("dataTable");
    const row = table.insertRow(-1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = stipend;

    // --- alternative 1 to add remove button ---- //
    row.insertCell(3).innerHTML = '<button class="btn-custom" onclick="removeRow(this)">Remove</button>';

    //---- alternative 2 to add remove button ---- //
    // const c3 = row.insertCell(3);
    // let button = document.createElement("button");
    // button.classList.add("btn-custom");
    // button.innerHTML = "Remove";
    // button.onclick = function(){
    //     removeRow(this)
    // };
    // c3.appendChild(button);

    // console.log(table);
    // console.log(name);
    // console.log(age);
    // console.log(stipend);
}

function removeRow(button) {
    // console.log("remove row");
    // console.log(button);

    button.parentNode.parentNode.remove();
}

function showTab(id) {
    tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove("tab-active");
        // console.log(tabContent);
    })

    document.getElementById(id).classList.add("tab-active");

    if (id == "form_section") {
        // console.log("form selected");
        document.getElementById("btn-form").classList.add("show-as-active");
        document.getElementById("btn-table").classList.remove("show-as-active");
    }
    else {
        // console.log("table selected");
        document.getElementById("btn-table").classList.add("show-as-active");
        document.getElementById("btn-form").classList.remove("show-as-active");
    }
}

function validateName() {
    return (document.getElementById('name').value.trim().length >= 10);
}

function validateAge() {
    return (document.getElementById('age').value.trim() >= 25);
}

function validateStipend() {
    let stipend = document.getElementById('stipend').value.trim();
    return (stipend >= 100000 && stipend <= 1000000);
}

function nameAlertHandle() {
    // console.log("nameAlertHandle is triggered");
    let name = document.getElementById("name");
    if (validateName()) name.setCustomValidity("");
    else name.setCustomValidity("xxx");
}

function ageAlertHandle() {
    // console.log("ageAlertHandle is triggered");
    let age = document.getElementById("age");
    if (validateAge()) age.setCustomValidity("");
    else age.setCustomValidity("yyy");
}

function stipendAlertHandle() {
    // console.log("stipendAlertHandle is triggered");
    let stipend = document.getElementById("stipend");
    if (validateStipend()) stipend.setCustomValidity("");
    else stipend.setCustomValidity("zzz");
}

function customValidityProcess() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let stipend = document.getElementById("stipend");

    let nameValue = inputName.value.trim();

    if (validateName()) name.setCustomValidity("xxx");
    else name.setCustomValidity("");

    if (validateAge()) age.setCustomValidity("yyy");
    else age.setCustomValidity("");

    if (validateStipend()) stipend.setCustomValidity("zzz");
    else stipend.setCustomValidity("");
}

function validCallback() {
    let successNotification = document.getElementById("successNotification");

    submitForm();
    successNotification.classList.remove("alert-danger");
    successNotification.classList.add("alert-success");
    successNotification.style.display = "block";
    successNotification.innerHTML = "The data has been successfully submitted";

    setTimeout(function () {
        successNotification.style.display = "none";
    }, 3000);
}

function invalidCallback() {
    let successNotification = document.getElementById("successNotification");

    successNotification.classList.remove("alert-success");
    successNotification.classList.add("alert-danger");
    successNotification.style.display = "block";
    successNotification.innerHTML = "The User input is invalid. Please check again";
}

function validate(validCb, invalidCb) {
    let inputName = document.getElementById('name');
    let inputAge = document.getElementById('age');
    let inputStipend = document.getElementById('stipend');

    let nameValid = validateName();
    let ageValid = validateAge();
    let stipendValid = validateStipend();

    // need to call ouside event also to get initial validation message
    nameAlertHandle();
    ageAlertHandle();
    stipendAlertHandle();

    // to update the validation message when user changing the input
    // console.log("add name input event listener");
    inputName.addEventListener("input", function () {
        nameAlertHandle();
    });

    // console.log("add age input event listener");
    inputAge.addEventListener("input", function () {
        ageAlertHandle();
    });

    // console.log("add stipend input event listener");
    inputStipend.addEventListener("input", function () {
        stipendAlertHandle();
    })

    // perform callback when success or fail
    if (nameValid && ageValid && stipendValid) {
        // console.log("valid");
        validCb()
    }
    else {
        // console.log("invalid");
        invalidCb();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var formElement = document.querySelector('form');
    formElement.addEventListener('submit', function (event) {
        // need to show bootstrap validation style
        formElement.classList.add("was-validated");

        // prevent to refresh the page
        event.preventDefault();
        event.stopPropagation();

        validate(validCallback, invalidCallback);
    });
});