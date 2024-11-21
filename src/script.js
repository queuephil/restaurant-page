// import CSS into JS
import "./style.css";
import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {createContact} from "./contact.js";


// init start screen
document.querySelector(".content").innerHTML = "";
createHome();
// add eventlistener to the buttons that call the appropriate function
document.querySelector(".homeNav").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createHome();
})
document.querySelector(".menuNav").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createMenu();
})
document.querySelector(".contactNav").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createContact();
})
document.querySelector(".button.menu").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createMenu();
})
document.querySelector(".button.contact").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createContact();
})
document.querySelector(".logo").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = "";
    createHome();
})