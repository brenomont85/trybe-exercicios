const handleSubmit = (event) => {
    event.preventDefault();
};

const clearFields = () => {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if(formElements[index].type === 'radio' || formElements[index].type === 'checkbox'){
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
};

const enableSubmit = () => {
    const submitBtn = document.getElementById('submit-btn');
    const agreement = document.getElementById('agreement');
    submitBtn.disabled = !agreement.checked;
};

window.onload = () => {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.getElementById('submit-btn')
    submitBtn.addEventListener('click', handleSubmit);
    const agreement = document.getElementById('agreement');
    agreement.addEventListener('change', enableSubmit);
};
