const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpBtn = document.querySelector('#surprise-btn');
const image = document.querySelector('img');

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
const CAT_API_URL = 'https://aws.random.cat/meow';

dogBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const dogs = fetch(DOG_API_URL);

  dogs
    .then((result) => result.json())
    .then((data) => {
      image.src = data.message;
    });
});
