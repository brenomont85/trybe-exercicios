let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smalestword = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
  
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smalestword.length) {
        smalestword = array[index];
    }
  
}

console.log(biggestWord);
console.log(smalestword);