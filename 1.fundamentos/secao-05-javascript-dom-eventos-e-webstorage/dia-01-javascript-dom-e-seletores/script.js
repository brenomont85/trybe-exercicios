//Crie e execute uma função que mude o texto na tag <p>-----</p>, 
//para uma descrição de como você se vê daqui a 2 anos.
const changeText = () => {
   let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Recebi as chaves da minha casa própia, agira tenho um espaço especial para acolher minha família meus animais e uma sala confortavél para continuar me desenvolvendo.';
}
changeText();

//Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109).

const changeSquareToGreen = () => {
    let yellowSquare = document.getElementsByClassName('main-content')[0];
    yellowSquare.style.backgroundColor = 'rgb(76,164,109)';
}
changeSquareToGreen();

//Crie e execute uma função que mude a cor do quadrado vermelho para branco.

const changeSquareToWhite = () => {
    let redSquare = document.getElementsByClassName('center-content')[0];
    redSquare.style.backgroundColor = 'white';
}
changeSquareToWhite();

//Crie e execute uma função que corrija o texto da tag <h1>.


const correctTitle = () => {
    let title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Exercício 5.1 JavaScript';
}
correctTitle();
