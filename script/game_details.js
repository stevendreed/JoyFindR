// Function to extract URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Get the game name from the URL parameter
  const gameName = getURLParameter("game");
  
  // Function to fetch and display game details
  function displayGameInfo(gameName) {
    // Make an API request to get details for the specified game
    const RAWG_KEY = "?token&key=aaadbe900b0f429ea88c22d1c7f9badf";
    const RAWG_URL = "https://rawg.io/api/";
    const queryParam = `games?search=${gameName}`;

    const giphyAPIKey = "search?api_key=lgyiLov1S9FD15er1m7ncjoakWh4NUU8";
    const giphyURL = "https://api.giphy.com/v1/gifs/";
    const giphyQueryParam = `&q=${gameName}`;
  
    fetch(RAWG_URL + queryParam + RAWG_KEY)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        const gameDetails = result.results[0];
        if (gameDetails) {
          // Update the game details in the HTML
          document.getElementById("game-name").textContent = gameDetails.name;
          document.getElementById("game-release-date").textContent = `Release Date: ${gameDetails.released}`;
          document.getElementById("game-description").textContent = gameDetails.description;
          // Add logic to display the Giphy meme if needed
        } else {
          // Handle the case where the game is not found
          document.getElementById("game-name").textContent = "Game Not Found";
        }
      });

    fetch(giphyURL + giphyAPIKey + giphyQueryParam)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        if (result.data) {
          return result.data.image_url;
        } else {
          return null; // No Giphy meme found for this game name
        }
      })
      .then((memeUrl) => {
        if (memeUrl) {
          const memeImage = document.getElementById('meme-image');
          memeImage.src = memeUrl;
          memeImage.alt = 'Giphy Meme';
        } else {
          // Handle case where no meme is found
          console.log('No Giphy meme found for this game.');
        }
      });
    
      // Add an event listener to the search button
      const searchButton = document.getElementById(`testing-form`);
      const gameInfo = document.getElementById("information");

      searchButton.addEventListener("click", function(event) {
        console.log(`submitted!`);
        event.preventDefault(); // stop page from automatically refreshing
        // Get the new game name from the search input field
        let newGameName = document.getElementById(`data`).value;
        getGameByName(newGameName);
        gameInfo.innerHTML = '';
      });

      const newResultList = document.getElementById("results");

        newResultList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            // Extract the game name or ID from the selected result
            const newSelectedGame = event.target.textContent;

            // Redirect to the game details page with the selected game as a URL parameter
            window.location.href = `game_details.html?game=${newSelectedGame}`;
        }
        });
    }
  
  // Call the function to display game details
  displayGameInfo(gameName);