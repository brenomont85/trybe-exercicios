const {info, printMessage} = require('./printMessage');

describe('Verfifca se funcionamento de função printMessage', () => {
    it('Verfica se a onjeto info possui a chave "personagem"', () => {
        expect(info).toHaveProperty('personagem');
    })

    it('Verifica se a função printMessage possui o retonro esperado', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
    })
});