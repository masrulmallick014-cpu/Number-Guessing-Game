
const re=require("prompt-sync")();
console.log("==========================================");
console.log("🎮 WELCOME TO THE NUMBER GUESSING GAME! 🎮");
console.log("Maine 1 se 100 ke beech ek number socha hai.");
console.log("==========================================");
var coorectno=Math.floor(Math.random()*100)+1;
var input;
var count=0
while(true){
    count+=1
    input=Number(re("Guess the no and try your luck "));
    // loop ke starting me yeh validation dal sakte hain:
if (isNaN(input)) {
    console.log("❌ Invalid Input! Please enter a valid number.");
    continue; // Loop ko upar bhej dega dobara input ke liye
}

    if(input===coorectno){
        console.log("Congratulations! You entered the correct number. 🎉");
        break; // Sahi number milne par loop ruk jayega
    } else {
        console.log("Try again");
        if(input>coorectno && input<coorectno+10){
            console.log("you number is high")
        }
        else if(input<coorectno && input>coorectno-10){
            console.log("your no is low")
        }
        else if(input>coorectno+10){
            console.log("number is too high")

        }
        else if(input<coorectno-10){
            console.log("number is too low")

        }
    }
   
}
 console.log(`you enterd correct no at this no guess${count}`);
