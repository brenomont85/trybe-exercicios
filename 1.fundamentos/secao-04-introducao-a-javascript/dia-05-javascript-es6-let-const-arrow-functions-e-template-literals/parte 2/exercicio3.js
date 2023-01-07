//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
}
  
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));