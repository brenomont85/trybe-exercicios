//Crie e execute uma função que mude o texto na tag <p>-----</p>, 
//para uma descrição de como você se vê daqui a 2 anos.
const changeText = () => {
   let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Recebi as chaves da minha casa própia, agira tenho um espaço especial para acolher minha família meus animais e uma sala confortavél para continuar me desenvolvendo.';
}
changeText();