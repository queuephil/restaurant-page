import {defineElement, insertElement} from "./modules.js"
import pizza1Img from "./ressources/pizza1.jpg";
import pizza2Img from "./ressources/pizza2.jpg";
import pizza3Img from "./ressources/pizza3.jpg";
import coffeeImg from "./ressources/coffee.jpg";

function createMenu() {
    // define the required Elements
    const elements = [
        defineElement(".content", "div", "menu"),
            defineElement(".menu", "h1", "title", "Menu della Casa"),
            defineElement(".menu", "div", "grid"),
                defineElement(".grid", "div", "gridText.pizza1"),    
                    defineElement(".pizza1", "h2", "grid", "Pizza Gustosissima"),
                    defineElement(".pizza1", "div", "grid", "The mother of all pizzas. Thin, crispy crust with sun-ripened tomatoes and choice mozzarella. No other cheese melts so evenly or brings out that delectable pizza aroma better."),
                defineElement(".grid", "img", "gridImg", "", pizza3Img, "Pizza"),

                defineElement(".grid", "img", "gridImg", "", pizza2Img, "Pizza"),
                defineElement(".grid", "div", "gridText.pizza2"),    
                    defineElement(".pizza2", "h2", "grid", "Pizza Gustosissima"),
                    defineElement(".pizza2", "div", "grid", "The mother of all pizzas. Thin, crispy crust with sun-ripened tomatoes and choice mozzarella. No other cheese melts so evenly or brings out that delectable pizza aroma better."),
                
                defineElement(".grid", "div", "gridText.pizza3"),    
                    defineElement(".pizza3", "h2", "grid", "Pizza Gustosissima"),
                    defineElement(".pizza3", "div", "grid", "The mother of all pizzas. Thin, crispy crust with sun-ripened tomatoes and choice mozzarella. No other cheese melts so evenly or brings out that delectable pizza aroma better."),
                defineElement(".grid", "img", "gridImg", "", pizza1Img, "Pizza"),
                
                defineElement(".grid", "img", "gridImg", "", coffeeImg, "Pizza"),
                defineElement(".grid", "div", "gridText.coffee"),    
                    defineElement(".coffee", "h2", "grid", "Espresso Gustosissima"),
                    defineElement(".coffee", "div", "grid", "Espresso is a concentrated form of coffee produced by forcing hot water under high pressure through finely ground coffee beans."),
                ]
    
    // generate the elements in the DOM
    elements.forEach((element) => insertElement(element))
}

export {createMenu};