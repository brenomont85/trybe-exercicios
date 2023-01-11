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