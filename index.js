const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePassword = document.getElementById("gen-password");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two"); 
const copied = document.querySelector("#copied");

let passwordShow = false;

generatePassword.addEventListener("click", () => {
    passwordShow = true;
    passwordOne.textContent = generateRandomPassword();
    passwordTwo.textContent = generateRandomPassword();
})

passwordOne.addEventListener("click", ()=>{
    copy(passwordOne.textContent);
    if(passwordShow){
        copied.classList.add("visible");
        setTimeout(()=>{
            copied.classList.remove("visible");
        },500)
    }
})
passwordTwo.addEventListener("click", ()=>{
    copy(passwordTwo.textContent);
    if(passwordShow){
        copied.classList.add("visible");
        setTimeout(()=>{
            copied.classList.remove("visible");
        },500)
    }
})

function generateRandomPassword() {
        let password = "";
        for(let i=0; i<16; i++){
            password += characters[generateRandomNumber()];
        }
        return password;
    }

function generateRandomNumber() {
    return Math.floor(Math.random()*characters.length)
}

function copy(text){
    navigator.clipboard.writeText(text);
}
