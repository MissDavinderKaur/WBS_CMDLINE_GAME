const validOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * validOptions.length);
  console.log(`Computer chose: ${validOptions[randomIndex]}`);
  return validOptions[randomIndex];
}

function startGame() {
     console.log('Welcome to Rock Paper Scissors!');
    const userOption = process.argv.slice(2);
    if (validOptions.includes(userOption[0].toLowerCase())) {
        console.log(`You chose: ${userOption[0].toLowerCase()}`);
        getComputerChoice();
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }
}

startGame();






          