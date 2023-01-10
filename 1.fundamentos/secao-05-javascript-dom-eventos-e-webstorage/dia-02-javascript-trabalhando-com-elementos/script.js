//Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

//Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.id = 'main-content';
document.body.appendChild(mainContent);

//Adicione a tag section com a classe center-content como 
//filho da tag main criada no passo 2;
const main = document.getElementById('main-content');
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
main.appendChild(centerContent);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const center = document.getElementsByClassName('center-content')[0];
const centerParagraph = document.createElement('p');
centerParagraph.innerText = 'Texto Provisório, Texto Provisório, Texto Provisório, Texto Provisório, Texto Provisório.'
center.appendChild(centerParagraph);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2
const leftContent = document.createElement('section');
leftContent.className ='left-content';
main.appendChild(leftContent);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.className ='right-content';
main.appendChild(rightContent);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 
//e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, 
//ou seja, um, dois, três, … como valores da lista. 
//Essa lista deve ser filha do section criado no passo 6;
const elementUl = document.createElement('ul');
rightContent.appendChild(elementUl);
const arrayNumbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let index = 0; index < arrayNumbers.length; index += 1) {
    const creatLi = document.createElement('li');
    creatLi.innerHTML = arrayNumbers[index];
    elementUl.appendChild(creatLi);
};

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index +=1) {
    const createH3 = document.createElement('h3');
    createH3.innerText = 'show tag ' + index;
    main.appendChild(createH3);
};

//Adicione a classe title na tag h1 criada;
elementH1.className = 'title';