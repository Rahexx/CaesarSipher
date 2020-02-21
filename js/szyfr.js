import {
    encrypt
} from './cesar';

const button = document.querySelector("form button");
const text = document.querySelector("form input");

button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(encrypt(text.value));
    console.log(text.value);
    text.value = "";
});