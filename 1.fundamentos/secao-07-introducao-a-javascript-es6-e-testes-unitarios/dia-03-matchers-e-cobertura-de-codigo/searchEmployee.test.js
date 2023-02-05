const {professionalBoard, searchEmployee} = require('./searchEmployee');

describe('Verifica funcionamento de função searchEmployee', () => {
    it('Verifica se função searchEmployeeExiste e se é um função', () => {
        expect(searchEmployee).toBeDefined();
        expect(typeof searchEmployee).toBe('function');
    })

    it('Verifica se a função retorna o primeiro nome caso seja informado o numero do id e a chave firstName como parametros/argumentos', () => {
        const actual = searchEmployee('1256-4', 'firstName');
        const expected = 'Linda';

        expect(actual).toBe(expected);
    })
    
    it('Verifica se a função retorna o ultimo nome caso seja informado o numero do id e a chave lastName como parametros/argumentos', () => {
        const actual = searchEmployee('9852-2-2', 'lastName');
        const expected = 'Cook';

        expect(actual).toBe(expected);
    })

    it('Verifica se a função retorna um array de especialidades caso seja informado como parametro o numero da id e a chave specialities', () => {
        expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    })
});
