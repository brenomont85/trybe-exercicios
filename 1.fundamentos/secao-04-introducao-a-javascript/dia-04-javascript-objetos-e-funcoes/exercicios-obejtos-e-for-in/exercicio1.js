let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// mensagem de boas vindas a margarida
console.log('Bem-vinda, '+ info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’.
//Imprima o objeto no console
info.recorrente = 'Sim';

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.
for(let properties in info) {
    console.log(properties);
}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for(let properties in info) {
    console.log(info[properties]);
}