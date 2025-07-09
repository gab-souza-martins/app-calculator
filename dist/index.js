"use strict";
let theme = localStorage.getItem("theme");
const themeToggleBox = document.getElementById("theme-toggle-box");
const enableThemeOne = () => {
    document.body.classList.remove("theme3");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "left";
    }
    localStorage.setItem("theme", "themeOne");
};
const enableThemeTwo = () => {
    document.body.classList.add("theme2");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "center";
    }
    localStorage.setItem("theme", "themeTwo");
};
const enableThemeThree = () => {
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "right";
    }
    localStorage.setItem("theme", "themeThree");
};
window.addEventListener("load", () => {
    if (theme === null || theme === "themeOne") {
        enableThemeOne();
    }
    if (theme === "themeTwo") {
        enableThemeTwo();
    }
    if (theme === "themeThree") {
        enableThemeThree();
    }
});
if (themeToggleBox) {
    theme = localStorage.getItem("theme");
    themeToggleBox.addEventListener("click", () => {
        console.log("click");
        switch (theme) {
            case null:
                enableThemeTwo();
                break;
            case "themeOne":
                enableThemeTwo();
                break;
            case "themeTwo":
                enableThemeThree();
                break;
            case "themeThree":
                enableThemeOne();
                break;
            default:
                break;
        }
    });
}
//# sourceMappingURL=index.js.map