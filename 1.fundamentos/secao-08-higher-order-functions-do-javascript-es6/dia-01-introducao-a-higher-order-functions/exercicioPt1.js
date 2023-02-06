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
