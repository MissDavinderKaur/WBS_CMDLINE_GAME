# WBS Command Line Games

A collection of three interactive command-line games and utilities built with Node.js.


## Programs

### 1. Rock Paper Scissors (`rps.js`)

A classic Rock Paper Scissors game where you play against the computer.

**Requirements:**
- Takes the player's move as input from `process.argv`
- Randomly generates a move for the computer
- Determines the winner based on Rock Paper Scissors rules
- Outputs the result (win, lose, or draw) to the console

**Usage:**
```bash
node rps.js rock
node rps.js paper
node rps.js scissors
```

**Example Output:**
```
Welcome to Rock Paper Scissors!
You chose rock
Computer chose scissors
You win! rock beats scissors.
```

---

### 2. English to Pig Latin Translator (`pl.js`)

Converts English text to Pig Latin following traditional Pig Latin rules.

**Requirements:**
- Takes an English phrase as input from `process.argv`
- Converts each word to Pig Latin based on these rules:
  - **Consonant + Vowel:** Move the first consonant to the end and add "ay"
    - Example: `happy` → `appyhay`
  - **Two Consonants:** Move the first two consonants to the end and add "ay"
    - Example: `child` → `ildchay`
  - **Starts with Vowel:** Add "way" to the end of the word
    - Example: `awesome` → `awesomeway`
- Outputs the translated phrase to the console

**Usage:**
```bash
node pl.js "Pig Latin is hard to speak"
```

**Example Output:**
```
Igpay Atinlay isway ardhay otay eakspay
```

---

### 3. Caesar Cipher (`cc.js`)

Implements a basic Caesar Cipher encryption that shifts letters in the alphabet.

**Requirements:**
- Takes a phrase and a shift number as inputs from `process.argv`
- Encrypts the phrase by shifting each letter based on its position in the English alphabet
- Case insensitive
- Negative shifts move left, positive shifts move right
- Outputs the encrypted phrase to the console
- Preserves non-alphabetic characters (spaces, punctuation)

**Usage:**
```bash
node cc.js "hello world" 3
node cc.js "secret message" -5
```

**Example Output:**
```
Encrypted phrase: khoor zruog
```

---

