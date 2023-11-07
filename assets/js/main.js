const text = document.body.querySelector("#textInput");
const keyInput = document.body.querySelector("#keyInput");
const buttonEncode = document.body.querySelector("#encoder");
const buttonDecode = document.body.querySelector("#decoder");
const output = document.body.querySelector("p");
console.log(String.fromCharCode(97))
buttonEncode.addEventListener("click", () => {
    output.textContent = ""
    const input = text.value.split(" ").join("");
    const encodeKey = Number(keyInput.value);
    for (const charachter in input) {
        let code = input.charCodeAt(charachter) - 55 + encodeKey
        output.textContent += String.fromCharCode(code)
}}
)
buttonDecode.addEventListener("click", () => {
    output.textContent = ""
    const input = text.value;
    const encodeKey = Number(keyInput.value);
    for (const charachter in input) {
        let code = input.charCodeAt(charachter) - encodeKey +55
        output.textContent += String.fromCharCode(code)
}}
)