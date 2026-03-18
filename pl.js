function startGame() {
     console.log('Welcome to the Pig Latin Translator!');
    const userPhrase = process.argv.slice(2)[0].toLowerCase();
    console.log(`You entered: ${userPhrase}`);
}

startGame();     