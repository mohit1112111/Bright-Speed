const feedback = document.getElementById('feedback');
    const congratsGif = document.getElementById('congrats-gif');
    const gameContainer = document.getElementById('game-container');
    const userGuessInput = document.getElementById('userGuessInput');
    const guessbtn=document.getElementById('guessButton');
    let attempts = 0;
    let randomNumber =0;

    function abc () {
        
        console.log(userGuessInput)

        let guessed = false;
        let userGuess = 0;

        // while (!guessed) {
        userGuess = parseInt(userGuessInput.value);
        document.getElementById('guess').innerHTML = userGuess;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            feedback.style.visibility = 'visible';
            return;
        }

        attempts++;
        document.getElementById('attempt').innerHTML = attempts;

        if (userGuess === randomNumber) {
            guessed = true;
            gameContainer.style.display = "none";
            // feedback.style.visibility = "hidden";
            congratsGif.style.visibility = "visible";
            feedback.style.visibility = 'visible';
            feedback.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
            feedback.style.color = "green";
            congratsGif.style.display = 'block';
            // gameContainer.style.visibility = "visible";
            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play again';
            playAgainButton.id = 'playAgain'; // Set ID for styling or reference
            playAgainButton.style.display = 'block'; // Initially displayed
            document.body.appendChild(playAgainButton);

            playAgainButton.onclick = () => {
                // feedback.style.visibility = "visible";
                // congratsGif.style.visibility = "visible";
                gameContainer.style.display = "block";
                playAgainButton.style.visibility = "hidden"; // Hide the "Play again" button
                attempts = 0;
                userGuess = 0;
                document.getElementById('attempt').innerHTML = attempts;
                document.getElementById('guess').innerHTML = userGuess;
                guessed = false;
                play();

            };

        } else if (userGuess < randomNumber) {
            feedback.style.visibility = 'visible';
            feedback.textContent = 'Guess Higher! Try again.';
            feedback.style.color = "red";
            // break; // Exit the loop for a wrong guess
        } else {
            feedback.style.visibility = 'visible';
            feedback.textContent = 'Guess Lower! Try again.';
            feedback.style.color = "blue";
            // break; // Exit the loop for a wrong guess
        }
        // }

        userGuessInput.value = '';
    };

function play() {
    
    // const playAgainButton = document.getElementById('playAgain');

    gameContainer.style.display = "block";
    feedback.style.visibility = "hidden";
    congratsGif.style.visibility = "hidden";
    // playAgainButton.style.visibility = "hidden";

     randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    


  

}
guessbtn.addEventListener('click',abc);
play();