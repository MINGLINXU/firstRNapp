console.log("Hello, World")
console.log("Hello, Node.js!")

// Exercise #1
let price = 200
let discount = 20
const total = price-discount
if( total > 85){
    console.log("Free Shipping")
}
else{
    console.log("The total is $"+total)
}

//Exercise #2

    for (let count=10 ; count>0 ; count =count-1) {
        console.log("Juggle " + count)
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

//#1 write a JavaScript arrow function to convert a 2D array to a comma separated values (CSV) string

var arrayToString = (arr,delimiter) =>{
    var letter1 = arr[0][0];
    var letter2 = arr[0][1];
    var letter3 = arr[1][0];
    var letter4 = arr[1][1];

    if(delimiter == null){
        delimiter = ",";
        return letter1+delimiter+letter2+delimiter+letter3+delimiter+letter4;

    }
    else{
        return letter1+delimiter+letter2+delimiter+letter3+delimiter+letter4;
    }
}


array1 = [['a','b'],['c','d']];
var defaultOut = arrayToString(array1);
var delimiter = arrayToString(array1,'-');
console.log(defaultOut); //a,b,c,d
console.log(delimiter); //a-b-c-d

//#2 write a JavaScript arrow function to display the difference between wto given arrays.
var difference = (arr1, arr2) =>{
    var i=0;
    while( i < arr1.length || i < arr2.length){
        if(arr1[i] != arr2[i]){
            return arr1[i]
        }
        i++;
    }
}

array2 = ['1', '2', '3'];
array3 = ['1', '2', '4'];

var output = difference(array2, array3);
console.log(output); //3
