const gamePlayer = document.getElementById('game-player');
const gameIframe = document.getElementById('game-iframe');

function openGame(gameUrl) {
    // Set the source of the iframe to the game's URL
    gameIframe.src = gameUrl;
    // Show the game player
    gamePlayer.classList.remove('hidden');
}

function closeGame() {
    // Hide the game player
    gamePlayer.classList.add('hidden');
    // Clear the iframe source so the game stops playing in the background
    gameIframe.src = "";
}
