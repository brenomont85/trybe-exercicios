import validator from 'validator';

const inputValue = document.getElementById('value');
const validationButton = document.getElementById('button');
const selector = document.getElementById('option');
const outputText = document.getElementById('answer');

validationButton.addEventListener('click', (event) => {
  event.preventDefault();

  const valueValidation = {
    cpf: validator.isTaxID(inputValue.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputValue.value),
    email: validator.isEmail(inputValue.value),
    uuid: validator.isUUID(inputValue.value, 4),
    url: validator.isURL(inputValue.value),
  };

  outputText.innerHTML = `A validação retornou ${valueValidation[selector.value]}`;
});
