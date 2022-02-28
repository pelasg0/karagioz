var clicksCount = 0;
var autoClicksCount = 0;
var upgradedCPUs = 0;
var broughtPC = 0;
var multiplier = 1;
let show = true;
var i = 1;
function update()
{   
    document.getElementById("first-number").innerHTML ="+" + i;
    document.getElementById("clicksAmount").innerHTML = "You got " + clicksCount + " Surfs";
    document.title = clicksCount + " Surfs";

    document.getElementById("amountAutoClicks").innerHTML = "You Own " + autoClicksCount + " Bots..";
    document.getElementById("costAutoClick").innerHTML = ((autoClicksCount+1) * 12) + " Surfs";

    document.getElementById("amountUpgradesCPU").innerHTML = "You Upgraded CPU " + upgradedCPUs + " Times..";
    document.getElementById("costUpgradedCPU").innerHTML = ((upgradedCPUs+1) * 15) + " Surfs";

    document.getElementById("amountBroughtPCs").innerHTML = "You brought " + broughtPC + " PCs";
    document.getElementById("costBroughtPC").innerHTML = ((broughtPC+1) * 15) + " Surfs";

    document.getElementById("surfsPerSecond").innerHTML = "You are gaining " + (((autoClicksCount)+(upgradedCPUs*2))*multiplier) + " Surfs per/s";
    getMessage();
    changeBg();
}
function clickThis()
{
    clicksCount = clicksCount + 1 + (i-1);
    showHideNumber();
    ani();
    aniSecond();
    update();
}
function ani()
{    
    //document.getElementById("clicksImg").className = "animation";
    document.getElementById("clicksImg").classList.add("animation");
    //document.getElementById("first-number").classList.add("animation-number");
    setTimeout(function() 
    {
        document.getElementById("clicksImg").classList.remove("animation");  
        //document.getElementById("first-number").classList.remove("animation-number");
    }, 100)
}
function aniSecond()
{
    document.getElementById("first-number").classList.add("animation-number");
    setTimeout(function() 
    {
        document.getElementById("first-number").classList.remove("animation-number");
    }, 300)
}

function changePic()
{
    if (clicksCount < 20)
    {
        document.body.style.backgroundImage = url("imgs/clicker.png");
    }
}
function resizeThis()
{
    var imge = document.getElementById("clicksImg");
    if(click == true)
    {
        imge.style.transform = "scale(1.1)";
        imge.style.transition = "transform 0.25s ease";
        click = false;
    }
    else
    {
        imge.style.transform = "scale(1)";
        imge.style.transition = "transform 0.25s ease";
        click = true;
    }
}
function resetClicks()
{
    clicksCount = 0;
    autoClicksCount = 0;
    upgradedCPUs = 0;
    update();
}
function saveClicks()
{
    localStorage.setItem("clicksCount", clicksCount);
    localStorage.setItem("amountAutoClicks", amountAutoClicks);
    localStorage.setItem("upgradedCPUs", upgradedCPUs);
    localStorage.setItem("amountBroughtPCs", amountBroughtPCs);
}
function loadClicks()
{
    clicksCount = localStorage.getItem("clicksCount");
    clicksCount = parseInt(clicksCount);
    amountAutoClicks = localStorage.getItem("amountAutoClicks");
    amountAutoClicks = parseInt(amountAutoClicks);
    upgradedCPUs = localStorage.getItem("upgradedCPUs");
    upgradedCPUs = parseInt(upgradedCPUs);
    amountBroughtPCs = localStorage.getItem("amountBroughtPCs");
    amountBroughtPCs = parseInt(amountBroughtPCs);
    update();
}
function timer()
{
    clicksCount = clicksCount + autoClicksCount;
    clicksCount = clicksCount + upgradedCPUs*2;
    update();
}
setInterval(timer, 1000);
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
function buyAutoClick()
{
    if(clicksCount >= (autoClicksCount + 1) * 12 )
    {
        clicksCount = clicksCount - ((autoClicksCount + 1) * 12);
        autoClicksCount = autoClicksCount + 1;
        update();
    }
}
function upgradeCPU()
{
    if(clicksCount >= ((upgradedCPUs+1) * 15))
    {
        clicksCount = clicksCount - ((upgradedCPUs+1) * 15);
        upgradedCPUs = upgradedCPUs + 1;
        update();
    }
}
function buyPC()
{
    if(clicksCount >= ((broughtPC+1) * 15))
    {
        i++;
        clicksCount = clicksCount - ((broughtPC+1) * 15);
        broughtPC = broughtPC + 1;     
        update();
    }
}
function getMessage()
{
    let mess1 = "Now you are starting your web adventure.";
    let mess2 = "Jeez you are way too fast top!! ";
    let mess3 = "Motherfucker you are breaking the browsасдsdalksdkaslöАХХДАС!!!?!??ДАСЛДК:А110010101001";
    let mess4 = "1010100101010000111...101010101010011";
    let mess5 = "Алмосt killed me you motherfucker";
    let mess6 = "YOU ARE ALREADY THERE ???!";
    let mess7 = "Welcome to TOR Browser !";
    if(clicksCount < 30)
    {
        document.getElementById("innerMessage").innerHTML = mess1;
    }
    else if(clicksCount < 50)
    {
        document.getElementById("innerMessage").innerHTML = mess2;
    }
    else if(clicksCount < 60)
    {
        document.getElementById("innerMessage").innerHTML = mess3;
    }
    else if(clicksCount < 70)
    {
        document.getElementById("innerMessage").innerHTML = mess4;
    }
    else if(clicksCount < 80)
    {
        document.getElementById("innerMessage").innerHTML = mess5;
    }
    else if(clicksCount < 90)
    {
        document.getElementById("innerMessage").innerHTML = mess6;
    }
    else if(clicksCount < 100)
    {
        document.getElementById("innerMessage").innerHTML = mess7;
    }
    else if(clicksCount > 100)
    {
        document.getElementById("innerMessage").innerHTML = mess7;
    }
}
function changeBg()
{
    if(clicksCount < 30)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt1.jpg)"; 
    }
    else if(clicksCount < 50)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt2.jpg)"; 
    }
    else if(clicksCount < 60)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt3.jpg)"; 
    }
    else if(clicksCount < 70)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt4.jpg)"; 
    }
    else if(clicksCount < 80)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt5.jpg)"; 
    }
    else if(clicksCount < 90)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt6.jpg)"; 
    }
    else if(clicksCount < 100)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt7.jpg)"; 
    }
    else if(clicksCount > 100)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt7.jpg)"; 
    }
}
function showHideNumber()
{
    //const number = document.getElementById("first-number");
    //wait(1000);
    //if (show == true)
    //{
    //    number.style.opacity = 1;
    //    show = false;
    //}
    //else
    //{
    //    number.style.opacity = 0;
    //    show = true;
    //}

}