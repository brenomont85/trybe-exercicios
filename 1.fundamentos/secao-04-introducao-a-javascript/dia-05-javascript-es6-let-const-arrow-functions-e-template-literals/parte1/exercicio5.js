// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

//function numeroAleatorio() {
//    return Math.random()
//  }
const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());

//function hello(nome) {
//    return `Olá, ${nome}!`
//}

const hello = nome => `Olá, ${nome}!`;
let nome = 'Ivan';
 console.log(hello(nome));

//function nomeCompleto(nome, sobrenome) {
//    return `${nome} ${sobrenome}`
//}
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));