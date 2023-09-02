
const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");

const goToLoginButton = document.getElementById("go-to-login");
const goToRegisterButton = document.getElementById("go-to-register");

let usernameRegisterValue = document.getElementById("username-register");
let passwordRegisterValue = document.getElementById("password-register");

let usernameLoginValue = document.getElementById("username-login");
let passwordLoginValue = document.getElementById("password-login");

let generatedId = -1;

let users = [
    //--WITHOUT LOCAL STORAGE--
    // {
    //     "username":"",
    //     "password":"",
    //     "id":""
    // }
]

registerButton.addEventListener("click", function(){
    if(usernameRegisterValue.value && passwordRegisterValue.value){
        //--WITHOUT LOCAL STORAGE--
        // generatedId++;
        // users.push({
        //     "username": usernameRegisterValue.value,
        //     "password": passwordRegisterValue.value,
        //     "id": generatedId});
        // console.log(users);
        localStorage.setItem(usernameRegisterValue.value, passwordRegisterValue.value);
        alert("you registered!");
    }
    else { 
        alert("you need an input");
    }
});

loginButton.addEventListener("click", function(){
    let objectKeys = Object.keys(localStorage);
    for (let i of objectKeys) {
        if(objectKeys.includes(usernameLoginValue.value)){
            if(i == usernameLoginValue.value){
                if(localStorage.getItem(i) == passwordLoginValue.value){
                    alert("you logged in!");
                    window.location.href = 'loggedIn.html';
                    break
                }
                else {
                    alert("ebi sa");
                }
            }
        }
        else {
            alert("ebi sa");
        }
      }
});

goToLoginButton.addEventListener("click",function(){
    document.getElementById("login-container").style.display = "flex";
    document.getElementById("register-container").style.display = "none";
})
goToRegisterButton.addEventListener("click",function(){
    document.getElementById("register-container").style.display = "flex";
    document.getElementById("login-container").style.display = "none";
})


