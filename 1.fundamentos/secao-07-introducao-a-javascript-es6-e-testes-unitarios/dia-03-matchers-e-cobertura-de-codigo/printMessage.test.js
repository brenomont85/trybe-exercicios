const {info, printMessage} = require('./printMessage');

describe('Verfifca se funcionamento de função printMessage', () => {
    it('Verfica se a onjeto info possui a chave "personagem"', () => {
        expect(info).toHaveProperty('personagem');
    })

    it('Verifica se a função printMessage possui o retonro esperado', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
        expect(printMessage(info)).toMatch(info.personagem);
    })

    it('Verfica se caso não seja informado um objeto, ou se objeto não conter a chave "personagem", a função lança um erro', () => {
        const newInfo = {
            nome: 'Margarida',
            origem: 'Pato Donald',
            nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        }
        expect(() => {printMessage()}).toThrowError('objeto inválido');
        expect(() => {printMessage(newInfo)}).toThrowError('objeto inválido');
    })
});