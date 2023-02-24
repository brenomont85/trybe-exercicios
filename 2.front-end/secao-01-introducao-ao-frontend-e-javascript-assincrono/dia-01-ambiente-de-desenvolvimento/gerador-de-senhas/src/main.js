import { nanoid } from 'nanoid';
import "./style.css";

const passwordBtnEl = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBtnEl.addEventListener('click', ()=> {
    displayPassword.innerHTML = nanoid();
});