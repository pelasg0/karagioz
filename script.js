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
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });





  /*
https://youtu.be/69FkUGpw3ok
*/


/*panels*/


panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
