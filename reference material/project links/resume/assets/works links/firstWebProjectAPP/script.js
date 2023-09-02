
//submit button input fun 

let submitButton = document.getElementById("submit-button");


function getInputName() {
    let name = document.getElementById("name-input").value;
    console.log(name);
    return name;
}
function getInputEmail() {
    let email = document.getElementById("email-input").value;
    return email;
}
function getInputTel() {
    let tel = document.getElementById("tel-input").value;
    return tel;
}
function showInfo() {
    let name = getInputName();
    let email = getInputEmail();
    let tel = getInputTel(); 
    alert(
        `
        Thanks for the message, ${name}
        We will contact you on this email: ${email}
        Or
        Telephone: ${tel}   
        `
        );
}

submitButton.addEventListener('click', showInfo);


//slideshow func

var i = 0; 
var images = [];
var time = 3000;

// Image List

images[0] = 'assets/slideShowPics/overflowing-toilet-dream-burning-2.jpg';

images[1] = 'assets/sectionsPics/shutterstock_1452207740.jpg';

images[2] = 'assets/slideShowPics/shutterstock_569657272.jpg';


//Change image Func

function changeImg() {

    slideButtonColor();
    document.slide.src = images[i];
    
    if(i < images.length - 1) {
        i++;
        //console.log("asd");
    }
    else {
        i = 0;
    }
    
    setTimeout("changeImg()", time);
}

function slideButtonColor() {
    if( i == 0) {
        document.getElementById("first-button").style.backgroundColor = "white";
        document.getElementById("second-button").style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementById("third-button").style.backgroundColor = "rgb(0,0,0,0)";
    }
    else if( i == 1) {
        document.getElementById("first-button").style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementById("second-button").style.backgroundColor = "white";
        document.getElementById("third-button").style.backgroundColor = "rgb(0,0,0,0)";
    }
    else if( i == 2) {
        document.getElementById("first-button").style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementById("second-button").style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementById("third-button").style.backgroundColor = "white";
    }
}

window.onload = changeImg;