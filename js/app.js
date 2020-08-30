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
  // loops over each section in sections
  for (let i=0; i<sections.length; i++) {
    const sectionName = sections[i].dataset.nav;
    const sectionId = sections[i].id;
    //creates new <li> element in the nav ul
    const tab = document.createElement('li');
    //ammends the innerHTML of li item to include link
    tab.innerHTML = `<a id="nav_${sectionId}" class="menu__link" href="#${sectionId}">${sectionName}</a>`;
    // tab.innerHTML = `<a id="${sectionId}" class="menu__link" href="#${sectionId}">${sectionName}</a>`;
    //appends the finished li to the parent ul
    nav.appendChild(tab);
  }
}

buildNavBar();


// Add class 'active' to section when near top of viewport

function makeActive() {
  for (const section of sections) {
    // if section is in Viewport, add "your-active-class"
    if (inViewport(section) === true) {
      const id = section.getAttribute("id");
      document.querySelector(`#nav_${id}`).classList.add("active");
      addActiveClass(section);
    // if section is not in Viewport, remove "your-active-class"
    } else {
      const id = section.getAttribute("id");
      document.querySelector(`#nav_${id}`).classList.remove("active");
      removeActiveClass(section);
    }
  }
}

// check if the section is in the viewport
function inViewport(section) {
  const sectionOnScreen = section.getBoundingClientRect();
  if (sectionOnScreen.top <= 450 && sectionOnScreen.bottom >= 450) {
    return true;
  } else {
    return false;
  }
}

// function to add 'your-active-class'
function addActiveClass(section) {
  section.classList.add('your-active-class');
}

// function to remove 'your-active-class'
function removeActiveClass(section) {
  section.classList.remove('your-active-class');
}

// Check whether section is active as user scrolls page.
document.addEventListener("scroll", function() {
  makeActive();
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
