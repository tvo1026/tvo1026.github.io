let ctry = [];
ctry.className = "countries";

// Button
const btn = document.querySelector("button");

//Inject a new list of countries
ctry = [
    {name: "Argentina", code: "AR"},
    {name: "Australia", code: "AU"},
    {name: "Brazil", code: "BR"},
    {name: "Cambodia", code: "KH"},
    {name: "Austria", code: "AT"},
    {name: "Ethiopia", code: "ET"},
    {name: "Denmark", code: "DK"},
    {name: "China", code: "CN"},
    {name: "Macao", code: "MO" },
    {name: "Malaysia", code: "MY"},
    {name: "Mexico", code: "MX"},
    {name: "Japan", code: "JP"},
    {name: "Italy", code: "IT"},
    {name: "Israel", code: "IL"},
    {name: "Hungary", code: "HU"},
    {name: "Indonesia", code: "ID"},
    {name: "Hong Kong", code: "HK"},
    {name: "Greenland", code: "GL"},
    {name: "Germany", code: "DE"},
    {name: "Finland", code: "FI"},
    {name: "France", code: "FR"},
    {name: "Switzerland", code: "CH" },
    {name: "Spain", code: "ES"},
    {name: "Singapore", code: "SG"},
    {name: "Turkey", code: "TR"},
    {name: "Viet Nam", code: "VN" },
    {name: "The United States of America", code: "US"},
    {name: "Thailand", code: "TH"},
    {name: "Sweden", code: "SE"},
    {name: "Norway", code: "NO"},
    {name: "New Zealand", code: "NZ"},
    {name: "Myanmar", code: "MM"},
    {name: "Nepal", code: "NP"},
    {name: "The Republic of Korea", code: "KR"},
    {name: "Maldives", code: "MV"}
];

//Random countries
let getRandom = function(list) {
    return list[Math.floor((Math.random() * list.length))];
};

let getCountry = function(country) {
    let fullCountry = [country.name,country.code.bold()].join(" ");
    return "<li>" + fullCountry + "</li>"
}

//Display the result
function display() {
    let newContent = document.querySelector(".content");
    newContent.innerHTML = "<ol>" + ctry.map(getCountry).join("") + "</ol>";
}

//Button 
btn.addEventListener("click", display);