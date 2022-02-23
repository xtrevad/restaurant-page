import './style.css';
import loadHome from './homepage';
import loadFood from './foodstuffs';
import loadDrinks from './drinks';
import loadAbout from './about-us';

const content = document.getElementById('content');

// Tab container
const tabContainer = document.createElement('div');
tabContainer.id = 'tab-container';
content.appendChild(tabContainer);
// Home tab
const homeTab = document.createElement('div');
homeTab.id = 'home';
homeTab.textContent = 'Home';
homeTab.addEventListener('click', () =>
  document.getElementById('page-container').remove()
);
homeTab.addEventListener('click', loadHome);
tabContainer.appendChild(homeTab);
// Food tab
const foodTab = document.createElement('div');
foodTab.id = 'food-menu';
foodTab.textContent = 'Foodstuffs';
foodTab.addEventListener('click', () =>
  document.getElementById('page-container').remove()
);
foodTab.addEventListener('click', loadFood);
tabContainer.appendChild(foodTab);
// Drinks tab
const drinksTab = document.createElement('div');
drinksTab.id = 'drinks-menu';
drinksTab.textContent = 'Beverages';
drinksTab.addEventListener('click', () =>
  document.getElementById('page-container').remove()
);
drinksTab.addEventListener('click', loadDrinks);
tabContainer.appendChild(drinksTab);
// About Us tab
const aboutTab = document.createElement('div');
aboutTab.id = 'about-us';
aboutTab.textContent = 'About Us';
aboutTab.addEventListener('click', () =>
  document.getElementById('page-container').remove()
);
aboutTab.addEventListener('click', loadAbout);
tabContainer.appendChild(aboutTab);

loadHome();
// loadFood();
