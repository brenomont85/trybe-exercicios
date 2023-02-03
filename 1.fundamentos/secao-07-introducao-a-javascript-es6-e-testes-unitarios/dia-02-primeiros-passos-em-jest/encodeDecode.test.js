const {encode, decode} = require('./functions');

describe('Teste das funções encode e decode', () => {
    it('verifica se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })

    it('Verifica se as vogais a,e,i,o,u são convertisdas em 1,2,3,4,5 respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    })

    it('Verifica se as vogais 1,2,3,4,5 são decodificadas em a,e,i,o,u respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
    })

    it('verifica se outras letras não são convertidas', () => {
        expect(encode('bcdfg')).toBe('bcdfg');
    })

    it('verifica se outros numeros não são decodificados', () => {
        expect(decode('67890')).toBe('67890');
    })

    it('verifica se o tamanho da string original e a string convertida possuem o mesmo tamanho', () => {
        expect(encode('paralelepipedo')).toBe('p1r1l2l2p3p2d4');
        expect(encode('paralelepipedo').length).toBe(14);
    })

    it('verifica se o tamanho da string codificada e a string decodificada possuem o mesmo tamanho', () => {
        expect(decode('p1r1l2l2p3p2d4')).toBe('paralelepipedo');
        expect(decode('p1r1l2l2p3p2d4').length).toBe(14);
    })


});