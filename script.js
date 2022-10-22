const switchButton = document.getElementById("username");
const earthPic = document.getElementById("earth");
const locationText = document.getElementById("location-text");
const panels = document.querySelectorAll(".panel");

/*switch button*/


switchButton.addEventListener("click", function(){
    if(switchButton.checked) {
        earthPic.style.backgroundImage = "url('refpics/earthtextures/Qk4UXcU4.png')";
        locationText.style.display = "flex";
    }
    else {
        earthPic.style.backgroundImage = "url('refpics/earthtextures/Qk4UXcU.png')";
        locationText.style.display = "none";
    }
})


/*type animation*/
const typed2 = new Typed('#about-me-text-headline', {
    strings: ['Web Developer','Web Designer','Concept Artist','Graphic Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

const typed3 = new Typed('#header-text', {
    strings: ['Hello World !'],
    typeSpeed: 150,
    loop: false
})

const typed4 = new Typed('#skills-text', {
    strings: ['My Skills'],
    typeSpeed: 150,
    loop: false
})

const typed5 = new Typed('#project-text', {
    strings: ['My Projects'],
    typeSpeed: 150,
    loop: false
})







  /*
https://youtu.be/69FkUGpw3ok
*/

