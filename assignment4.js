var readline = require('readline-sync');

//assignament 4.1 weekdays.
let day = readline.question('Enter a weekday number: ');
day = parseInt(day);
switch (day){
    case 1: console.log("today is Sunday");
    break;
    case 2: console.log("today is Monday");
    break;
    case 3: console.log("today is Tuesday");
    break;
    case 4: console.log("today is wednesday");
    break;
    case 5: console.log("today is Thursday");
    break;
    case 6: console.log("today is Friday");
    break;
    case 7: console.log("today is Saturday");
    break;
    default: console.log("enter a valid number");
}

//assignment 4.2 multiplication table
let multiplier = readline.question('Enter number to multiply: ');
let lines = readline.question('Enter how many lines you want: ');

for(let i=1;i<=lines;i++){
    console.log(i+ " x "+multiplier +" = "+i*multiplier);
}

// // assignment 4.3: sum of odd numbers
let limit = readline.question("enter the limit: ");
let sum = 0;
for(let i=0;i<=limit;i++){
    if(i%2!==0){
        sum=sum+i;
    }
};
console.log("the total sum of odd numbers within your limit is: ", sum);

//assignment 4.4 pyramid of numbers.

for(let i=1;i<=5;i++){
    let newLine = '';
    for(let j=1;j<=i;j++){
       newLine += j + ' ';
    }
    console.log(newLine);
}
// assignment 4.5 number of even numbers in array.

let arraySize= readline.question("enter the size of array: ");
arraySize = parseInt(arraySize);

let array = [];
console.log("enter the values one by one: ");
for(let i=0;i<arraySize;i++){
    let j = i+1;
    let nums = readline.question("enter number "+j+':');
    nums = parseInt(nums);
    array[i]= nums;
}
let totalEvenNums = 0;
for(let i=0;i<arraySize;i++){
    if(array[i]%2==0){
        totalEvenNums+=1;
    }
}
console.log('total number of even numbers in the list you provided is ',totalEvenNums);

// assignment 4.6: check the number is prime or not

let checkNumber = readline.question("enter a number to check whether it is prime or not: ");
checkNumber = parseInt(checkNumber);

for(let i=2;i<checkNumber/2;i++){
    if(checkNumber%i==0){
        console.log('the given number is not a prime number');
        break;
    }else{
        console.log("the given number is a prime number");
        break;
    }
}
// assignment 4.7 : 

console.log("enter 2 numbers");
let array1 = [];

for(let i =0; i<2;i++){
    let j = i+1
    let values = readline.question("number "+j+" is :");
    values = parseInt(values);
    array1[i] = values;
}
let operation = readline.question("enter your operations. enter 1 to add, enter 2 to substract, enter 3 to multiply, enter 4 to divide: ")
if(operation==1){
        addnumbers();
}else if(operation==2){
        substract();
}else if(operation==3){
        multiply();
}else if(operation==4){
        divide();
}else{
    console.log("enter a valid number");
}

function addnumbers(){
    let ans = array1[0]+array1[1];
    console.log("the answer is : " +ans);
}
function substract(){
    let ans = array1[0]-array1[1];
    console.log("the answer is : " +ans);
}
function divide(){
    let ans = array1[0]/array1[1];
    console.log("the answer is : " +ans);
}
function multiply(){
    let ans = array1[0]*array1[1];
    console.log("the answer is : " +ans);
}

   