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









