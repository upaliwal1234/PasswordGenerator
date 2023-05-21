const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "~!@#$%^&*()_+/?"

// selectors
const passBox = document.getElementById("password")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);
}


function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}

function copyClipboard() {
    let text = document.getElementById("password").innerText;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
        alert("Copied the text: " + text);
      } catch (err) {
        console.error('Failed to copy: ', err);
        alert("Faied to copy: " + err);
      }
    }
    copyContent();
}

document.getElementById("clip-icon").addEventListener(
    "click",
    function () {
        copyClipboard();
    }
)
document.getElementById("generate").addEventListener(
    "click",
    function () {
        generatePassword();
    }
)
document.getElementById("reset").addEventListener(
    "click",
    function () {
        location.reload();
    }
)