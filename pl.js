const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function translate(phrase) {
    // Convert String to Array
    const phraseArray = phrase.split(' ');
    // Iterate over the Array and translate each word
        phraseArray.forEach(word => {
            // For each word, determine what the first 2 characters are and translate accordingly
            const firstTwoChars = word.slice(0, 2);
            // If a word starts with a vowel add the word "way" at the end of the word.

            // If a word starts with two consonants move the two consonants to the end of the word and add "ay."

            // If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
        }
    
}

function startGame() {
     console.log('Welcome to the Pig Latin Translator!');
    const userPhrase = process.argv.slice(2)[0].toLowerCase();
    console.log(`You entered: ${userPhrase}`);
    translate(userPhrase);
}

startGame();     