//counting 

// for(let count = 10; count<21; count++)
// {
//     console.log(count);
// }

// let count = [0,1,2,3,4,5,5];
// for(let i = 0; i<count.length; i++)
// {
//     console.log(count[i]);
// }

// By updating the randomNumber function and adding 1 to it 
// the range increases from 0 to 6 , just as a dice function.


// let randomNumber = Math.floor(Math.random() * 6) + 1 ;

// console.log(randomNumber);

// rollDice function..
// function rollDice(){
//     let number = Math.floor(Math.random() *6) +1;
//     return number;
// }
// console.log(rollDice());

let hasCompletedCourse = true;
let givesCertificate = true;

// if(hasCompletedCourse === true && givesCertificate === true ){
//     generateCertificate();
// }

// function generateCertificate(){
//     console.log("Generating Certificate.....");
// }

let hasSolvedChallenge = false;
let hintLeft = false;

if(hasSolvedChallenge === false && hintLeft === false){
    showsolution();
}

function showsolution()
{
    console.log("Here is the Solution...");
}

let likeDocumentries = true;
let likeStartUps = true;

if(likeDocumentries === true || likeStartUps === true )
{
    display();
}

function display()
{
    console.log("You'll Like the Movie.....")
}