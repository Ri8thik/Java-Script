/*

 console.log("hello World")

 document.getElementById("p__tag").innerHTML="hello World"

 var name =prompt("enter ur name :- ")

 document.getElementById("p__tag").innerHTML="hello " +name 

 console.log(`hello ${name}`)

*/

// Functions 

/*

function names (yourname){
    var name = "Hello "+ yourname
    console.log(name)

}
var name = prompt("Enter Your name :- ")

names (name)

*/

/*
While Loop 

var num =0;
while (num<100){
    console.log(num)
    num+=1;

}
*/

// For Loop 

/*
for (let num =0;num<101;num++){
    console.log(num);
}


let yourAge =18; //number
let yourName ="Rithik"; //String
let name ={first :"Rithik",last:"Soun"}; //objects
let truth =false; //Boolean
let groceries =['apple','banana','orange']; //array
let random ; //undefined
let nothing =null; //value null

// String Function in js 
let fruit ='banana,orange,apple';
let moreFruits='banana \n apple';             // new line 

// console.log(fruit.length);                    // Length
// console.log(fruit.indexOf('q'));              // index value of Q
// console.log(fruit.slice(2,6));                // starting -- ending 
// console.log(fruit.replace('ban','123'));      // replace 
// console.log(fruit.toUpperCase());             // upper case 
// console.log(fruit.toLowerCase());             // lower case 
// console.log(fruit.charAt(2));                 // value of character at index 2 
// console.log(fruit[2])                         // value of character at index 2 
// console.log(fruit.split(","));                // Split by ,
// console.log(fruit.split(""));                // Split by characters

// console.log(moreFruits)


// Array 

let fruits=['a','b','c','d','e'];
 fruits= new Array('a','b','c','d','e');

// console.log(fruits[2])    // access value at index 2nd

fruits[2]="bear";
// console.log(fruits)

// For loop in array 

for (let i=0;i<fruits.length;i++){
    // console.log(fruits[i]);
}

//---------------------------------------------------------          array comman methods 

console.log("values are = ",fruits.toString());                    // 1 convert array into the String  

console.log(fruits.join(" -> "));                                  // 2 convert array into the String  with joining ->          
console.log(fruits.join(" * "));

// console.log(fruits)
// console.log(fruits.pop());

console.log(fruits , fruits.pop(),fruits);                          // 3 pop method delete the last element in the Array 

console.log(fruits.push("drink"),fruits);                           // 4 push method is used to add elements in the end of the Array  

fruits[fruits.length] = "soft";
console.log(fruits);


console.log("Shift ->   ",fruits.shift(),fruits);                   // 5 shift is used to remove the first element from the array
fruits.unshift("moreOranges");                                      // 5 unshift is used to add the first element from the array
console.log(fruits);

let veg = ['carrot','tomato','Onion'];
let allgross= fruits.concat(veg);
console.log(allgross);

console.log(allgross.slice(1,4));

console.log(allgross.reverse());
console.log(allgross.sort());

let someNumber =[5,3,6,1,6,77,55,66,44,33,90];

console.log(someNumber.sort(function (a,b){return a-b}));
console.log(someNumber.reverse())

let emptyArray = new Array();
for (let num =0; num <=10;num++){
    emptyArray.push(num);
}


console.log(emptyArray);



//  ----------------------------------------------------Objects in Js 


let Students ={
    first :"Rithik",
    last :"Soun",
    age:18,
    height:170,
    studentInfo :function (){
        return this.first+ " "+this.last +" and age is "+ this.age;
    }
};

// console.log(Students.first);
// console.log(Students.last);

// Students.first="Rahul";   // Change Value 

// console.log(Students.first);

// Students.age++;

// console.log(Students.age);

console.log(Students.studentInfo());


// Conditionals , Control flows (If-else)

// && -> AND
// || -> OR

var age = prompt("What is ur age ? ");

if (age >= 18 && age <= 35) {
    status = "target demo";
    console.log(status);
}
else if (age < 18) {
    status = "not my target demo";
    console.log(status);

}

// Switch statement 
// differentiate between weekday 


var no = prompt("Enter no :- ");
var text="";
switch (no) {
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednusday";
        break;
    case 4:
        text = "Thusday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;

    default:
        text = "error";
        break;
}

console.log(text);


*/



