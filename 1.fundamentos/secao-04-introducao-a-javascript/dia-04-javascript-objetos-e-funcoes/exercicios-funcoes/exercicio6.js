//Crie uma função que receba um número natural (número inteiro não negativo) N 
//e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function sumNumber (number) {
    let n = 0;
    for (let index = 0; index <= number; index+= 1) {
        n += index;
    }
    return n;
}

console.log(sumNumber(5));