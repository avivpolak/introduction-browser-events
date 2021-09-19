
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


document.getElementById("hideChilds").addEventListener("click", hideChilds)


function hideChilds(parentElement){
    for (let child of parentElement){
        child.style.hidden
    }
}
function handleHide(e){
    hideChilds(e.target)
}