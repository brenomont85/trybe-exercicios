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