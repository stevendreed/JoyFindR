/* game-ops.js
   Steven Reed
   09/19/2023

   this file contains fetch functions which call on the RAWG API

   [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   link to the api:
   https://rawg.io/apidocs
   [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   

*/

// API CONSTANTS
const RAWG_KEY = `aaadbe900b0f429ea88c22d1c7f9badf`;    // key for SDR
const RAWG_URL = `https://api.rawg.io/key=${RAWG_KEY}`; // generic key-authed URL


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTING
// comb document for element to append a button to, for testing

// find body element
const bodyEl = document.getElementsByTagName(`body`); // find body element

// append a child button to the last child of body

// give the button an id that we can target

// set the button as a variable

// add an event listener to the button that will fetch when clicked

// END TESTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++