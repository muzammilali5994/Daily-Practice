1. Find the index of first “a” in “banana”.
// let a ="banana";
console.log(a.indexOf("a"));

let a ="banana";
console.log(a.lastIndexOf("a"));

let a ="banana";
console.log(a.lastIndexOf("a"));





2. Find the last index of “a” in “banana”.

Using lastIndexOf().

3. Check if the string “Hello World” includes “World”.

let a ="banana";
console.log(a.includes("a"));

Using includes().

4. Check if “JavaScript” starts with “Java”.

let a ="banana";
console.log(a.startsWith("b"));

Using startsWith().

5. Check if “hello.js” ends with “.js”.

startsWith

Using endsWith().

6. Extract “Script” from “JavaScript”.

Using slice().

7. Replace first “a” in “banana” with “x”.

Using replace().

8. Replace all “a” in “banana” with “x”.

Using replaceAll().

✅ MEDIUM LEVEL — String Practice Questions
9. Count how many times "o" appears in "Hello World".
Using indexOf() in a loop.

let a = "Hello World";
let count = 0;

while (a !== "") {
    
    if (a[0] === "o") {
        count++;
    }
    

}


console.log(count); // Output: 2



Hint: use loop + indexOf() or match().

10. Get all numbers from “abc123xyz456”.

let a = "abc123xyz456";
let count = 0;
for (let i = 0; i < a.length; i++) {
    count =a.match(/\d/g).length;
}
console.log(count); // Output: [ '1', '2', '3', '4', '5', '6' ]

Using match(/\d/g).

11. Extract the last 3 characters from a string.
let a = "string";
console.log("   Hello   ".trim()); // Output: ing
Using slice(-3).

12. Remove whitespace from start and end of a string.

Using trim().

**13. Mask a phone number like:

"03001234567" → "*****4567"
Using slice() + padStart() or manual.

14. Check if username contains spaces.

Using includes(" ").

15. Convert “muzammil ali” to “Muzammil Ali”.

Use split, loop, toUpperCase.

✅ HARD LEVEL — String Practice Questions
16. Find all indexes where “a” appears in “banana”.

Use indexOf() in a loop.

17. Extract all words from a sentence using regex.

Using match(/\w+/g).

18. Find all email addresses in text.

Use regex + matchAll().

19. Reverse a string without using array reverse.

Use loop or recursion.

20. Remove all duplicate characters from a string.

Example: "banana" → "ban"

🔥 INTERVIEW LEVEL — String Questions
21. Difference between slice() vs substring() vs substr() (with examples).

Explain which supports negative, etc.

22. Why is matchAll() better than match()?

Show an example with index details.

23. Write a function to check if a string is a palindrome.

Ignoring spaces/case.

24. Extract domain name from a URL.

Example:
"https://www.google.com/search" → "google"

25. Count frequency of each character in a string.
let a = [""] 
// Output as object:
// { a: 3, b: 1, n: 2 }

array insertion dsa 


Using object to store counts.
let a = [8,6,5,5,5,5,5,7];
let position =0;


for(let i = position; i<a.length-1;i++){
      a[i]=a[i+1];
      
}
a.length = a.length-1
console.log(a);
 
// slice
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);

console.log(result);
console.log(arr);

let arr = [10, 20, 30, 40];
let result = arr.splice(1, 2);

console.log(result);
console.log(arr);

let arr = [1, 2, 3, 4, 5,9,8,7,5,4,6,6,6,6];
arr.splice(2,2,6,6);

console.log(arr);

let arr = [1, 2, 3];
let a = arr.slice();
//let b = arr.splice(0, 1);

console.log(a);

let arr = [5, 6, 7];
let copy = arr.slice();

console.log(copy);


let arr = [1, 2, 3, 4];

arr.splice(2,2);
console.log(arr);

let arr = [1, 2, 3, 4];
let newarr=[];
for(let i = arr.length-1;i>=0;i--){
    newarr.push(arr[i]);
 
}
console.log(newarr);


find second largest number 


let arr = [0,9,8,7,7,8,1, 2, 3, 4];
let largest = arr[0];

for(let i =0; i<=arr.length-1; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(largest); // 5


let arr = [0,9,8,7,7,8,1, 2, 3, 4];

arr.sort()



console.log(arr.length-2); // 5
// latest udpates




let prices = [100, 200, 300];

let finalPrices = prices.map(x => x * 10);

console.log(finalPrices);
// [110, 220, 330]
let prices = [100, 200, 300];

let finalPrices = prices.map(function(x) {
  return x + x * 0.1;
});

console.log(finalPrices);

let prices = [100, 200, 300,"sdf",null,undefined,true];

let finalresult = prices.map(x=>x*2);

console.log(finalresult);

let prices = [100, 200, 300];
let finalPrices = prices.filter(x => x < 150);
console.log(finalPrices); // [200, 300]

let shareprice = [100,200,300,400,500];
let finalshareprice = shareprice.reduce((acc, x) => {
  if (x > 250) {
    acc.push(x);
  }
  return acc;
}, []);
console.log(finalshareprice); // [300,400,500]

let str = "Muzammil";

while(str.length < 15){
    str = str + "*";
    console.log(str);
}   
 ********Muzammil

 let shoesprices = [1000,2000,3000,4000,5000];
    let discountprices = shoesprices.map(x => x - x * 0.1);
    console.log(discountprices); // [900,1800,2700,3600,4500]

 let shoespricess = [1000,2000,3000,4000,5000];
    let discountpricess = shoesprices.filter(x => x - x * 0.1);
    console.log(discountpricess); // [900,1800,2700,3600,4500]

let users = [
  { name: "Ali", active: true },
  { name: "Ahmed", active: false },
  { name: "Sara", active: true }
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers);

let fruits = ["apple", "banana", "mango"];

fruits.forEach((item, index) => {
  console.log(index, item);
});

let nums = [1, 2, 3, 4, 5, 6];

let evenNum = nums.filter(x => x%2 ===0).map(x => x*2   ).reverse().join(", ");

console.log(evenNum); // [4, 8, 12]


Array.prototype.doubleMap = function(cb){
    let output = [];
    for(let i = 0; i < this.length; i++){
        output.push(cb(this[i], i, this));
    }
    return output;
};

let nums = [1,2,3];
let result = nums.doubleMap(n => n*2);
console.log(result); // [2,4,6]


let prices = [100, 200, 300];

let withTax = prices.map(p => p + p * 0.17);
console.log(withTax); // [117, 234, 351]

let withTax2 = prices.doubleMap(p => p + p * 0.17);
console.log(withTax2); // [117, 234, 351]



let users = [
  { id: 1, fname: "Ali", lname: "Khan" },
  { id: 2, fname: "Sara", lname: "Ahmed" }
];

let fullNames = users.map(u => ({
  id: u.id,
  name: `${u.fname} ${u.lname}`
}));
console.log(fullNames);


Create a function which returns the number of true values there are in an array.

    let count = 0;
    let arr = [true, false, true, true];
    for(let i =0; i<arr.length;i++){
        if(arr[i] === true){
            count++;
        }
    }
    console.log(count); // Output: 3
    
Create a function which returns the number of true values there are in an array.

examples with array methods
function countTrue(arr) {
    return arr.filter(Boolean).length;
}
console.log(countTrue([true, false, true, true])); // Output: 3
console.log(countTrue([false, false, false])); // Output: 0


function countTrue(arr) {
  return arr.reduce((count,y)=> count + (y === true),0);
}
console.log(countTrue([true, false, true, true])); // Output: 3


Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    return function() {
        return str;
    };
}

const getHello = redundant("Hello");
console.log(getHello()); // Output: "Hello"

function newcar(a,b,c){
  return function(){
    return c;
}
}

let car = newcar("toyota","corolla",2020);
console.log(car()); 

Use a regular expression to test for an empty string.


let regexcheck = /^$/

console.log(regexcheck.test("df"));


  
  document.getElementById("toggleBtn").addEventListener("click", function(){
    document.getElementById("bdy").style.backgroundColor = "lightblue";
  } );

  document.getElementById("textinput").addEventListener("input",function(){
    this.value = this.value.toUpperCase()
  });

  document.getElementsByTagName("div")[0].addEventListener("mouseover",function(){
    this.style.backgroundColor = "yellow";
  });

  document.getElementsByTagName("div")[1].addEventListener("mouseout",function(){
    this.style.backgroundColor = "blue";
  });
  document.getElementsByTagName("div")[2].addEventListener("mouseout",function(){
    this.style.backgroundColor = "green";
  });


   let marks = [45, 78, 32, 90, 61];

   let pass = marks.filter( x => x >=50).length;

   let fail = marks.filter(x => x <50).length
   




   document.write("Passing marks are: " + pass);
   document.write("<br>Failing marks are: " + fail);
 
    let topp = marks[0];
   for(let i =0; i<marks.length;i++){
    
    if(marks[i] > topp ){
        topp = marks[i];
        
   }  
  
  }
   console.log("Top marks are: " + topp);
    document.write("<br> Top marks are: " + topp);

    let stock =  marks.filter(x => x > 0).length;

    document.write("<br> Stock marks are: " + stock);

    let emails = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com"
];

let unique= [];
for(let i =0; i<emails.length;i++){
  if(!unique.includes(emails[i]))    
    unique.push(emails[i])
}
console.log(unique);

document.write("<br> Unique emails are: " + unique);

let result = Set(emails);
console.log(result);  
document.write("<br> Unique emails using set are: " + result);