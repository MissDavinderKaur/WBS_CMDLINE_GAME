const validOptions = ['rock', 'paper', 'scissors'];

function getComputerChoiceAndCallDetermineWinner(userOption) {
  const randomIndex = Math.floor(Math.random() * validOptions.length);
  console.log(`Computer chose: ${validOptions[randomIndex]}`);
  determineWinner(userOption, validOptions[randomIndex]);
}

function determineWinner(userChoice, computerChoice) { 
    if (userChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
    }
    return;
} 

function startGame() {
     console.log('Welcome to Rock Paper Scissors!');
    const userOption = process.argv.slice(2)[0].toLowerCase();
    if (validOptions.includes(userOption)) {
        console.log(`You chose: ${userOption}`);
        getComputerChoiceAndCallDetermineWinner(userOption);    
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }
}

startGame();     