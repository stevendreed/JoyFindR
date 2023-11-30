// app.js

console.log(`Hello world!`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTING
// comb document for element to append a button to, for testing

const testBtnEl = document.getElementById(`testing-form`);

testBtnEl.addEventListener("click", function(event)
{
    console.log(`submitted!`);
    event.preventDefault(); // stop page from automatically refreshing
    
    // get data entered in input element
    // let inputData = document.getElementById(`input-field`).formdata
    let inputData = document.getElementById(`data`).value;

    // console.log(inputData);
    // pass data as fetch query
    // rawgFetch(concatQuerPar(inputData), RAWG_URL);
    //console.log(rawgFetch(inputData, RAWG_URL, RAWG_KEY));
    getGameByName(inputData);
} // end function
); // end testBtnEl

// Add a click event listener to the game results
const resultList = document.getElementById("results");

resultList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    // Extract the game name or ID from the selected result
    const selectedGame = event.target.textContent;

    // Redirect to the game details page with the selected game as a URL parameter
    window.location.href = `pages/game_details.html?game=${selectedGame}`;
  }
});


// append a child button to the last child of body

// give the button an id that we can target

// set the button as a variable

// add an event listener to the button that will fetch when clicked

// END TESTING
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++