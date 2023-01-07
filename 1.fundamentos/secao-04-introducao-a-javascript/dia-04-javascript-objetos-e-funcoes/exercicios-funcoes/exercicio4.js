//Crie uma função que receba um array de nomes e retorne o nome com a 
//maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

function longestName (array) {
    let nameLength = 0;
    let name = '';
    for (let index = 0; index < array.length; index += 1) {
        if (nameLength < array[index].length) {
            nameLength = array[index].length;
            name = array[index];
        }
    }
    return name;
;}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
