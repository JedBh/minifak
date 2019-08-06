"use strict";

const NAMES = ["Jed", "Einav", "Shmueli", "Gilad", "Ofek", "Gal T", "Ori", "Gal D", "Dedash",
               "Koifman", "Romy", "Rotem", "Tahel", "Stav", "Alon"];

function initSquares() {
    for (let i = 0; i < NAMES.length; i++) {
        let div = document.createElement("div");
        let textDiv = document.createTextNode(NAMES[i]);
        div.appendChild(textDiv);
        div.classList.add("box");
        document.querySelector(".container").appendChild(div);
    }
    
    let div = document.createElement("div");
    let textDiv = document.createTextNode("Confirm");

    div.appendChild(textDiv);
    div.classList.add("box");
    div.id = "confirm";
    document.querySelector(".container").appendChild(div);
}

function assignNameToBoxes(list) {
    for (let i = 0; i < list.length; i++) {
        boxes[i].name = list[i];
    }
}


function genRandomCon(list) {
    return Math.floor(Math.random() * list.length);
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("active");
        boxes[i].isActive = false;
    }
}

function mainFunction() {
    let curNameList = [];
    assignNameToBoxes(NAMES);
    for (let i = 0; i < NAMES.length; i++) {
        boxes[i].isActive = false;
        boxes[i].addEventListener("click", function() {
            if (!this.isActive) {
                // logic
                curNameList.push(NAMES[i]);
                this.isActive = true;

                // style
                this.classList.add("active");
            } else {
                // logic
                this.isActive = false;
                let removeIndex = curNameList.indexOf(this.name);
                curNameList.splice(removeIndex, 1);

                // style
                this.classList.remove("active");
                this.classList.remove("result");
            }
        });
    }
    confirmBox.addEventListener("click", function() {
        let randomIndex = genRandomCon(curNameList);

        brightUp(curNameList[randomIndex]);
        reset();
        curNameList = [];
    });
}

function brightUp(name) {
    for (let i = 0; i < boxes.length; i++) {
        if (name === boxes[i].name) {
            boxes[i].classList.add("result");
        }
    }
}

initSquares();

// boxes filled with names
let boxes = document.querySelectorAll(".box");

// confirm box
let confirmBox = document.querySelector("#confirm"); 

mainFunction();