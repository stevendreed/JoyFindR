// storage-ops.js
/* Steven Reed, 09/18/2023

   this file contains functions that save to and retrieve from browser
   local storage.

*/

// setCount = set the current number of stored games to value
// stores the input under the count key 
const setCount = function(value)
{
    localStorage.setItem(`count`, `${value}`);
}

// retrieveCount = retrieve the current count of stored games
// retrieves the value under the count key, and returns as a parsed
// float value
const retrieveCount = function(value)
{
    return parseFloat(localStorage.getItem(`count`));
}

// bookmarkGame => save to local storage
// function accepts a hash and stores that into local storage
const bookmarkGame = function(game)
{
    
}