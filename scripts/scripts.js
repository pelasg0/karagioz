


const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false")
    {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else 
    {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});



var counter = 1; 
setInterval(function()
{
    document.getElementById('landscape-radio' + counter).checked = true;
    counter ++;
    if(counter > 3)
    {
        counter = 1;
    }
}, 5000);



