let word = 'tryber';
let reverse = '';

for (let index = 0; index < word.length; index +=1) {
    reverse += word[word.length - 1 - index];
}

console.log(reverse);
