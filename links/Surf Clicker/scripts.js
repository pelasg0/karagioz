var clicksCount = 0;
var autoClicksCount = 0;
var upgradedCPUs = 0;
var multiplier = 1;
let click = true;
function update()
{
    document.getElementById("clicksAmount").innerHTML = "You got " + clicksCount + " Surfs";
    document.title = clicksCount + " Surfs";

    document.getElementById("amountAutoClicks").innerHTML = "You Own " + autoClicksCount + " Bots..";
    document.getElementById("costAutoClick").innerHTML = ((autoClicksCount+1) * 12) + " Surfs";

    document.getElementById("amountUpgradesCPU").innerHTML = "You Upgraded CPU " + upgradedCPUs + " Times..";
    document.getElementById("costUpgradedCPU").innerHTML = ((upgradedCPUs+1) * 15) + " Surfs";

    document.getElementById("surfsPerSecond").innerHTML = "You are gaining " + (((autoClicksCount)+(upgradedCPUs*2))*multiplier) + " Surfs per/s";
    getMessage();
    changeBg();
}
function clickThis()
{
    clicksCount = clicksCount + 1;
    update();
}
function ani()
{    
    //document.getElementById("clicksImg").className = "animation";
    document.getElementById("clicksImg").classList.add("animation");
    setTimeout(function() {
    document.getElementById("clicksImg").classList.remove("animation");
  }, 100)
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
}
function loadClicks()
{
    clicksCount = localStorage.getItem("clicksCount");
    clicksCount = parseInt(clicksCount);
    amountAutoClicks = localStorage.getItem("amountAutoClicks");
    amountAutoClicks = parseInt(amountAutoClicks);
    upgradedCPUs = localStorage.getItem("upgradedCPUs");
    upgradedCPUs = parseInt(upgradedCPUs);

    update();
}
function timer()
{
    clicksCount = clicksCount + autoClicksCount;
    clicksCount = clicksCount + upgradedCPUs*2;
    update();
}
setInterval(timer, 1000);
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
function getMessage()
{
    let mess1 = "Now you are starting your web adventure.";
    let mess2 = "In Google you find various ways to learn information what you can sell.";
    let mess3 = "Over the time you got bored and starting searching for something else.";
    if(clicksCount == 20)
    {
        document.getElementById("innerMessage").innerHTML = mess1;
    }
    else if(clicksCount == 25)
    {
        document.getElementById("innerMessage").innerHTML = mess2;
    }
    else if(clicksCount == 30)
    {
        document.getElementById("innerMessage").innerHTML = mess3;
    }
}
function changeBg()
{
    if(clicksCount > 30)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/back1.png)"; 
    }
}
function createNumberOnClick()
{
    let clicker;

    let element = document.createElement("div");
    element.textContent = "+" + clicksCount;
    element.classList.add("number","unselected");
    clicker.appendChild(element);
}