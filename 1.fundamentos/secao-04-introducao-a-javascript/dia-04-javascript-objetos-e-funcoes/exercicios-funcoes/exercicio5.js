//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

function mostRepeted (array) {
    let repetitions = 0;
    let repNumber = 0;
    let indexRepNumber = 0;

    for (let index in array) {
        let verifyNumber = array[index];
        for (let index2 in array) {
            if (verifyNumber === array[index2]) {
                repetitions +=1;
            } if (repetitions > repNumber) {
                repNumber = repetitions;
                indexRepNumber = index;
            }
            repetitions = 0;
        }
    }
    return array[indexRepNumber];
};

console.log(mostRepeted([2, 3, 2, 5, 8, 2, 3]));