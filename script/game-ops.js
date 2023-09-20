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

/*
   concatQuerPar function = concatenate a query parameter from a series of
   search terms
   function combines strings together into a way that is understandable by
   a server API. Intended use is alongside a fetch function
*/

const concatQuerPar = function(arrayOfParams)
{
    let finalQuery = `?`;
    // craft a query of concatenated query parameters
    for (let i = 0; i < arrayOfParams.length; i++)
    {
        if (i > 0)
        {
            finalQuery += `&`; // add an ampersand if/f more items to loop
                               // thru AND query isn't a singleton
        }
        finalQuery += arrayOfParams[i]; // add the ith param to our query
    }
    console.log(finalQuery); // test output for finalQuery
}

/*
   rawgFetch function = fetch a json response based on search param
*/
const rawgFetch = function(queryParam, url)
{
    
} // end rawgFetch

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTING
// comb document for element to append a button to, for testing

const testBtnEl = document.getElementById(`testing-btn`);

testBtnEl.addEventListener(`click`, function()
{

} // end function
);

// find body element
const bodyEl = document.getElementsByTagName(`body`); // find body element

// append a child button to the last child of body

// give the button an id that we can target

// set the button as a variable

// add an event listener to the button that will fetch when clicked

// END TESTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
