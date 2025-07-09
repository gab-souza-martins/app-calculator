"use strict";
let theme = localStorage.getItem("theme");
const themeToggleBox = document.getElementById("theme-toggle-box");
const enableThemeOne = () => {
    document.body.classList.remove("theme3");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "left";
    }
    localStorage.setItem("theme", "themeOne");
    theme = "themeOne";
};
const enableThemeTwo = () => {
    document.body.classList.add("theme2");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "center";
    }
    localStorage.setItem("theme", "themeTwo");
    theme = "themeTwo";
};
const enableThemeThree = () => {
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
    if (themeToggleBox) {
        themeToggleBox.style.justifyContent = "right";
    }
    localStorage.setItem("theme", "themeThree");
    theme = "themeThree";
};
window.addEventListener("load", () => {
    switch (localStorage.getItem("theme")) {
        case "themeTwo":
            enableThemeTwo();
            break;
        case "themeThree":
            enableThemeThree();
            break;
        default:
            enableThemeOne();
    }
});
if (themeToggleBox) {
    theme = localStorage.getItem("theme");
    themeToggleBox.addEventListener("click", () => {
        switch (theme) {
            case "themeTwo":
                enableThemeThree();
                break;
            case "themeThree":
                enableThemeOne();
                break;
            default:
                enableThemeTwo();
                break;
        }
    });
}
//# sourceMappingURL=index.js.map