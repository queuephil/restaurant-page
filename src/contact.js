import {defineElement, insertElement} from "./modules.js"
import contactImg from "./ressources/contact.jpg";

function createContact() {
    // define the required Elements
    const elements = [
        defineElement(".content", "div", "contact"),
            defineElement(".contact", "h1", "title", "Grande Amore"),
            defineElement(".contact", "img", "fullImage", "", contactImg, "contactImg"),
            defineElement(".contact", "div", "innsbruck"),
                defineElement(".innsbruck", "h2", "info", "Innsbruck"),
                defineElement(".innsbruck", "div", "info", 
                    "Streetofthestreets 1<br>0678/987654321<br>Open 24/7"),
            defineElement(".contact", "div", "imst"),
                defineElement(".imst", "h2", "info", "Imst"),
                defineElement(".imst", "div", "info", 
                    "Streetofthestreets 1<br>0678/987654321<br>Open 24/7"),
            defineElement(".contact", "div", "stanton"),
                defineElement(".stanton", "h2", "info", "St. Anton"),
                defineElement(".stanton", "div", "info", 
                    "Streetofthestreets 1<br>0678/987654321<br>Open 24/7"),
    ]
    // generate the elements in the DOM
    elements.forEach((element) => insertElement(element))
}

export {createContact};