// *Tema
let theme = localStorage.getItem("theme");

const themeToggleBox: HTMLElement | null =
   document.getElementById("theme-toggle-box");
const themeToggleBtn: HTMLElement | null =
   document.getElementById("theme-toggle-btn");

const enableThemeOne = (): void => {
   document.body.classList.remove("theme3");
   if (themeToggleBtn) {
      themeToggleBtn.style.transform = "translateX(0%)";
   }
   localStorage.setItem("theme", "themeOne");
   theme = "themeOne";
};
const enableThemeTwo = (): void => {
   document.body.classList.add("theme2");
   if (themeToggleBtn) {
      themeToggleBtn.style.transform = "translateX(120%)";
   }
   localStorage.setItem("theme", "themeTwo");
   theme = "themeTwo";
};
const enableThemeThree = (): void => {
   document.body.classList.remove("theme2");
   document.body.classList.add("theme3");
   if (themeToggleBtn) {
      themeToggleBtn.style.transform = "translateX(240%)";
   }
   localStorage.setItem("theme", "themeThree");
   theme = "themeThree";
};

window.addEventListener("load", (): void => {
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
   themeToggleBox.addEventListener("click", (): void => {
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

// *Calculadora
const display = document.getElementById("display") as HTMLInputElement;
const keys = document.querySelectorAll("button");

let currentInput: string = "";
let resetNext: boolean = false;

function updateDisplay() {
   display.value = currentInput || "0";
}

function appendValue(value: string) {
   if (resetNext && !["+", "-", "*", "/"].includes(value)) {
      currentInput = "";
      resetNext = false;
   }
   currentInput += value;
   updateDisplay();
}

function resetDisplay() {
   currentInput = "";
   updateDisplay();
}
function deleteLast() {
   currentInput = currentInput.slice(0, -1);
   updateDisplay();
}
function calculate() {
   try {
      const sanitized = currentInput.replace(/\b0+(?=\d)/g, "");
      const result = eval(sanitized);
      currentInput = result.toString();
      resetNext = true;
      updateDisplay();
   } catch {
      currentInput = "Error";
      resetNext = true;
      updateDisplay();
   }
}

keys.forEach((key) => {
   const value = key.getAttribute("data-value");
   const action = key.getAttribute("data-action");

   key.addEventListener("click", () => {
      if (value !== null) {
         appendValue(value);
      } else if (action === "reset") {
         resetDisplay();
      } else if (action === "delete") {
         deleteLast();
      } else if (action === "equals") {
         calculate();
      }
   });
});

updateDisplay();
