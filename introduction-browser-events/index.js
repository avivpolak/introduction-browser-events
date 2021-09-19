"use strict";
//hide text
document.getElementById("elem").addEventListener("click", hide);

function hide() {
    document.getElementById("text").hidden = true;
}

//hideself
function hideself() {
    this.hidden = true;
}
document.getElementById("elemn").addEventListener("click", hideself);

//which hendler?
//the answer is line 1 and line 5

//soccer
field.onclick = function (event) {
    let ball = document.getElementById("ball");
    // window-relative field coordinates
    let fieldCoords = this.getBoundingClientRect();

    // the ball has position:absolute, the field: position:relative
    // so ball coordinates are relative to the field inner left-upper corner
    let ballCoords = {
        top:
            event.clientY -
            fieldCoords.top -
            field.clientTop -
            ball.clientHeight / 2,
        left:
            event.clientX -
            fieldCoords.left -
            field.clientLeft -
            ball.clientWidth / 2,
    };

    // prevent crossing the top field boundary
    if (ballCoords.top < 0) ballCoords.top = 0;

    // prevent crossing the left field boundary
    if (ballCoords.left < 0) ballCoords.left = 0;

    // // prevent crossing the right field boundary
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // prevent crossing the bottom field boundary
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
};

//hide list
let list = document.getElementById("list");
list.addEventListener("click", openul);
function openul() {
    document.getElementById("ul").classList.toggle("hide");
}

let body = document.getElementById("body");
let outerdiv = createElement("div", [], [], { id: "outerdiv" });
body.appendChild(outerdiv);
for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let x = document.createElement("img");
    x.setAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png"
    );
    x.setAttribute("id", i);
    x.style.width = "40px";
    x.style.width = "40px";
    p.innerText =
        i +
        `The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.`;
    let body = document.getElementById("outerdiv");

    div.appendChild(x);
    div.appendChild(p);
    body.appendChild(div);
}
outerdiv.addEventListener("click", pop);
function pop(e) {
    const element = e.target;
    if (element.id) element.parentElement.classList.toggle("hide");
}









//emoji scroll 


/* label the images, just for convenience, to visually track them */
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
    li.style.position = "relative";
    li.insertAdjacentHTML(
        "beforeend",
        `<span style="position:absolute;left:0;top:0">${i}</span>`
    );
    i++;
}

/* configuration */
let width = 130; // image width
let count = 3; // visible images count

let listy = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // ribbon scroll position

carousel.querySelector(".prev").onclick = function () {
    // shift left
    position += width * count;
    // can't move to the left too much, end of images
    position = Math.min(position, 0);
    listy.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
    // shift right
    position -= width * count;
    // can only shift the ribbbon for (total ribbon length - visible count) images
    position = Math.max(position, -width * (listElems.length - count));
    listy.style.marginLeft = position + "px";
};



























function createElement(tagname, children = [], classes = [], attributes) {
    //the most generic element builder.we will build all the elements here.
    const el = document.createElement(tagname);

    //children

    for (let child of children) {
        if (typeof child === "string" || typeof child === "number") {
            child = document.createTextNode(child);
        }
        el.appendChild(child);
    }

    //classes

    for (const cls of classes) {
        el.classList.add(cls);
    }

    //attrubutes

    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }

    return el;
}
