
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
let tree=document.getElementById("tree")

        // move all text into <span>
        // they occupy exactly the place necessary for the text,
        for (let li of tree.querySelectorAll('li')) {
            let span = document.createElement('span');
            li.prepend(span);
            span.append(span.nextSibling); // move the text node into span
          }
      
          // catch clicks on whole tree
          tree.onclick = function(event) {
      
            if (event.target.tagName != 'SPAN') {
              return;
            }
      
            let childrenContainer = event.target.parentNode.querySelector('ul');
            if (!childrenContainer) return; // no children
      
            childrenContainer.hidden = !childrenContainer.hidden;
          }