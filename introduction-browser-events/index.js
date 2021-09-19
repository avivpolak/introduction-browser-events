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


let tree=document.getElementById("hideTree")
tree.addEventListener("click",handleHide)


function hideChilds(parentElement){
    console.log(parentElement)
    for (let child of parentElement.children){
        child.classList.toggle("hide")
    }
}
function handleHide(e){
    hideChilds(e.target)
}

let grid=document.getElementById("grid")
grid.onclick = function(e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    // if TH, then sort
    // cellIndex is the number of th:
    //   0 for the first column
    //   1 for the second column, etc
    sortGrid(th.cellIndex, th.dataset.type);
  };

  function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) compares two rows, need for sorting
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    // sort
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }
  let tooltipElem;

  document.onmouseover = function(event) {
    let target = event.target;

    // if we have tooltip HTML...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    // ...create the tooltip element

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    // position it above the annotated element (top-center)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // don't cross the left window edge

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // if crossing the top window edge, show below instead
      top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
  };

  document.onmouseout = function(e) {

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

  };






    document.onmouseover = function(event) {
      let target = event.target;

      // if we have tooltip HTML...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...create the tooltip element

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // position it above the annotated element (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // don't cross the left window edge

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // if crossing the top window edge, show below instead
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };
  




    //default-browser-action

    //1. because the broser need to get "return 'function name()" on "onclick" attibute

    contents.onclick = function(event) {

        function handleLink(href) {
          let isLeaving = confirm(`Leave for ${href}?`);
          if (!isLeaving) return false;
        }
  
        let target = event.target.closest('a');
  
        if (target && contents.contains(target)) {
          return handleLink(target.getAttribute('href'));
        }
      }



      thumbs.onclick = function(event) {
        let thumbnail = event.target.closest('a');
  
        if (!thumbnail) return;
        showThumbnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
      }
  
      function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
      }



let ulop = document.getElementById("ulop")
ulop.addEventListener("click",handleMakeItGreen)


function handleMakeItGreen(e){
e.target.classList.add("green")
if (e.ctrlKey){
     e.target.classList.add("normal")
}}


let tooltip;

document.onmouseover = function(event) {
  // important: a fast-moving mouse may "jump" right to a child on an annotated node, skipping the parent
  // so mouseover may happen on a child.

  let anchorElem = event.target.closest('[data-tooltip]');

  if (!anchorElem) return;

  // show tooltip and remember it
  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
}

document.onmouseout = function() {
  // it is possible that mouseout triggered, but we're still inside the element
  // (its target was inside, and it bubbled)
  // but in this case we'll have an immediate mouseover,
  // so the tooltip will be destroyed and shown again
  //
  // luckily, the "blinking" won't be visible,
  // as both events happen almost at the same time
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }

}


function showTooltip(anchorElem, html) {
  let tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = anchorElem.getBoundingClientRect();

  // position the tooltip over the center of the element
  let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchorElem.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  return tooltipElem;
}






