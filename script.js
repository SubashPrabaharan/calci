
const buttons = document.querySelectorAll('.buttons button');

const display = document.querySelector('.display-screen');

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == "clear") {
            display.innerText = "";
        } else if (button.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText === "1+" && display.innerText !== "" && button.id === "equal") {
            display.innerText = "Never Settle";
            display.style.backgroundColor = "red";
            setTimeout(() => {
                display.innerText = "";
                display.style.backgroundColor = "#18a342";
            }, 2000);
        } else if (button.classList.contains('btn-number') || button.classList.contains('btn-operator')) {
            display.innerText += button.innerText;
        } 
        // else if(display.innerText="sin")
        // {
        //   display.innerHTML='sin'
        //   if(display.innerText=='sin' && display.innerText!=='')
        //   {
        //     display.innerText=Math.sin(display.innerHTML)
        //   }
        // }
        
        else if (button.classList.contains('btn-function')) {
            switch (button.id) {
                case 'sqrt':
                    display.innerText = Math.sqrt(display.innerHTML);
                    break;
                case 'square':
                    display.innerText = Math.pow(display.innerHTML, 2);
                    break;
                case 'exp':
                    display.innerText = Math.exp(display.innerHTML);
                    break;
                case 'cube':
                    display.innerText = Math.pow(display.innerHTML, 3);
                    break;
                case 'sin': {
                    // display.innerText = 'sin'
                    display.innerText = Math.sin(display.innerHTML)
                    break;}
                case 'cos':
                    display.innerText = Math.cos(display.innerHTML);
                    break;
                case 'tan':
                    display.innerText = Math.tan(display.innerHTML);
                    break;
                case 'log':
                    display.innerText = Math.log10(display.innerHTML);
                    break;
                case 'pi':
                    display.innerText = Math.PI;
                    break;
                case 'factorial':
                    display.innerText = factorial(display.innerHTML);
                    break;
                default:
                    break;
            }
        } else if (display.innerText != "" && button.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && button.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        }
    });
});




const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
