const {info, printMessage} = require('./printMessage');

describe('Verfifca se funcionamento de função printMessage', () => {
    it('Verfica se a onjeto info possui a chave "personagem"', () => {
        expect(info).toHaveProperty('personagem');
    })
});