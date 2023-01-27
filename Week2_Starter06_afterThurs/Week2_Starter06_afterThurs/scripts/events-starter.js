console.log("loaded js script successfully");

function clickLink(e) {
    console.log(e.target.innerHTML);
	alert("I'm going to take you to " + e.target.innerHTML);
}

function focusButton(e) {
	e.target.style.backgroundColor = "#bde0fe";
}

function leaveFocusButton(e) {
    e.target.style.backgroundColor = "#ffc8dd";
}

function clickButton(e) {
    let button = e.target;
    button.innerHTML = "CLICKED!"
}

let list = document.getElementsByTagName('ul')[0];

let anchors = document.getElementsByTagName('a');
for (let i = 0; i < anchors.length; i++) {
    anchor = anchors[i];
    anchor.addEventListener('click', clickLink, false);
}

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('mouseover', focusButton, false);
    button.addEventListener('mouseout', leaveFocusButton, false);
    button.addEventListener('click', clickButton, false);
}

let firstItem = document.getElementsByTagName('li')[0];
let firstItemLink = firstItem.firstChild.nextSibling;
// console.log(firstItemLink);
firstItemLink.href = "https://google.com/";

let body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerHTML = "Sarah's Incredible Events Page"
body.insertBefore(title, list);