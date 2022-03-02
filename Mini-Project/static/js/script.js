// Challenge 1: Your Age in Days


function ageInDays() {
    var yearBorn = prompt("Enter your born Years ");
    var ageInDayss = (2022 - yearBorn) * 365;
    var h1 = document.createElement('h1');
    var textAnswers = document.createTextNode("your are " + ageInDayss + " Days old .");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswers);
    document.getElementById("div__result").appendChild(h1);

}

function reset() {
    document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement("img")
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://edgecats.net/format=src&type=gif&size=small";
    div.appendChild(image);
}


// Challenge 3: Rock,Paper,Scissors

function rpsGame(yourChoise) {
    // console.log(yourChoise.src)
    var humanChoice, botChoice;
    humanChoice = yourChoise.id;

    botChoice = numberToChoise(randomrpsInt());

    result = decideWinner(humanChoice, botChoice);

    message = finalMessage(result);

    rpsFrontEnd(yourChoise.id, botChoice, message);

}

function randomrpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoise(no) {
    return ['rock', 'paper', 'scissors'][no];
}

function decideWinner(humanChoice, botChoice) {
    if (humanChoice == "rock") {
        if (botChoice == "rock") {
            return 0.5;
        }
        else if (botChoice == "paper") {
            return -1;
        }
        else if ("scissors") {
            return 1;
        }
        else { return null; }
    }
    else if (humanChoice == "paper") {
        if (botChoice == "paper") {
            return 0.5;
        }
        else if (botChoice == "scissors") {
            return -1;
        }
        else if ("rock") {
            return 1;
        }
        else { return null; }

    }
    else if (humanChoice == "scissors") {
        if (botChoice == "scissors") {
            return 0.5;
        }
        else if (botChoice == "rock") {
            return -1;
        }
        else if ("paper") {
            return 1;
        }
        else { return null; }
    }
    else { return null; }
}

function finalMessage(result) {
    let data = {
        msg: "",
        clr: ""
    }

    if (result == 1) {
        data.msg = "You Won !";
        data.clr = "green";
        return data;
    }
    else if (result == 0.5) {
        data.msg = "You Tied";
        data.clr = "yellow";
        return data;
    }

    else if (result == -1) {
        data.msg = "You Lost!";
        data.clr = "red";
        return data;
    }
}

function rpsFrontEnd(humanchoice, botChoice, values) {
    // console.log(id,botChoice,values.clr,values.msg);
    // return null;

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement("div");
    var img1 = document.createElement("img");
    img1.src = imagesDatabase[humanchoice];
    img1.width = 150;
    img1.height = 150;
    img1.style = "box-shadow: 0px 10px 50px rgb(206, 1, 138);"
    humandiv.appendChild(img1)

    var botDiv = document.createElement("div");
    var img2 = document.createElement("img");

    img2.src = imagesDatabase[botChoice];
    img2.width = 150;
    img2.height = 150;
    img2.style = "box-shadow: 0px 10px 50px rgba(243, 38, 24,1);"

    botDiv.appendChild(img2);

    var messageDiv = document.createElement("div");
    var h1 = document.createElement("h1");

    h1.style.color = values.clr;
    var text = document.createTextNode(values.msg);
    h1.appendChild(text);

    messageDiv.appendChild(h1);

    var div = document.getElementById("flex-box-rps-div");
    div.appendChild(humandiv);
    div.appendChild(messageDiv);
    div.appendChild(botDiv);

}


// Challenge 4: Change the Color of All Buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)

var copyAllButton = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButton.push(all_buttons[i].classList[1]);
}


function buttonColorChange(buttonThing) {

    if (buttonThing.value === "red") {
        buttonRed();
    }
    else if (buttonThing.value === "green") {
        buttonGreen();
    }
    else if (buttonThing.value === "reset") {
        buttonColorReset();
    }
    else if (buttonThing.value === "random") {
        randomColor();
    }
    // else{console.log("111")}

}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function randomColor() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[Math.floor(Math.random() * 7)]);
    }
}

// Challenge 5: Blackjack

let blackjackGame = {
    'you': { 'scoreSpan': "#your-blackjack-result", 'div': "#Your-box-main", 'score': 0 },
    'dealer': { 'scoreSpan': "#dealer-blackjack-result", 'div': "#dealer-box-main", 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnOver': false,

};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const CARD = blackjackGame['cards'];
const CARDMAP = blackjackGame['cardsMap'];
const WINS = blackjackGame['wins'];
const LOSSES = blackjackGame['losses'];
const DRAWS = blackjackGame['draws'];


const hitSound = new Audio('static/sounds/swish.m4a')
const lossSound = new Audio('static/sounds/aww.mp3');
const winSound = new Audio('static/sounds/cash.mp3');



document.querySelector("#blackjack-hit-button").addEventListener('click', blackjackHit);
document.querySelector("#blackjack-stand-button").addEventListener('click', dealerLogic);
document.querySelector("#blackjack-deal-button").addEventListener('click', blackjackDeal);


function blackjackHit() {

    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return CARD[randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `static/images/${card}.png`;
        cardImage.style.height = 150;

        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {


    if (blackjackGame['turnOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector("#your-box").querySelectorAll('img');
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'yellow';
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style.color = 'yellow';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = "";

        blackjackGame['turnOver'] = true;

    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {

        if (activePlayer['score'] + CARDMAP[card][1] <= 21) {
            activePlayer['score'] += CARDMAP[card][1];
        }
        else {
            activePlayer['score'] += CARDMAP[card][0];
        }
    }
    else {
        activePlayer['score'] += CARDMAP[card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep (ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic() {


    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);

    }
    blackjackGame['turnOver'] = true;
    showResult(computeWinner());
    

}

function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            // WINS++
            winner = YOU;

        }
        else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++
            // LOSSES++
            winner = DEALER
        }
        else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++
            // DRAWS++
        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++
        // LOSSES++
        winner = DEALER;
    }
    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++
        // DRAWS++
    }
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnOver'] === true) {
        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();

        }
        else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}
