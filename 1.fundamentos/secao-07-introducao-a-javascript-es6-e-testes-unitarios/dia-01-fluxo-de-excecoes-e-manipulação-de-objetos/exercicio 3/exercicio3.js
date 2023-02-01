const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addShift = (object, key, value) => object[key] = value;

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

const listKeys = (object) => console.log(Object.keys(object));

listKeys(lesson1);
listKeys(lesson2);
listKeys(lesson3);

const objectSize = (object) => console.log(Object.keys(object).length);  

objectSize(lesson1);
objectSize(lesson2);
objectSize(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const sumAllStudents  = (object) => {
   let sum = 0;

   const keys = Object.keys(object);
   for (let index in keys) {
    sum += object[keys[index]].numeroEstudantes;
   }
   
   return sum;
};

console.log(sumAllStudents(allLessons));