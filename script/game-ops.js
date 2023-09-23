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

const getScrShotByName = function(queryParam)
{
    console.log(`getScrShotByName envoked!`);
    rawgFetch(queryParam, RAWG_URL, RAWG_KEY)
    .then(returnVal)
    {
        console.log(returnVal);
        // img id="container-ss"
        /*
        // obtain container element
        document.getElementById(`container-ss`)
        .setAttribute(`src=`) // set src of img to val from fetch
        */
    } // end then
} // end getScrShotByName