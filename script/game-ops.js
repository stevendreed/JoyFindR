const RAWG_KEY = `?token&key=aaadbe900b0f429ea88c22d1c7f9badf`;    // key for SDR
const RAWG_URL = `https://rawg.io/api/`;

/*
   rawgFetch function = fetch a json response based on search param
   accepts a query parameter, the url to push the parameter to, and the key
   returns the json response from the server
*/
const rawgFetch = function(queryParam, url, key)
{
    // log fetch for testing purposes
    console.log(url+queryParam+key);

    return fetch(url+queryParam+key)
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
const displayResults = function (results) {
    const resultsContainer = document.getElementById("results");
    
     // Clear previous results
    resultsContainer.innerHTML = '';
    
     // Check if there are results
     if (results.results.length === 0) {
    resultsContainer.textContent = "No results found.";
    return;
     }
    
     // Create an unordered list to hold the results
     const resultList = document.createElement("ul");
    
     results.results.forEach((result) => {
     // Create a list item
     const listItem = document.createElement("li");
    
     // Create an image element
     const imageElement = document.createElement("img");
    imageElement.src = result.background_image; // Use the API-provided image URL
    imageElement.alt = result.name; // Set alt text for accessibility
    imageElement.style.maxWidth = "100px"; // Set a maximum width for the image (adjust as needed)
    
     // Create a text element for the game name
    const textElement = document.createTextNode(result.name);
    
    // Append the image and text elements to the list item
     listItem.appendChild(imageElement);
     listItem.appendChild(textElement);
    
    // Append the list item to the result list
    resultList.appendChild(listItem);
    });
    
    // Append the result list to the results container
    resultsContainer.appendChild(resultList);
    }

const getGameByName = function(gameToFind)
{
    // TESTING COMMENT
    console.log(`getByName envoked`);

    // create a query parameter based on input game
    let qp = `games?search=${gameToFind}`;
    rawgFetch(qp, RAWG_URL, RAWG_KEY)
    .then(function(result)
    {
        displayResults(result);
    });

} // end getGameByName