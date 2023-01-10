//Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

//Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.id = 'main-content';
document.body.appendChild(mainContent);