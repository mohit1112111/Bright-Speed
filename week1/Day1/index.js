var userCnt = 0;
var systemCnt = 0;
var tCnt = 0;
function generateRandomChoice() {
    const choices = ['rock', 'paper', 'caesar'];
    const randomString = Math.floor(Math.random() * choices.length);
    return choices[randomString];
}
var rockbtn = document.getElementById("rock");
var paperbtn = document.getElementById("paper");
var caesarbtn = document.getElementById("caesar");
function func(event){
    let btnId = event.target.id;
    return btnId;
}
rockbtn.addEventListener('click',func);
paperbtn.addEventListener('click',func);
caesarbtn.addEventListener('click',func);
function myFunction() {

    // var player1Choice = document.getElementById('first').value;
    var player1Choice = func();
    var player2Choice = generateRandomChoice();

    player1Choice = player1Choice.toLowerCase();

    const winningCombinations = {
        'rock': 'caesar',
        'paper': 'rock',
        'caesar': 'paper'
    };

    if (!(player1Choice in winningCombinations) || !(player2Choice in winningCombinations)) {
        document.getElementById('demo').innerHTML = "<h1>Please choose right things!</h1>";
    }
    else if (player1Choice === player2Choice) {
        document.getElementById('demo').innerHTML = " <h1>The match is tie!</h1>";
        tCnt++;
        document.getElementById('attemps').innerHTML = tCnt;
    }
    else if (winningCombinations[player1Choice] === player2Choice) {
        document.getElementById('demo').innerHTML = "<h1>Player one wins!</h1>";
        userCnt++;
        document.getElementById('user').innerHTML = userCnt;
        tCnt++;
        document.getElementById('attemps').innerHTML = tCnt;
    } else {
        document.getElementById('demo').innerHTML = "<h1>player two is win!</h1>";
        systemCnt++;
        document.getElementById('system').innerHTML = systemCnt;
        tCnt++;
        document.getElementById('attemps').innerHTML = tCnt;
    }
    if(tCnt == 4){
        document.getElementById('wins').innerHTML = "<p>One attempt is left</p>"  
    }
    if (tCnt == 5) {
      
        if (userCnt > systemCnt) {
            document.getElementById('wins').innerHTML = "<h1>Congratulation User is Win!</h1>"
            userCnt = 0;
            systemCnt = 0;
            tCnt = 0;
            document.getElementById('attemps').innerHTML = tCnt;
            document.getElementById('user').innerHTML = userCnt;
            document.getElementById('system').innerHTML = systemCnt;
        } else if (userCnt < systemCnt) {
            document.getElementById('wins').innerHTML = "<h1> Ohh System is Win!</h1>"
            userCnt = 0;
            systemCnt = 0;
            tCnt = 0;
            document.getElementById('attemps').innerHTML = tCnt;
            document.getElementById('user').innerHTML = userCnt;
            document.getElementById('system').innerHTML = systemCnt;
        } else if (userCnt == systemCnt) {
            document.getElementById('wins').innerHTML = "<h1> Match is Tie Try next time!</h1>"
            userCnt = 0;
            systemCnt = 0;
            tCnt = 0;
            document.getElementById('attemps').innerHTML = tCnt;
            document.getElementById('user').innerHTML = userCnt;
            document.getElementById('system').innerHTML = systemCnt;
        }
    }
    document.getElementById('first').value = "";
    document.getElementById('second').value = "";

}