let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    if (currentInput === "0") currentInput = ""; // حذف پیش‌فرض 0
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
}

function toggleSign() {
    if (currentInput.startsWith("-")) {
        currentInput = currentInput.slice(1);
    } else if (currentInput !== "0") {
        currentInput = "-" + currentInput;
    }
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput.replace("÷", "/").replace("×", "*"));
        display.textContent = result;

        // هدایت به سایت
        if (result === 81) {
            window.location.href = "http://www.parsquran.com/book/";
        }
    } catch (error) {
        display.textContent = "خطا";
    }
}
