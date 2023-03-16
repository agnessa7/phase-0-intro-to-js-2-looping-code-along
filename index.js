for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
   }
   return gifts;
}   
wrapGifts(gifts);


const names = []
const holiday = ""
const messages = []

function writeCards(names, holiday) {
    for (let i = 0; i < names.length; i++){
        
        messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
        
    }

    return messages;

}

function countDown(value){
    while (value >= 0) {
        console.log(value--)
    };
}