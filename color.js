const colorPara = document.getElementById("color");
const colorCopy = document.getElementById("color_copy");

const ChangeColor = () => {
const randomNum = Math.floor(Math.random() * 16777215);
const randomCode = "#"+randomNum.toString(16);
document.body.style.backgroundColor = randomCode;
colorPara.innerText = randomCode;
colorCopy.innerText = "Copy";
}

const colorCode = () => {
    navigator.clipboard.writeText(colorPara.innerText)
    colorCopy.innerText = "Copied";
}

// Initial Call
ChangeColor();

document.getElementById("col_btn").addEventListener("click",ChangeColor)
colorPara.addEventListener("click", colorCode)
colorCopy.addEventListener("click",colorCode);