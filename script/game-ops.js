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
const RAWG_KEY = `?token&key=aaadbe900b0f429ea88c22d1c7f9badf`;    // key for SDR
const RAWG_URL = `https://rawg.io/api/`;

/*
   concatQuerPar function = concatenate a query parameter from a series of
   search terms
   function combines strings together into a way that is understandable by
   a server API. Intended use is alongside a fetch function
*/

// ['game=fallout','tag=shooter']
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
        } // end if
        finalQuery += arrayOfParams[i]; // add the ith param to our query
    } // end for
    console.log(finalQuery); // test output for finalQuery
} // end concatQuerPar

/*
   rawgFetch function = fetch a json response based on search param
*/
const rawgFetch = function(queryParam, url, key)
{
    // log fetch for testing purposes
    console.log(url+queryParam+key);

    fetch(url+queryParam+key)
    .then(function(response)
    {
        return response.json();
    }); // end then
} // end rawgFetch

/*
   getGameByName function = fetch request to the RAWG API which passes argument
   as a query parameter to the server.
   accepts a game name argument - function error handles for empty, erroneous spaces,
   and unacceptable special characters (out of ASCII range, endl, tabs, etc)
   returns a JSON of the request from the RAWG server
*/
const getGameByName = function(gameToFind)
{
    // TESTING COMMENT
    console.log(`getByName envoked`);
    
    // create a query parameter based on input game
    let qp = `games?search=${gameToFind}`;
    return rawgFetch(qp, RAWG_URL, RAWG_KEY);
} // end getGameByName

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTING
// comb document for element to append a button to, for testing

const testBtnEl = document.getElementById(`testing-form`);

testBtnEl.addEventListener(`submit`, function(event)
{
    console.log(`submitted!`);
    event.preventDefault(); // stop page from automatically refreshing
    
    // get data entered in input element
    // let inputData = document.getElementById(`input-field`).formdata
    let inputData = document.getElementById(`data`).value;

    // console.log(inputData);
    // pass data as fetch query
    // rawgFetch(concatQuerPar(inputData), RAWG_URL);
    console.log(rawgFetch(inputData, RAWG_URL, RAWG_KEY));
} // end function
); // end testBtnEl

// find body element
const bodyEl = document.getElementsByTagName(`body`); // find body element

// append a child button to the last child of body

// give the button an id that we can target

// set the button as a variable

// add an event listener to the button that will fetch when clicked

// END TESTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
