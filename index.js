const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function calculate() {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}

input.addEventListener('keydown', function (eventKeydown) {
    eventKeydown.preventDefault()
    if (allowedKeys.includes(eventKeydown.key)) {
        input.value += eventKeydown.key
        return
    }
    if (eventKeydown.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (eventKeydown.key === "Enter") {
        calculate()
    }
})


const numberBtn = document.querySelectorAll(".charKey").forEach(elementBtn => {
    elementBtn.addEventListener("click", function () {
        const value = elementBtn.dataset.value
        input.value += value
    })
});

document.getElementById("equal").addEventListener("click", function(){
    calculate()
})

document.getElementById("clear").addEventListener("click", function(){
    input.value = ""
    resultInput.value = ""
    resultInput.classList.remove("error")
})

document.getElementById("copyToClipboard").addEventListener("click", function(eventC){
    const copyBtn = eventC.currentTarget
    if(copyBtn.innerText === "Copy"){
        copyBtn.innerText = "Copied!"
        copyBtn.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    } else{
        copyBtn.innerText = "Copy"
        copyBtn.classList.remove("success")
    }
})

const switchTheme = document.getElementById("themeSwitcher")
switchTheme.addEventListener("click", function(){
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
      }
})
