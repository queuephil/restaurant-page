import {defineElement, insertElement} from "./modules.js"

// h1 Welcome at La Cucina
// image hero
// h2 menu
// import menu
// h2 contact
// import contact
// >> create a function that I can call in script.js

import heroImg from "./ressources/hero.jpg";
import pizza3Img from "./ressources/pizza3.jpg";
import coffeeImg from "./ressources/coffee.jpg";
import contactImg from "./ressources/contact.jpg";

function createHome() {
    // define the required Elements
    const elements = [
        defineElement(".content", "div", "home"),
            defineElement(".home", "div", "hero"),
                defineElement(".hero", "img", "image", "", heroImg, "Pizzeria"),
                defineElement(".hero", "h1", "title", "benvenuto, benvenuta"),
            defineElement(".home", "h2", "title", "Want to see the menu?"),
            defineElement(".home", "div", "grid"),
                defineElement(".grid", "div", "gridText.pizza1"),    
                    defineElement(".pizza1", "h2", "grid", "Pizza Gustosissima"),
                    defineElement(".pizza1", "div", "grid", "The mother of all pizzas. Thin, crispy crust with sun-ripened tomatoes and choice mozzarella. No other cheese melts so evenly or brings out that delectable pizza aroma better."),
                defineElement(".grid", "img", "gridImg", "", pizza3Img, "Pizza"),                
                defineElement(".grid", "img", "gridImg", "", coffeeImg, "Pizza"),
                defineElement(".grid", "div", "gridText.coffee"),    
                    defineElement(".coffee", "h2", "grid", "Espresso Gustosissima"),
                    defineElement(".coffee", "div", "grid", "Espresso is a concentrated form of coffee produced by forcing hot water under high pressure through finely ground coffee beans."),
            defineElement(".home", "div", "button.menu", "Go to menu"),
            defineElement(".home", "h2", "title", "<hr><br>Want to contact us?"),
            defineElement(".home", "img", "fullImage", "", contactImg, "contactImg"),
            defineElement(".home", "div", "button.contact", "Contact us"),
    ]
    
    // generate the elements in the DOM
    elements.forEach((element) => insertElement(element))
}

export {createHome};