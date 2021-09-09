
//  let firstCard = getRandomNumber();
//  let secondCard = getRandomNumber();
let sum = 0 //firstCard + secondCard;
let cards = [];
let isAlive = false;
let BlackJack = false;

let message = " ";

let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name:"Mohsin",
    chips: 77
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" +player.chips;


function renderGame()
{
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: "+ sum;

    if(sum <= 20){
        message = "Do you want to draw a new Card?";
    }
    else if(sum === 21)
    {
        message = "Congrats, You got a BlackJack!";
        BlackJack = true;
    }else{
        message = "I'm Sorry, Game Over";
        isAlive = false;
    }
    messageEL.textContent = message;   
}
function newCard()
{
    if(isAlive ===false)
    {
        alert("Please Start The Game!!!");
    }
    if(isAlive === true && BlackJack === false){
        let card = getRandomNumber();
        sum += card;
        cards.push(card); 
        renderGame();
    }
}

function startGame()
{
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards  = [firstCard,secondCard];
    sum =firstCard+secondCard;
    renderGame();
}

function getRandomNumber(){
    let number = Math.floor(Math.random() * 13) + 1;
    if(number === 1){  // if 1 return 11
        return 11;
    }else if(number >= 10){ // fi 10-13 return 10
        return 10;
    }else{
        return number;
    }
}