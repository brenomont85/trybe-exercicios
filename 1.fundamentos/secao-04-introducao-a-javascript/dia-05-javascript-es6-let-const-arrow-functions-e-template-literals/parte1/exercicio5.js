// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

//function numeroAleatorio() {
//    return Math.random()
//  }
//  console.log(numeroAleatorio());
const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());

//function hello(nome) {
//    return `Olá, ${nome}!`
//}
//let nome = 'Ivan';
//console.log(hello(nome));

const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
 console.log(hello(nome));