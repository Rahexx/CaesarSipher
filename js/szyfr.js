import {
    encrypt
} from './cesar';

const button = document.querySelector("form button");
const text = document.querySelector("form input");
const textAfterEncrypt = document.querySelector("main p");

button.addEventListener("click", function (e) {
    e.preventDefault();
    textAfterEncrypt.textContent = encrypt(text.value.toLowerCase());
    text.value = "";
});