let name = "Thinh Vo";
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myName = document.querySelector(".header");
myName.textContent = name + "'s Lab 4";
// 2 Insert two paragraphs into the div with the class "content" 
//  Label each paragraph with a distinct class name
const paragraphs = document.querySelector(".content");
let firstPa = document.createElement("p");
firstPa.innerText = "";
firstPa.className = "p1";
let secondPa = document.createElement("p");
secondPa.innerText = "";
secondPa.className = "p2";
paragraphs.appendChild(firstPa);
paragraphs.appendChild(secondPa);
document.body.appendChild(paragraphs);
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
firstPa.append("my name has " + name.length + " characters");
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let firstLine = secondPa.append("the third character in my name is: " + name.charAt(2).toUpperCase());
secondPa.appendChild(document.createElement("br"));
// 6 Add a new line to your second paragraph
let secondLine = document.createElement("p");
secondLine.innerText = "";
// 7 Return the final three characters of your last name to that new line
secondLine = secondPa.append(name.slice(6,8));
// 8 Substring your first and last name into two separate variables
let first = name.substring(0,4);
let last = name.substring(5);
// 9 Add the total length of your first and last names together
let total = (first.length + last.length);
// 10 Display that total next to your name in your header
myName.append(" The length of my name is " + total);