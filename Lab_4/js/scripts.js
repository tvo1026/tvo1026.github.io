// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myName = document.querySelector("div.header");
myName.textContent = "Thinh Vo";
// 2 Insert two paragraphs into the div with the class "content" 
//  Label each paragraph with a distinct class name
const paragraphs = document.querySelector("div.content");
let firstPa = document.createElement("p");
firstPa.className = "p1";
firstPa.innerText = "First paragraph:";
let secondPa = document.createElement("p");
secondPa.className = "p2";
secondPa.innerText = "Second paragraph: ";
paragraphs.appendChild(firstPa);
paragraphs.appendChild(document.createElement("br"));
paragraphs.appendChild(secondPa);
document.body.appendChild(paragraphs);
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let name = "Thinh Vo"
firstPa.append(" my name has " + name.length + " characters");
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
let firstLine = secondPa.append("The third character of my name is: " + name.charAt(2));
// 6 Add a new line to your second paragraph
let secondLine = document.createElement("p");
secondLine.innerHTML = ""
// 7 Return the final three characters of your last name to that new line
secondLine = secondPa.append("\r\n new is :" + name.slice(4,7));
// 8 Substring your first and last name into two separate variables
let first = name.substring(0,4);
let last = name.substring(5);
// 9 Add the total length of your first and last names together
let total = (first.length + last.length);
// 10 Display that total next to your name in your header
let totalLength = document.createElement("p");
totalLength.innerText = total;
myName.appendChild(totalLength);