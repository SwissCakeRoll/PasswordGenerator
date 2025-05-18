const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById("button-el")
let password1 = document.querySelector(".rectangle1")
let password2 = document.querySelector(".rectangle2")

button.addEventListener("click", generatePassword)
password1.addEventListener("click", copyPassword)
password2.addEventListener("click", copyPassword)

function newPassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function generatePassword(){
    password1.textContent = newPassword()
    password2.textContent = newPassword()
}

function copyPassword(){
    const password = event.target.textContent
    
    if (!password) return;

    // Create a temporary textarea
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    
    try {
        const success = document.execCommand("copy");
        if (success) {
            alert("Password copied to clipboard!");
        } else {
            alert("Failed to copy password.");
        }
    } catch (err) {
        console.error("Fallback copy failed", err);
    }
    
    document.body.removeChild(textarea);
}





