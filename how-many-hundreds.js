const howManyHundreds = function(num) {
 let inHundred = num / 100;
 if(inHundred < 1) {
   return 0;
 } else {
   return Math.floor(inHundred);
 }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);