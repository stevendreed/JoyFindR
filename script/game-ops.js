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
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', function() {
      saveResult(result);
    });
    
    // Append the image and text elements to the list item
     listItem.appendChild(imageElement);
     listItem.appendChild(textElement);
     listItem.appendChild(saveButton);
    
    // Append the list item to the result list
    resultList.appendChild(listItem);
    });
    
    // Append the result list to the results container
    resultsContainer.appendChild(resultList);
    }

    function saveResult(result) {
      // Get existing bookmarks from local storage or initialize an empty array
      let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  
      // Check if the result is already in bookmarks
      const isAlreadySaved = bookmarks.some(bookmark => bookmark.name === result.name);

      const modal = document.getElementById('myModal');
      const modalText = document.getElementById('modalText');

      if (!isAlreadySaved) {
        // Add the new result to bookmarks
        bookmarks.push(result);

        // Save the updated bookmarks back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        // Update the displayed bookmarks
        displayBookmarks();

        // Set modal text and display the modal
        modalText.textContent = 'Saved into wishlist!';
        modal.style.display = 'block';
    } else {
        // Set modal text and display the modal
        modalText.textContent = 'This game is already in your wishlist.';
        modal.style.display = 'block';
    }
  }

  // Close the modal when the user clicks the close button
const closeModal = document.querySelector('.close');
if (closeModal) {
    closeModal.addEventListener('click', function () {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    });
}

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

  function displayBookmarks() {
    let bookmarksContainer = document.getElementById("bookmarkResults");
   
     // Check if bookmarksContainer is null
     if (!bookmarksContainer) {
      console.error("Bookmarks container not found");
      return;
  }
  bookmarksContainer.innerHTML = '';

    // Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let bookmarkList = document.createElement('ul');

    bookmarks.forEach(bookmark => {
        const bookmarkItem = document.createElement("li");
        const bookmarkText = document.createTextNode(bookmark.name);
        const imageElement = document.createElement("img");
        imageElement.src = bookmark.background_image; // Use the API-provided image URL
        imageElement.alt = bookmark.name; // Set alt text for accessibility
        imageElement.style.maxWidth = "100px"; // Set a maximum width for the image (adjust as needed)

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
        // Find the index of the bookmark to be deleted
        const indexToDelete = bookmarks.findIndex(item => item.name === bookmark.name);
        // Remove the specified bookmark from the array
        bookmarks.splice(indexToDelete, 1);  
        
        // Save the updated bookmarks back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        // Update the displayed bookmarks
        displayBookmarks();
        });

        bookmarkItem.appendChild(imageElement);
        bookmarkItem.appendChild(bookmarkText);
        bookmarkItem.appendChild(deleteButton);

        bookmarkList.appendChild(bookmarkItem);
        bookmarksContainer.appendChild(bookmarkList);
    });
}

// Check if the current page is bookmarks.html, then display bookmarks
if (window.location.pathname.includes('bookmark.html')) {
  displayBookmarks();
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


// Function to fetch game details
const getGameDetails = function(gameName) {
    // Make a fetch request to get detailed game information from RAWG.io
    const qp = `games?search=${gameName}`;
    rawgFetch(qp, RAWG_URL, RAWG_KEY)
      .then(function(result) {
        // Display game details on the game details page
        displayGameDetails(result);

        
      });
  };
  
  // Function to display game details on the game details page
  const displayGameDetails = function(gameData) {
    // Extract and display game details (e.g., name, release date, description) on the game details page
  };
  
  // When the game details page loads, extract the selected game from the URL and fetch its details
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGame = urlParams.get("game");
  
    if (selectedGame) {
      getGameDetails(selectedGame);
    }
  };