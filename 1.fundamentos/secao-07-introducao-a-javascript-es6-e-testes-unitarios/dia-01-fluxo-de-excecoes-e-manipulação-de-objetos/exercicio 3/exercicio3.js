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

const getValueByPosition = (object, position) => Object.values(object)[position];

console.log(getValueByPosition(lesson1, 0));
console.log(getValueByPosition(lesson2, 0));
console.log(getValueByPosition(lesson3, 2));
console.log(getValueByPosition(lesson1, 3));

const verifyEntries = (object, key, value) => {
    const entries = Object.entries(object);
    let sameEntry = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) {
            sameEntry = true;
        } 
    }
    return sameEntry;
};

console.log(verifyEntries(lesson1, 'turno', 'manhã'));
console.log(verifyEntries(lesson1, 'turno', 'noite'));
console.log(verifyEntries(lesson3, 'turno', 'noite'));
console.log(verifyEntries(lesson3, 'materia', 'Maria Clara'));

const getNumberOfStudentsMath = (object) => {
    let total = 0;
    const keys = Object.keys(object);
    for (index in keys) {
      if(object[keys[index]].materia === 'Matemática'){
      total += object[keys[index]].numeroEstudantes;
      }
    }
    return total;
};

console.log(getNumberOfStudentsMath(allLessons));

const info = (object, name) => {
    const lessons = [];
    let students = 0;
    const values = Object.values(object);
    for (let index in values) {
        if (values[index].professor === name) {
            lessons.push(values[index].materia);
            students += values[index].numeroEstudantes;
        }
    }
    return { aulas: lessons, estudantes: students};
};

const createReport = (object, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, info(object, name));
    return report;
};

console.log(createReport(allLessons, 'Maria Clara'));
console.log(createReport(allLessons, 'Carlos'));
