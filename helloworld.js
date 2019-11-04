console.log("Hello, World")
console.log("Hello, Node.js!")

// Exercise #1
let price = 48.90
let discount = 20
const total = 48.90 - 20
if( total > 85){
    console.log("Free Shipping")
}
else{
    console.log("The total is $"+total)
}

//Exercise #2
let count = 10
if(count > 0) {
    for (let i = 0; i < count; i+0) {
        console.log("Juggle " + count)
        count =count-1
    }
}
else{
    console.log("The count is "+count)
}

//Exercise #3
var circleRadius = 8
const circleArea = 3.142 * circleRadius * circleRadius
console.log("The are of the circle is "+circleArea);

//Exercise #4
var newprice = 0
if(newprice < 200){
    console.log("Price is too low!")
}
else if(newprice > 600){
    console.log("Price is too high!")
}
else{
    console.log("Price is right")
}

//Exercise #5
var area = (length, breadth) => length * breadth;
console.log("The area of a rectangle is "+area(10,5));

//Exercise #6
class BankAccount{
    constructor(accountNumber){
        this._accountNumber = accountNumber;
    }

    display(){
        console.log("My account is "+this._accountNumber);
    }
}

var myAccount = new BankAccount("333388881111")
myAccount.display();