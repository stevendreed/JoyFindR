// Add a click event listener to the game results
const bookmarksList = document.getElementById("bookmarkResults");

bookmarksList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    // Extract the game name or ID from the selected result
    const selectedGame = event.target.textContent;

    // Redirect to the game details page with the selected game as a URL parameter
    window.location.href = `pages/game_details.html?game=${selectedGame}`;
  }
});