// storage-ops.js
/* Steven Reed, 09/18/2023

   this file contains functions that save to and retrieve from browser
   local storage.

*/

const NAME_OF_LS_ARRAY = `gameArray`;

/*
   initLS = a function that initializes a local storage array of objects,
   if the expected key is blank
*/

const initLS = function(key = NAME_OF_LS_ARRAY)
{
    let outcome = 0;
    if (!Window.localStorage[NAME_OF_LS_ARRAY])
    {
        let tempArOfObj = [
        ];
        tempArOfObj = JSON.stringify(tempArOfObj);
        localStorage.setItem(NAME_OF_LS_ARRAY, tempArOfObj);
        outcome = 1; // success: default initialized
    } // end if
    else
    {
        console.log(`an error has occurred with local storage`);
    } // end else
    return outcome;
} // end initLS

/*
   pullFromLS = a function that grabs stringified local storage array
   and returns it as an array of JSON objects
*/
const pullFromLS = function(key = NAME_OF_LS_ARRAY)
{
    return localStorage.getItem(key).JSON;
} // end pullFromLS

/*
   overwriteLS = a function that sets the key array to the value of newArray
*/
const overwriteLS = function(key = NAME_OF_LS_ARRAY, newArray)
{
    let toStore = JSON.stringify(newArray);
    localStorage.setItem(key, toStore);
    return;
} // end overwriteLS

/*
   addToLS = a function that accepts a JSON, updates the array of objects,
   then stores this stringified array in local storage
*/
const addToLS = function(arrayKey, toEnqueue)
{
    // grab the entire array that holds all objects
    const storArray = pullFromLS(arrayKey);
    // append new object to the end of the array
    storArray.append(toEnqueue);
    overwriteLS(NAME_OF_LS_ARRAY, storArray);
} // end addToLS

/*
   displayLS = a function that iterates through the stored objects in the local storage
   array and dynamically builds a list of them
*/
const displayLS = function(key = NAME_OF_LS_ARRAY)
{
    const locStorArray = pullFromLS();
    const listTarg = document.getElementById(`ls-target`);

    let max = locStorArray.length;
    for (let i = 0; i < max; i++)
    {
        
    } // end for
} // end displayLS

// setCount = set the current number of stored games to value
// stores the input under the count key 
// const setCount = function(value)
// {
//     value = toString(value);
//     localStorage.setItem(`count`, `${value}`);
// }

// // retrieveCount = retrieve the current count of stored games
// // retrieves the value under the count key, and returns as a parsed
// // float value
// const retrieveCount = function()
// {
//     return parseFloat(localStorage.getItem(`count`));
// }

// // bookmarkGame => save to local storage
// // first, retrieves the current game count, then uses that number to
// // set a key for a new stored item
// // finally, increments the stored count by 1 and stores that new value
// const bookmarkGame = function(game)
// {
//     // exception handling if count has not been defined yet
//     if (!Window.localStorage[`count`])
//     {
//         setCount(0);
//     } // end if

//     // retrieve current game count
//     let c = retrieveCount + 1;

//     // create a key for the stored item
//     let tempKey = `game${c}`;

//     // save with key
//     localStorage.setItem(tempKey, game);

//     // update game count
//     setCount(c);

//     return;
// } // end bookmarkGame

