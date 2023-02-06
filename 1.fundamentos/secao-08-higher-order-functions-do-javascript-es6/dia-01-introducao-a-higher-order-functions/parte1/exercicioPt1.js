//primeiro exerício:

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),  
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const emailGenerator = (string) => {
    const emailId = string.toLowerCase().split(' ').join('_');
    return `${emailId}@trybe.com`
};

console.log(newEmployees(emailGenerator));

//conclui exercicio1 da parte 1

//exercício

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

const numberChecker = (myNumber, number) => myNumber === number;

console.log(lotteryResult(2, numberChecker));

//conclui exercício 2

//exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gradeResult = (expected, actual, callback) => {
  const result = callback(expected, actual);
  return `A Nota é: ${result}`;
};

const verifyAnswer = (arr1, arr2) => {
  let grade = 0;
  for (let index in arr1) {
    if(arr2[index] === 'N.A') {
      grade = grade;
    } else if (arr1[index] === arr2[index]) {
      grade += 1;
    } else {
      grade -= 0.5;
    }
  }

  return grade;
};

console.log(gradeResult(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswer));

//conclui exercício 3