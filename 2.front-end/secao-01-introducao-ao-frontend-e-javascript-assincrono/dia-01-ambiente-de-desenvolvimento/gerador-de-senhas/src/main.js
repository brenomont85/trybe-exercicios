import { nanoid } from 'nanoid';
import "./style.css";
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    displayPassword.innerHTML = nanoid();
});

displayPassword.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});