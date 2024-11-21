// create objects with the properties required for the DOM elements
function defineElement(parentSelector, htmlTag, className, textContent, srcPath, altText) {
    return { parentSelector, htmlTag, className, textContent, srcPath, altText };
}

// create the DOM elements with the properties of the objects
function insertElement({ parentSelector, htmlTag = "div", className, textContent ="", srcPath, altText }) {
    const newChild = document.createElement(htmlTag);
    newChild.classList.add(...className.split(".")); // multiple classes possible e.g. c1.c2
    newChild.innerHTML = textContent; // HTML possible e.g. <br>
    newChild.src = srcPath;
    newChild.alt = altText;
    
    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
}

// make them available
export {defineElement, insertElement}