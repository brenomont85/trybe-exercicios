const { myRemove } = require('./functions');

describe('Testes da função myRemove', () => {
    it('Verifica se função foi declarada', () => {
        expect(myRemove).toBeDefined();
    })

    it('Verifica se quando informado o item 3, no array [1, 2 , 3 , 4]  a função retorna o array sem o item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifica se quando o informado o item 3, a função ão retorna o array original [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifica se ao passar um item que não está no array, a função retorna o array original', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

});