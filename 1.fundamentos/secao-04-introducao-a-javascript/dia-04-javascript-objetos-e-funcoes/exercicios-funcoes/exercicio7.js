//Crie uma função que receba uma string word e outra string ending. 
//Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.
//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true
//verificaFimPalavra('trybe', 'be');
//Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    let controle = true;
  
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
}
  
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));