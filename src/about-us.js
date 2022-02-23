import personPng from './assets/person.png';

function loadAbout() {
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  content.appendChild(pageContainer);
  // Title
  const title = document.createElement('h1');
  title.textContent = 'You have come too far';
  pageContainer.appendChild(title);
  // Meet the team
  const meet = document.createElement('p');
  meet.id = 'meet';
  meet.textContent = 'Now you must meet the team';
  pageContainer.appendChild(meet);
  // The Team
  const theTeam = new Image();
  theTeam.id = 'the-team';
  theTeam.src = personPng;
  pageContainer.appendChild(theTeam);
  //
}
export default loadAbout;
