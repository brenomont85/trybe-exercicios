const {professionalBoard, searchEmployee} = require('./searchEmployee');

describe('Verifica funcionamento de função searchEmployee', () => {
    it('Verifica se função searchEmployeeExiste e se é um função', () => {
        expect(searchEmployee).toBeDefined();
        expect(typeof searchEmployee).toBe('function');
    })
});