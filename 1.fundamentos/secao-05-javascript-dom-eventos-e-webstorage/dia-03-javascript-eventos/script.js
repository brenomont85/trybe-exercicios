const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
}
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//parte 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createMonthDays(array) {
    const getDayList = document.getElementById('days');
    
    for (let index = 0; index < array.length; index += 1) {
        let day = array[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            getDayList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday';
            getDayList.appendChild(dayItem);
        } else if ( day === 25) {
            dayItem.className = 'day holiday friday';
            getDayList.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            getDayList.appendChild(dayItem);
        }
    }

};

createMonthDays(decemberDaysList);

//parte 2
const createBtn = () => {
    const getBtnElement = document.getElementsByClassName('buttons-container')[0];
    const createBtnElement = document.createElement('button');
    createBtnElement.innerHTML = 'Feriados';
    createBtnElement.id = 'btn-holiday'
    getBtnElement.appendChild( createBtnElement);
};

createBtn();

//parte 3
const holidayDislpay = () => {
    let getHolidayBtn = document.getElementById('btn-holiday');
    let liHolday = document.getElementsByClassName('holiday');
    let color = 'rgb(238,238,238)';
    let newColor = 'pink';

    const changeColorLiH = () => {
        for (index = 0; index < liHolday.length; index += 1) {
            if (liHolday[index].style.backgroundColor === newColor) {
                liHolday[index].style.backgroundColor = color; 
            } else {
                liHolday[index].style.backgroundColor = newColor;
            }
        }
    }
   getHolidayBtn.addEventListener('click', changeColorLiH)
};

holidayDislpay();

//parte 4
const fridayBtn = () => {
    const getBtnElement = document.getElementsByClassName('buttons-container')[0];
    const createFridayBtn = document.createElement('button');
    createFridayBtn.innerHTML = 'Sexta-feira';
    createFridayBtn.id = 'btn-friday';
    getBtnElement.appendChild(createFridayBtn);
};

fridayBtn();

//parte 5
const fridayText = (array) => {
    const getFridayBtn = document.getElementById('btn-friday');
    const getFridayLi = document.getElementsByClassName('friday');
    const fridayText = 'Sextou!';

    const fridayChangeText = () => { 
        for (let index = 0; index < getFridayLi.length; index += 1) {
            if (getFridayLi[index].innerText !== fridayText) {
                getFridayLi[index].innerText = fridayText;
            } else {
                getFridayLi[index].innerText = array[index];
            }
        }
    }
    getFridayBtn.addEventListener('click', fridayChangeText)
};

const decemberFridays = [4, 11, 18, 25];

fridayText(decemberFridays);

//parte 6
const dayMouseOver = () => {
    let days = document.querySelector('#days');
    const zoomIn = (event) => {
        event.target.style.fontSize =' 30px';
        event.target.style.fontWeight = '600';
    }
    days.addEventListener('mouseover', zoomIn);
};

const dayMouseOut = () => {
    let days = document.getElementById('days');
    const zoomOut = (event) => {
        event.target.style.fontSize =' 20px';
        event.target.style.fontWeight = '200';
    }
    days.addEventListener('mouseout', zoomOut);
};

dayMouseOver();
dayMouseOut();

//parte 7
const addTask = (task) => {
    const spanTask = document.createElement('span');
    const getTaskElement = document.getElementsByClassName('my-tasks')[0];
    spanTask.innerText = task;
    getTaskElement.appendChild(spanTask);
};

addTask('projeto');

//parte 8
const addTaskDiv = (color) => {
    const getTaskElement = document.querySelector('.my-tasks');
    const creatTaskDiv = document.createElement('div');

    creatTaskDiv.className = 'task';
    creatTaskDiv.style.backgroundColor = color;
    getTaskElement.appendChild(creatTaskDiv);
};

addTaskDiv('aquamarine');

//parte 9
const selectTask = () => { 
    let getDiv = document.querySelector('.task');

    const selectDiv = (event) => {
        if (event.target.className === 'task selected') {
            event.target.className = 'task';
        } else {
            event.target.className = 'task selected';
        }
    }

    getDiv.addEventListener('click', selectDiv);
};

selectTask();

//parte 10
const setDayColor = () => {
    let taskselected = document.getElementsByClassName('task selected');
    const getDiv = document.getElementsByClassName('task')[0];
    const divColor = getDiv.style.backgroundColor;
    const days = document.getElementById('days');

    const changeDayColor = (event) => {
        let dayColor = event.target.style.color
        if (taskselected.length > 0 && dayColor !== divColor) {
            event.target.style.color = divColor;
        } else {
            event.target.style.color = 'rgb(119,119,119)';
        }
    }
    days.addEventListener('click', changeDayColor);
};

setDayColor();

//parte bonus
const addNewTask = () => {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', () => {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
}
  
addNewTask();
  