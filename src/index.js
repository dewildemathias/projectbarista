import './style.css';
import {devineLog} from './js/utility/helpers';
import data from './assets/data/coffees.json';


devineLog('Hey, ik ben een JS file');
const arr = [1, 2,  3];

const ES6Stuff = () => devineLog('Ik kan ES6 stuff aan', ...arr);
ES6Stuff();

const showCoffees = data => {
  const $list = document.querySelector(`.prices__list`);
  data.coffees.forEach(coffee => {
    if (coffee.plantbased === true) {
      const $li = document.createElement('li');
      $li.classList.add('price');
      $li.innerHTML = `
      <a class="price__button" data-id="${coffee.id}">
        <span class="price__button__wrapper">
          <span class="price__button__name">${coffee.name}</span>
          <span class="price__button__amount">&euro; ${coffee.prices.medium}</span>
        </span>
        <span class="price__button__plus">+</span>
      </a>`;
      $list.appendChild($li);
    }
  });
};


const init = () => {
  console.log(data);
  showCoffees(data);
};

init();

// ul waarin list items moeten komen gaan oproepen dmv querySelector
// al de info van coffees zit in niveau dieper in data -> zie console in browser via console.log(data)
// voor elke coffee een list item creeëren
// elk list item de class "price""" toekennen
// de html van dit list item moet het volgende bevatten:
// list item na list item gaan plaatsen
