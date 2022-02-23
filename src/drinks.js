import fogPng from './assets/fog.png';
import juicePng from './assets/juice.png';
import coffeePng from './assets/coffee.png';

function loadDrinks() {
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  content.appendChild(pageContainer);
  // Menu title
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Beverages';
  pageContainer.appendChild(menuTitle);
  // Juice
  const juice = document.createElement('div');
  pageContainer.appendChild(juice);
  const juiceTitle = document.createElement('h2');
  juiceTitle.textContent = 'Juice: $5.50';
  juice.appendChild(juiceTitle);
  const juiceImg = new Image();
  juiceImg.src = juicePng;
  juice.appendChild(juiceImg);
  const juiceText = document.createElement('p');
  juiceText.textContent =
    'A refreshing splash of coloured, flavoured juice! Served tepid, with or without pulp (at our discretion). Cup: +$2';
  juice.appendChild(juiceText);
  // Fog
  const fog = document.createElement('div');
  pageContainer.appendChild(fog);
  const fogTitle = document.createElement('h2');
  fogTitle.textContent = 'Thick Fog: $3';
  fog.appendChild(fogTitle);
  const fogImg = new Image();
  fogImg.src = fogPng;
  fog.appendChild(fogImg);
  const fogText = document.createElement('p');
  fogText.textContent =
    'Quench your thirst with a delicious, thick fog. 99% water. Environmentally friendly packaging.';
  fog.appendChild(fogText);
  // Coffee
  const coffee = document.createElement('div');
  pageContainer.appendChild(coffee);
  const coffeeTitle = document.createElement('h2');
  coffeeTitle.textContent = 'Caffè Latte: $4';
  coffee.appendChild(coffeeTitle);
  const coffeeImg = new Image();
  coffeeImg.src = coffeePng;
  coffee.appendChild(coffeeImg);
  const coffeeText = document.createElement('p');
  coffeeText.textContent =
    'Single origin 100% Arabica coffee, roasted in-house. We achieve our signature texture by steaming custard instead of milk. Non-dairy custard $9 extra.';
  coffee.appendChild(coffeeText);
}

export default loadDrinks;
