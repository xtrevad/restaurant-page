import bigBreakfast from './assets/breakfast.png';
import theApple from './assets/apple.png';
import theC from './assets/croissant.png';
import rBowl from './assets/ramen.png';
import riceBag from './assets/rice.png';

function loadFood() {
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  content.appendChild(pageContainer);
  //Title
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Foodstuffs';
  pageContainer.appendChild(menuTitle);
  // Breakfast
  const breakfast = document.createElement('div');
  pageContainer.appendChild(breakfast);
  const breakfastTitle = document.createElement('h2');
  breakfastTitle.textContent = 'Big Breakfast: $14';
  breakfast.appendChild(breakfastTitle);
  const breakfastImg = new Image();
  breakfastImg.src = bigBreakfast;
  breakfast.appendChild(breakfastImg);
  const breakfastText = document.createElement('p');
  breakfastText.innerHTML =
    'Free-range pancakes topped with butter and our choice of syrup, two bacon strips, and a side of <b>the egg</b>.';
  breakfast.appendChild(breakfastText);
  // Apple
  const a = document.createElement('div');
  pageContainer.appendChild(a);
  const aTitle = document.createElement('h2');
  aTitle.textContent = 'Apple: $8';
  a.appendChild(aTitle);
  const appleImg = new Image();
  appleImg.src = theApple;
  a.appendChild(appleImg);
  const aText = document.createElement('p');
  aText.textContent =
    'Developed in partnership with Trees™. This is a real apple that exists and biting into it causes a satisfying crunch in your mouth.';
  a.appendChild(aText);
  // Croissant
  const c = document.createElement('div');
  pageContainer.appendChild(c);
  const cTitle = document.createElement('h2');
  cTitle.textContent = 'Croissant: €5';
  c.appendChild(cTitle);
  const cImg = new Image();
  cImg.src = theC;
  c.appendChild(cImg);
  const cText = document.createElement('p');
  cText.textContent =
    'This imported croissant is the real deal. It is absolutely bursting to the brim with a brown gel. Bite into the crispy, buttery flake and discover a new you inside this goopy paradise.';
  c.appendChild(cText);
  // Ramen
  const ramen = document.createElement('div');
  pageContainer.appendChild(ramen);
  const ramenTitle = document.createElement('h2');
  ramenTitle.textContent = 'Small Ramen: ¥ 1200';
  ramen.appendChild(ramenTitle);
  const ramenImg = new Image();
  ramenImg.src = rBowl;
  ramen.appendChild(ramenImg);
  const ramenText = document.createElement('p');
  ramenText.textContent =
    "A very small bowl of ramen. It comes with all the trimmings: noodle, spoon, mushrooms, green lines, two halves of an egg, and sticks. Slurp it on down, what's the worst that could happen?";
  ramen.appendChild(ramenText);
  const rice = document.createElement('div');
  pageContainer.appendChild(rice);
  const riceTitle = document.createElement('h2');
  riceTitle.textContent = 'Bag of Rice: $24';
  rice.appendChild(riceTitle);
  const riceImg = new Image();
  riceImg.src = riceBag;
  rice.appendChild(riceImg);
  const riceText = document.createElement('p');
  riceText.textContent =
    'Bag of rice. For convenient snacking on-the-go, each grain is individually wrapped. Great for sharing, or as a guilty pleasure all to yourself!';
  rice.appendChild(riceText);
}

export default loadFood;
