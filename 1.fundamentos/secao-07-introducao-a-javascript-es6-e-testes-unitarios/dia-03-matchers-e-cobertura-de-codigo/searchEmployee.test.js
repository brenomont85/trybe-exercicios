const {professionalBoard, searchEmployee} = require('./searchEmployee');

describe('Verifica funcionamento de função searchEmployee', () => {
    it('Verifica se função searchEmployeeExiste e se é um função', () => {
        expect(searchEmployee).toBeDefined();
        expect(typeof searchEmployee).toBe('function');
    })

    it('Verifica se a função retorna o primeiro nome caso seja informado o numero do id e a chave FirstName como parametros/argumentos', () => {
        const actual = searchEmployee('1256-4', 'firstName');
        const expected = 'Linda';

        expect(actual).tobe(expected);
});
