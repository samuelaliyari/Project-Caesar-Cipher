const text = document.body.querySelector("#textInput");
const keyInput = document.body.querySelector("#keyInput");
const buttonEncode = document.body.querySelector("#encoder");
const buttonDecode = document.body.querySelector("#decoder");
const output = document.body.querySelector("p");

buttonEncode.addEventListener("click", () => {
    output.textContent = "";
    const input = text.value.split(" ").join("");
    const encodeKey = Number(keyInput.value);
    for (const charachter in input) {
        let code = input.charCodeAt(charachter) + (encodeKey - 32);
            if (code > 90) {
                code -= 26
                output.textContent += String.fromCharCode(code);
            } else {
                output.textContent += String.fromCharCode(code);
            }
        }
    }
)

buttonDecode.addEventListener("click", () => {
    output.textContent = ""
    const input = text.value.split(" ").join("");
    const encodeKey = Number(keyInput.value);
    for (const charachter in input) {
        let code = input.charCodeAt(charachter) + (32 - encodeKey);
        if(code < 97){
            code += 26
            output.textContent += String.fromCharCode(code);
        }
        else {
            output.textContent += String.fromCharCode(code);
        }
        }
    }
)