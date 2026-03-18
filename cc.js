function encrypt(phrase) {
    console.log(`Encrypting phrase: ${phrase}`);
}

function startGame() {
    console.log('Welcome to the Caesar Cipher encryptor!');
    const userPhrase = process.argv.slice(2)[0].toLowerCase();
    const shift = parseInt(process.argv.slice(3)[0]);
    console.log(`You entered: ${userPhrase}`);
    console.log(`Shift value: ${shift}`);
    encrypt(userPhrase);
}

startGame();     