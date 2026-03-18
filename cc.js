const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

function encrypt(phrase, shift) {   
    // Get new alphabet array based on the shift value
    const shiftedAlphabetArray = alphabetArray.toSpliced(0, shift).concat(alphabetArray.slice(0,shift));
    // Convert phase to an array
    const phraseArray = phrase.split('');
    // Iterate over the array and encrypt each letter 
    const encryptedLetter = phraseArray.map(letter => {
        console.log(`Current letter: ${letter}`);
    });
    // Join the array back into a String and return it.
    const encryptedPhrase = encryptedLetter.join(' ');
    console.log(`Encrypted phrase: ${encryptedPhrase}`);
}

function startGame() {
    console.log('Welcome to the Caesar Cipher encryptor!');
    const userPhrase = process.argv.slice(2)[0].toLowerCase();
    const shift = parseInt(process.argv.slice(3)[0]);
    console.log(`You entered: ${userPhrase}`);
    encrypt(userPhrase, shift);
}

startGame();     