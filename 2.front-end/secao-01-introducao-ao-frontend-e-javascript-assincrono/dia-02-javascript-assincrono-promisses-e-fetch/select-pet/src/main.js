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

catBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const cats = fetch(CAT_API_URL);

  cats
    .then((result) => result.json())
    .then((data) => {
      image.src = data.file;
    });
});

surpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  Promise.any([
    fetch(DOG_API_URL),
    fetch(CAT_API_URL),
  ])
    .then((result) => result.json())
    .then((data) => {
      const petURL = data.file || data.message;

      image.src = petURL;
    })

});
