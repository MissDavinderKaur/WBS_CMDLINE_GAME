const validOptions = ['rock', 'paper', 'scissors'];

function startGame() {
     console.log('Welcome to Rock Paper Scissors!');
    const userOption = process.argv.slice(2);
    if (validOptions.includes(userOption[0].toLowerCase())) {
        console.log(`You chose: ${userOption[0].toLowerCase()}`);
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
    }
}

startGame();






          