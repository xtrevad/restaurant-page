import tableImg from './assets/table.png';

function loadHome() {
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  content.appendChild(pageContainer);
  //Hero container
  const heroContainer = document.createElement('div');
  heroContainer.id = 'hero-container';
  pageContainer.appendChild(heroContainer);
  //Image
  const heroImg = new Image();
  heroImg.src = tableImg;
  heroContainer.appendChild(heroImg);
  // Heading
  const h1 = document.createElement('h1');
  h1.id = 'header';
  h1.textContent = 'Real food for real people';
  heroContainer.appendChild(h1);
  // Blurb
  const copy = document.createElement('h3');
  copy.id = 'copy';
  copy.textContent =
    'Welcome to The Restaurant! We serve food and drinks; nothing more, nothing less.';
  heroContainer.appendChild(copy);

  // Hours container
  const hoursContainer = document.createElement('div');
  hoursContainer.id = 'hours-container';
  pageContainer.appendChild(hoursContainer);
  // Hours header
  const hoursHead = document.createElement('h2');
  hoursHead.textContent = 'Hours';
  hoursContainer.appendChild(hoursHead);
  // Hours UL
  const hrsList = document.createElement('ul');
  hoursContainer.appendChild(hrsList);
  // Hours content
  const mondayHrs = document.createElement('li');
  mondayHrs.textContent = 'Monday: 5:00am - 3:00pm';
  hrsList.appendChild(mondayHrs);
  const tuesdayHrs = document.createElement('li');
  tuesdayHrs.textContent = 'Tuesday: Closed';
  hrsList.appendChild(tuesdayHrs);
  const wednesdayHrs = document.createElement('li');
  wednesdayHrs.textContent = 'Wednesday: Closed';
  hrsList.appendChild(wednesdayHrs);
  const thursdayHrs = document.createElement('li');
  thursdayHrs.textContent = 'Thursday: 5:00am - 3:00pm';
  hrsList.appendChild(thursdayHrs);
  const fridayHrs = document.createElement('li');
  fridayHrs.textContent = 'Friday: Closed';
  hrsList.appendChild(fridayHrs);
  const saturdayHrs = document.createElement('li');
  saturdayHrs.textContent = 'Saturday: 11:00am - 1:00pm';
  hrsList.appendChild(saturdayHrs);
  const sundayHrs = document.createElement('li');
  sundayHrs.textContent = 'Sunday: 3:00pm - 3:15pm';
  hrsList.appendChild(sundayHrs);

  // Location container
  const locationContainer = document.createElement('div');
  locationContainer.id = 'location-container';
  pageContainer.appendChild(locationContainer);
  // Location header
  const addressHead = document.createElement('h2');
  addressHead.textContent = 'Address';
  locationContainer.appendChild(addressHead);
  // Location
  const locationText = document.createElement('p');
  locationText.textContent = '404 Cherry Grove, Brittons Swamp, TAS 7330';
  locationContainer.appendChild(locationText);
}

export default loadHome;
