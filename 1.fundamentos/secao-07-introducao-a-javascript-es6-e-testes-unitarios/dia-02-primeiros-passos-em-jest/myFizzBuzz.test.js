const { myFizzBuzz } = require('./functions');

describe('Testa a função myFizzBuzz', () => {
    it('Verifica se myFizzBuzz é uma função', () => {
        expect(typeof myFizzBuzz).toBe('function');
    })

    it('Verifica se myFizzBuzz foi definida', () => {
        expect(myFizzBuzz).toBeDefined();
    })

    it('Verifica se ao informar o parametro 15 a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Verifica se ao informar o parametro 9 a função retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })

    it('Verifica se ao informar o parametro 25 a função retorna "buzz"', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    })

    it('Verifica se ao informar o parametro 4 a função retorna o próprio numero', () => {
        expect(myFizzBuzz(4)).toBe(4);
    })

    it('Verifica se ao informar o parametro "whatever" a função retorna false', () => {
        expect(myFizzBuzz("whatever")).toBe(false);
    })

}); 