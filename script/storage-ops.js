// storage-ops.js
/* Steven Reed, 09/18/2023

   this file contains functions that save to and retrieve from browser
   local storage.

*/

// setCount = set the current number of stored games to value
// stores the input under the count key 
const setCount = function(value)
{
    value = toString(value);
    localStorage.setItem(`count`, `${value}`);
}

// retrieveCount = retrieve the current count of stored games
// retrieves the value under the count key, and returns as a parsed
// float value
const retrieveCount = function()
{
    return parseFloat(localStorage.getItem(`count`));
}

// bookmarkGame => save to local storage
// first, retrieves the current game count, then uses that number to
// set a key for a new stored item
// finally, increments the stored count by 1 and stores that new value
const bookmarkGame = function(game)
{
    // exception handling if count has not been defined yet
    if (!Window.localStorage[`count`])
    {
        setCount(0);
    } // end if

    // retrieve current game count
    let c = retrieveCount + 1;

    // create a key for the stored item
    let tempKey = `game${c}`;

    
}