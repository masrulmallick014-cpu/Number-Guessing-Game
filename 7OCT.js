// newFunction();

// function newFunction() {
//     console.log("Helo Masrul Sir ,Do U Want Your Helicopter");
// }

// object={
//     "name":"Masrul",
//     "age":"Not know",
//     "skills":"making Money From Money",
//     "Assets":"Things Which You Cant Imagine"

// }
// console.log(object)
// object["game"]="free fire"
// console.log(object)

// var a="Masrul";
// var b=23;
// console.log(a+b)
// console.log(typeof(a+b))

// var a=12n;
// var b=190n;
// console.log(a+b)

// var a;
// console.log(a)

// var age=12
// if(age>10 && age<20){
//     console.log(`yes age is ${age}`)

// }
// else{
//  
//    console.log("Sorry Bro ")
// }

// var num=12;
// if(num%2==0 && num%3==0){
//     console.log("yes")

// }
// else{
//     console.log("no")
// }


// var age=2221;
// age>18 ? console.log("you can drive"):console.log("you cant drive")

// var obj={
//     "harry":"98",
//     "raja":"34",
//     "haririri":12
// };
// const keys = Object.values(obj);
// // for(i=0;i<Object.keys(obj).length;i++){
// //    console.log(keys[i]);
// // }
// for (var key of obj){
//     console.log(key)
// }

// function nm(a,b,c,d,e,f){
//             return (a+b+c+d+e+f)/5;
// }
// var al= (a,b,c,d,e,f)=>{
//             return (a+b+c+d+e+f)/5;
// }

// console.log(nm(1,2,3,4,5,6))
// console.log(al(1,2,3,4,5,6))

// var word="sakaa";
// var assu;
// while(word===assu){
    
// }

// const read=require("readline");
// const r=read.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// r.question('Aapka naam kya hai? ', (naam) => {
//     // Jo user type karega, wo 'naam' variable me aa jayega
//     console.log(`Hello, ${naam}! Node.js me aapka swagat hai.`);

//     // Interface ko band karna zaroori hai
//     r.close();
// });
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
