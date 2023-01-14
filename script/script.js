"use strict";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("javascript");
const php = document.getElementById("php");
const beginner = document.getElementById("beginner");
const intermediate = document.getElementById("intermediate");
const advanced = document.getElementById("advanced");
const reference = document.getElementById("reference");
const comments = document.getElementById("comments");
const hidden = document.getElementById("hidden");
const btClear = document.getElementById("bt-clear-form");


// it clears the form programatically
btClear && btClear.addEventListener("click", e => {
    e.preventDefault();
    name.value = "";
    email.value = "";
    password.value = "";
    html.checked = false;
    css.checked = false;
    js.checked = false;
    php.checked = false;
    beginner.checked = false;
    intermediate.checked = false;
    advanced.checked = false;
    reference.selectedIndex = 0;
    comments.value = "";
    hidden.style.display = "none";
    name.focus();
});


reference && reference.addEventListener("click", e => {
    if (reference.selectedIndex === 8 || reference.selectedIndex === 9)
        hidden.style.display = "flex";
    else
        hidden.style.display = "none";
});