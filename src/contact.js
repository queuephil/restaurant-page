console.log("contact")

// h1 = contact
// image
// contact-info
// >> create a function that I can call in script.js

// create objects with the properties required for the DOM elements
function defineElement(tag, className, textContent, parentSelector, src, alt) {
    return {
      tag,
      className,
      textContent,
      parentSelector,
      src,
      alt,
    };
}

// create the DOM elements with the properties of the objects
function makeElement({ tag = "div", className, textContent, parentSelector, src, alt }) {
    const newChild = document.createElement(tag);
    newChild.classList.add(className);
    newChild.textContent = textContent;
    newChild.src = src;
    newChild.alt = alt;
    
    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
}

// define the required Elements
const element1 = defineElement("div", "title", "Element1", ".content");
const element2 = defineElement("img", "image", "Element2", ".content", "https://cdn.pixabay.com/photo/2014/10/03/07/56/coffee-471166_1280.jpg", "Pizza");

// generate the elements in the DOM
makeElement(element1);
makeElement(element2);

// export the functions to the other scripts
export {defineElement, makeElement};