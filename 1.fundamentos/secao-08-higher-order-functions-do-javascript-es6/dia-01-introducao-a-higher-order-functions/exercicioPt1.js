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


//conclui exercício 2