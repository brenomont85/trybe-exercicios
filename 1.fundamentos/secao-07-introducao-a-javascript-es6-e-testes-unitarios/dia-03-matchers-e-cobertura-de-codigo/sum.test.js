const sum = require('./sum');

describe('Verifica funcionamento da função sum', () => {
    it('Verifica se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Verifica se o retorn de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Verifica se função lança um error caso um dos parametros seja uma string', () => {
        expect(() => {sum(4, '5')}).toThrow(Error);
    })

    it('Verifica se função lança um error caso um dos parametros seja uma string', () => {
        expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
    })

});