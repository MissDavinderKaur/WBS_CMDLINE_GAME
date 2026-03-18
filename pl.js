function translate(phrase) {
    // Convert String to Array
    const phraseArray = phrase.split(' ');
    // Iterate over the Array and translate each word
        phraseArray.forEach(word => {
            // For each word, determine what the first 2 characters are and translate accordingly
            const firstTwoChars = word.slice(0, 2);
        }
    
}

function startGame() {
     console.log('Welcome to the Pig Latin Translator!');
    const userPhrase = process.argv.slice(2)[0].toLowerCase();
    console.log(`You entered: ${userPhrase}`);
    translate(userPhrase);
}

startGame();     