function flipCard(event) {
    const card = event.target.closest('.card');
    
    // Check if the card is already flipped. If it is, then unflip it. Otherwise, flip it.
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    } else {
        card.classList.add('flipped');
    }
}

function resetBoard() {
    const newImage = getRandomImage();

    // Update the game board's background image
    document.querySelector('.game-board').style.backgroundImage = `url(${newImage})`;

    // Update each card's back background image
    const cardBacks = document.querySelectorAll('.card-back');
    cardBacks.forEach(cardBack => {
        cardBack.style.backgroundImage = `url(${newImage})`;
    });

    // Reset all flipped cards
    const flippedCards = document.querySelectorAll('.card.flipped');
    flippedCards.forEach(card => {
        card.classList.remove('flipped');
    });
}

const images = [
    'https://cdn-shop.adafruit.com/145x109/5351-00.jpg',
    'https://www.gcrmag.com/wp-content/uploads/2019/09/JuanValdez-1m-e1646799090933.jpg',
    'https://www.hamrokhelkud.net/wp-content/uploads/2023/09/top-of-the-world-golf-840x440.jpg',
    // ... add more URLs as needed
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
