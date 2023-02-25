import Swal from 'sweetalert2';
import './style.css';

const image = document.getElementById('hero-image');
const name = document.getElementById('hero-name');
const button = document.getElementById('sort');

const ACCESS_TOKEN = '10221106259518690';

const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const maxHeroes = 1000;

const randomId = () => Math.floor(Math.random() * maxHeroes);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();
  const superHero = fetch(`${BASE_URL}/${id}`);

  superHero
    .then((result) => result.json())
    .then((data) => {
      image.src = data.image.url;
      name.innerHTML = data.name;
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
