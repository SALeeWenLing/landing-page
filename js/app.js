/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildNavBar() {
  //loops over each section in sections
  for(let i=0; i<sections.length; i++){
    const section = sections[i]
    const sectionName = section.dataset.nav;
    const sectionId = section.id;
    //creates new <li> element in the nav ul
    const tab = document.createElement('li');
    //ammends the HTML to include link
    tab.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
    //appends the finished li to the parent ul
    nav.appendChild(tab);
  }
};

buildNavBar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
