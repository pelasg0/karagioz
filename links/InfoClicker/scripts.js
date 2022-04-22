//variablesSection

//upgradesVars
var broughtDoner = 0;
var broughtAntivirus = 0;
var broughtVPN = 0;
var broughtRAM = 0;
var broughtMonitor = 0;
var broughtProcessor = 0;
var broughtLaptop = 0;
var broughtPC = 0;
var broughtBot = 0;
var broughtWifi = 0;


//upgradeMultipliers
var broughtDonerM = 0;
var broughtAntivirusM = 0;
var broughtVPNM = 0;
var broughtRAMM = 0;
var broughtMonitorM = 0;
var broughtProcessorM = 0;
var broughtLaptopM = 0;
var broughtPCM = 0;
var broughtBotM = 0;
var broughtWifiM = 0;

//buildingVars
var broughtBasement = 0;
var broughtSingleHouse = 0;
var broughtNeighborhood = 0;
var broughtLandfill = 0;
var broughtOfficeBuilding = 0;
var broughtMetropolis = 0;
var broughtTetherGarage = 0;
var broughtEtheriumGarage = 0;
var broughtBitcoinGarage = 0;
var broughtIlluminatiMansion = 0;



//startIndex
var i = 1;
var clicksCount = 0;
var progressCount = 0;
var multiplier = 1;
let show = true;
var b = 100;
//variablesSection



//callFunctionSection

//timer
setInterval(timer, 1000);
//achievement
//callFunctionSection


//bonusItemFunction
setInterval(function(){
    document.getElementById("bonusElement").style.top= getRandomArbitrary(0, screen.height - 300) + "px"
    document.getElementById("bonusElement").style.left=getRandomArbitrary(0, screen.width - 300) + "px"
    document.getElementById("bonusElement").style.display="block"
    var rndIndex = setInterval(function(){
        document.getElementById("bonusElement").style.display="none"
        clearInterval(rndIndex);

    }, 3000)

    }, 6000)




document.getElementById("bonusElement").onclick = function(){
    document.getElementById("bonusElement").style.display = "none";
    i = i + b;
    setTimeout(function(){
        i = i - b;
    }, 10000)
}



//randomFunction
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//functionsSection
function update()
{   
    //generalInfo
    document.getElementById("first-number").innerHTML ="+" + i.toFixed(1);
    document.getElementById("clicksAmount").innerHTML = clicksCount.toFixed(1) + " Info";
    document.title = clicksCount.toFixed(1) + " Info";
    document.getElementById("surfsPerSecond").innerHTML = "(" + (((broughtDonerM)+(broughtAntivirusM)+(broughtVPNM)+(broughtRAMM)+(broughtMonitorM)+(broughtProcessorM)+(broughtLaptopM)+(broughtPCM)+(broughtBotM)+(broughtWifiM))*multiplier).toFixed(1) + " Info per/s)";

    //upgrades
    document.getElementById("amountBroughtDoner").innerHTML = "You brought " + broughtDoner + " Doner";
    document.getElementById("costBroughtDoner").innerHTML = ((broughtDoner+1) * 15) + " Info";

    document.getElementById("amountBroughtAntivirus").innerHTML = "You brought " + broughtAntivirus + " Antivirus";
    document.getElementById("costBroughtAntivirus").innerHTML = ((broughtAntivirus+1) * 30) + " Info";

    document.getElementById("amountBroughtVPN").innerHTML = "You brought " + broughtVPN + " VPN";
    document.getElementById("costBroughtVPN").innerHTML = ((broughtVPN+1) * 60) + " Info";

    document.getElementById("amountBroughtRAM").innerHTML = "You brought " + broughtRAM + " RAM";
    document.getElementById("costBroughtRAM").innerHTML = ((broughtRAM+1) * 120) + " Info";

    document.getElementById("amountBroughtMonitor").innerHTML = "You brought " + broughtMonitor + " Monitor";
    document.getElementById("costBroughtMonitor").innerHTML = ((broughtMonitor+1) * 240) + " Info";

    document.getElementById("amountBroughtProcessor").innerHTML = "You brought " + broughtProcessor + " Processor";
    document.getElementById("costBroughtProcessor").innerHTML = ((broughtProcessor+1) * 480) + " Info";

    document.getElementById("amountBroughtLaptop").innerHTML = "You brought " + broughtLaptop + " Laptop";
    document.getElementById("costBroughtLaptop").innerHTML = ((broughtLaptop+1) * 960) + " Info";

    document.getElementById("amountBroughtPC").innerHTML = "You brought " + broughtPC + " PC";
    document.getElementById("costBroughtPC").innerHTML = ((broughtPC+1) * 1920) + " Info";

    document.getElementById("amountBroughtBot").innerHTML = "You brought " + broughtBot + " Bot";
    document.getElementById("costBroughtBot").innerHTML = ((broughtBot+1) * 3840) + " Info";

    document.getElementById("amountBroughtWifi").innerHTML = "You upgraded Internet " + broughtWifi + " times";
    document.getElementById("costBroughtWifi").innerHTML = ((broughtWifi+1) * 7680) + " Info";


    //buildings
    document.getElementById("amountBroughtBasement").innerHTML = "You Own " + broughtBasement + " Basement";
    document.getElementById("costBroughtBasement").innerHTML = ((broughtBasement+1) * 100) + " Info";

    document.getElementById("amountBroughtSingleHouse").innerHTML = "You Hacked " + broughtSingleHouse + " Houses";
    document.getElementById("costBroughtSingleHouse").innerHTML = ((broughtSingleHouse+1) * 300) + " Info";

    document.getElementById("amountBroughtNeighborhood").innerHTML = "You Hacked " + broughtNeighborhood + " Neighborhoods";
    document.getElementById("costBroughtNeighborhood").innerHTML = ((broughtNeighborhood+1) * 600) + " Info";

    document.getElementById("amountBroughtLandfill").innerHTML = "You Brought " + broughtLandfill + " Landfills";
    document.getElementById("costBroughtLandfill").innerHTML = ((broughtLandfill+1) * 1000) + " Info";

    document.getElementById("amountBroughtOfficeBuilding").innerHTML = "You hacked " + broughtOfficeBuilding + " office buildings";
    document.getElementById("costBroughtOfficeBuilding").innerHTML = ((broughtOfficeBuilding+1) * 1500) + " Info";


    document.getElementById("amountBroughtMetropolis").innerHTML = "You hacked " + broughtMetropolis + " Metropolises";
    document.getElementById("costBroughtMetropolis").innerHTML = ((broughtMetropolis+1) * 3000) + " Info";

    document.getElementById("amountBroughtTetherGarage").innerHTML = "You Brought " + broughtTetherGarage + " Tether Garages";
    document.getElementById("costBroughtTetherGarage").innerHTML = ((broughtTetherGarage+1) * 4500) + " Info";

    document.getElementById("amountBroughtEtheriumGarage").innerHTML = "You Brought " + broughtEtheriumGarage + " Etherium Garages";
    document.getElementById("costBroughtEtheriumGarage").innerHTML = ((broughtEtheriumGarage+1) * 6000) + " Info";

    document.getElementById("amountBroughtBitcoinGarage").innerHTML = "You Brought " + broughtBitcoinGarage + " Bitcoin Garages";
    document.getElementById("costBroughtBitcoinGarage").innerHTML = ((broughtBitcoinGarage+1) * 7500) + " Info";

    document.getElementById("amountBroughtIlluminatiMansion").innerHTML = "You Brought " + broughtIlluminatiMansion + " Illuminati Mansions";
    document.getElementById("costBroughtIlluminatiMansion").innerHTML = ((broughtIlluminatiMansion+1) * 10000) + " Info";




    getMessage();
    changeBg();
    showAchievement();
}
//infoCount
function clickThis()
{
    clicksCount = clicksCount + 1 + (i-1);
    progressCount = progressCount + 1 + (i-1);
    ani();
    aniSecond();
    update();
}
//moveClickedObject
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
//showNumber
function aniSecond()
{
    document.getElementById("first-number").classList.add("animation-number");
    setTimeout(function() 
    {
        document.getElementById("first-number").classList.remove("animation-number");
    }, 300)
}

/*
function changePic()
{
    if (progressCount < 20)
    {
        document.body.style.backgroundImage = url("imgs/clicker.png");
    }
}
*/

//animationForClickedObject
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
    progressCount = 0;
    clicksCount = 0;

    //upgrades
    broughtDoner = 0;
    broughtAntivirus = 0;
    broughtVPN = 0;
    broughtRAM = 0;
    broughtMonitor = 0;
    broughtProcessor = 0;
    broughtLaptop = 0;
    broughtPC = 0;
    broughtBot = 0;
    broughtWifi = 0;

    //buildings
    autoClicksCount = 0;
    upgradedCPUs = 0;

    update();
}
function saveClicks()
{
    localStorage.setItem("progressCount", progressCount);
    localStorage.setItem("clicksCount", clicksCount);

    //upgrades
    localStorage.setItem("amountBroughtDoner", amountBroughtDoner);
    localStorage.setItem("amountBroughtAntivirus", amountBroughtAntivirus);
    localStorage.setItem("amountBroughtVPN", amountBroughtVPN);
    localStorage.setItem("amountBroughtRAM", amountBroughtRAM);
    localStorage.setItem("amountBroughtMonitor", amountBroughtMonitor);
    localStorage.setItem("amountBroughtProcessor", amountBroughtProcessor);
    localStorage.setItem("amountBroughtLaptop", amountBroughtLaptop);
    localStorage.setItem("amountBroughtPC", amountBroughtPC);
    localStorage.setItem("amountBroughtBot", amountBroughtBot);
    localStorage.setItem("amountBroughtWifi", amountBroughtWifi);
    

    //buildings
    localStorage.setItem("amountBroughtBasement", amountBroughtBasement);
    localStorage.setItem("amountBroughtSingleHouse", amountBroughtSingleHouse);
    localStorage.setItem("amountBroughtNeighborhood", amountBroughtNeighborhood);
    localStorage.setItem("amountBroughtLandfill", amountBroughtLandfill);
    localStorage.setItem("amountBroughtOfficeBuilding", amountAutoClicks);
    localStorage.setItem("amountBroughtMetropolis", amountBroughtMetropolis);
    localStorage.setItem("amountBroughtTetherGarage", amountBroughtTetherGarage);
    localStorage.setItem("amountBroughtEtheriumGarage", amountBroughtEtheriumGarage);
    localStorage.setItem("amountBroughtBitcoinGarage", amountBroughtBitcoinGarage);
    localStorage.setItem("amountBroughtIlluminatiMansion", amountBroughtIlluminatiMansion);
}
function loadClicks()
{
    progressCount = localStorage.getItem("progressCount");
    progressCount = parseInt(progressCount);

    clicksCount = localStorage.getItem("clicksCount");
    clicksCount = parseInt(clicksCount);

    //upgrades
    amountBroughtDoner = localStorage.getItem("amountBroughtDoner");
    amountBroughtDoner = parseInt(amountBroughtDoner);

    amountBroughtAntivirus = localStorage.getItem("amountBroughtAntivirus");
    amountBroughtAntivirus = parseInt(amountBroughtAntivirus);
    
    amountBroughtVPN = localStorage.getItem("amountBroughtVPN");
    amountBroughtVPN = parseInt(amountBroughtVPN);

    amountBroughtRAM = localStorage.getItem("amountBroughtRAM");
    amountBroughtRAM = parseInt(amountBroughtRAM);

    amountBroughtRAM = localStorage.getItem("amountBroughtMonitor");
    amountBroughtRAM = parseInt(amountBroughtMonitor);

    amountBroughtProcessor = localStorage.getItem("amountBroughtProcessor");
    amountBroughtProcessor = parseInt(amountBroughtProcessor);

    amountBroughtLaptop = localStorage.getItem("amountBroughtLaptop");
    amountBroughtLaptop = parseInt(amountBroughtLaptop);

    amountBroughtPC = localStorage.getItem("amountBroughtPC");
    amountBroughtPC = parseInt(amountBroughtPC);

    amountBroughtBot = localStorage.getItem("amountBroughtBot");
    amountBroughtBot = parseInt(amountBroughtBot);

    amountBroughtWifi = localStorage.getItem("amountBroughtWifi");
    amountBroughtWifi = parseInt(amountBroughtWifi);



    //buildings
    amountBroughtBasement = localStorage.getItem("amountBroughtBasement");
    amountBroughtBasement = parseInt(amountBroughtBasement);

    amountBroughtSingleHouse = localStorage.getItem("amountBroughtSingleHouse");
    amountBroughtSingleHouse = parseInt(amountBroughtSingleHouse);

    amountBroughtNeighborhood = localStorage.getItem("amountBroughtNeighborhood");
    amountBroughtNeighborhood = parseInt(amountBroughtNeighborhood);

    amountBroughtLandfill = localStorage.getItem("amountBroughtLandfill");
    amountBroughtLandfill = parseInt(amountBroughtLandfill);

    amountBroughtOfficeBuilding = localStorage.getItem("amountBroughtOfficeBuilding");
    amountBroughtOfficeBuilding = parseInt(amountBroughtOfficeBuilding);

    amountBroughtMetropolis = localStorage.getItem("amountBroughtMetropolis");
    amountBroughtMetropolis = parseInt(amountBroughtMetropolis);

    amountBroughtTetherGarage = localStorage.getItem("amountBroughtTetherGarage");
    amountBroughtTetherGarage = parseInt(amountBroughtTetherGarage);

    amountBroughtEtheriumGarage = localStorage.getItem("amountBroughtEtheriumGarage");
    amountBroughtEtheriumGarage = parseInt(amountBroughtEtheriumGarage);

    amountBroughtBitcoinGarage = localStorage.getItem("amountBroughtBitcoinGarage");
    amountBroughtBitcoinGarage = parseInt(amountBroughtBitcoinGarage);

    amountBroughtIlluminatiMansion = localStorage.getItem("amountBroughtIlluminatiMansion");
    amountBroughtIlluminatiMansion = parseInt(amountBroughtIlluminatiMansion);

    update();
}
function timer()
{
    clicksCount = clicksCount + broughtDoner*0.2;
    clicksCount = clicksCount + broughtAntivirus*0.4;
    clicksCount = clicksCount + broughtVPN*0.6;
    clicksCount = clicksCount + broughtRAM*0.8;
    clicksCount = clicksCount + broughtMonitor*1;
    clicksCount = clicksCount + broughtProcessor*1.2;
    clicksCount = clicksCount + broughtLaptop*1.4;
    clicksCount = clicksCount + broughtPC*1.6;
    clicksCount = clicksCount + broughtBot*1.8;
    clicksCount = clicksCount + broughtWifi*2;

    //clicksCount = clicksCount + upgradedCPUs*0.4;
    progressCount = progressCount + broughtDoner*0.2;
    progressCount = progressCount + broughtAntivirus*0.4;
    progressCount = progressCount + broughtVPN*0.6;
    progressCount = progressCount + broughtRAM*0.8;
    progressCount = progressCount + broughtMonitor*1;
    progressCount = progressCount + broughtProcessor*1.2;
    progressCount = progressCount + broughtLaptop*1.4;
    progressCount = progressCount + broughtPC*1.6;
    progressCount = progressCount + broughtBot*1.8;
    progressCount = progressCount + broughtWifi*2;

    update();
}

/*
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
*/

//normalUpgrades
function buyDoner()
{
    if(clicksCount >= ((broughtDoner+1) * 15))
    {
        clicksCount = clicksCount - ((broughtDoner+1) * 15);
        broughtDoner = broughtDoner + 1;     
        broughtDonerM = broughtDonerM + 0.2;
        update();
    }
}
function buyAntivirus()
{
    if(clicksCount >= ((broughtAntivirus+1) * 30))
    {
        clicksCount = clicksCount - ((broughtAntivirus+1) * 30);
        broughtAntivirus = broughtAntivirus + 1;     
        broughtAntivirusM = broughtAntivirusM + 0.4;
        update();
    }
}
function buyVPN()
{
    if(clicksCount >= ((broughtVPN+1) * 60))
    {
        clicksCount = clicksCount - ((broughtVPN+1) * 60);
        broughtVPN = broughtVPN + 1;     
        broughtVPNM = broughtVPNM + 0.6;
        update();
    }
}

function buyRAM()
{
    if(clicksCount >= ((broughtRAM+1) * 120))
    {
        clicksCount = clicksCount - ((broughtVPN+1) * 120);
        broughtRAM = broughtRAM + 1;     
        broughtRAMM = broughtRAMM + 0.8;
        update();
    }
}
function buyMonitor()
{
    if(clicksCount >= ((broughtMonitor+1) * 240))
    {
        clicksCount = clicksCount - ((broughtMonitor+1) * 240);
        broughtMonitor = broughtMonitor + 1;     
        broughtMonitorM = broughtMonitorM + 1;
        update();
    }
}
function buyProcessor()
{
    if(clicksCount >= ((broughtProcessor+1) * 480))
    {
        clicksCount = clicksCount - ((broughtProcessor+1) * 480);
        broughtProcessor = broughtProcessor + 1;     
        broughtProcessorM = broughtProcessorM + 1.2;
        update();
    }
}
function buyLaptop()
{
    if(clicksCount >= ((broughtLaptop+1) * 960))
    {
        clicksCount = clicksCount - ((broughtLaptop+1) * 960);
        broughtLaptop = broughtLaptop + 1;     
        broughtLaptopM = broughtLaptopM + 1.4;
        update();
    } 
}
function buyPC()
{
    if(clicksCount >= ((broughtPC+1) * 1920))
    {
        clicksCount = clicksCount - ((broughtPC+1) * 1920);
        broughtPC = broughtPC + 1;     
        broughtPCM = broughtPCM + 1.6;
        update();
    } 
}
function buyBot()
{
    if(clicksCount >= ((broughtBot+1) * 3840))
    {
        clicksCount = clicksCount - ((broughtBot+1) * 3840);
        broughtBot = broughtBot + 1;     
        broughtBotM = broughtBotM + 1.8;
        update();
    }  
}
function buyWifi()
{
    if(clicksCount >= ((broughtWifi+1) * 7680))
    {
        clicksCount = clicksCount - ((broughtBot+1) * 3840);
        broughtWifi = broughtWifi + 1;     
        broughtWifiM = broughtWifiM + 2;
        update();
    } 
}

//buildingUpgrades
function buyBasement()
{
    if(clicksCount >= (broughtBasement+1) * 100 )
    {
        i = i + 0.2;
        clicksCount = clicksCount - ((broughtBasement+1) * 100);
        broughtBasement = broughtBasement + 1;
        update();
    }
}
function buySingleHouse()
{
    if(clicksCount >= ((broughtSingleHouse+1) * 300))
    {
        i = i + 0.4;
        clicksCount = clicksCount - ((broughtSingleHouse+1) * 300);
        broughtSingleHouse = broughtSingleHouse + 1;
        update();
    }
}
function buyNeighborhood()
{
    if(clicksCount >= ((broughtNeighborhood+1) * 600))
    {
        i = i + 0.6;
        clicksCount = clicksCount - ((broughtNeighborhood+1) * 600);
        broughtNeighborhood = broughtNeighborhood + 1;
        update();
    }
}
function buyLandfill()
{
    if(clicksCount >= ((broughtLandfill+1) * 1000))
    {
        i = i + 0.8;
        clicksCount = clicksCount - ((broughtLandfill+1) * 1000);
        broughtLandfill = broughtLandfill + 1;
        update();
    }
}
function buyOfficeBuilding()
{
    if(clicksCount >= ((broughtOfficeBuilding+1) * 1500))
    {
        i = i + 1;
        clicksCount = clicksCount - ((broughtOfficeBuilding+1) * 1500);
        broughtOfficeBuilding = broughtOfficeBuilding + 1;
        update();
    }
}
function buyMetropolis()
{
    if(clicksCount >= ((broughtMetropolis+1) * 3000))
    {
        i = i + 1.2;
        clicksCount = clicksCount - ((broughtMetropolis+1) * 3000);
        broughtMetropolis = broughtMetropolis + 1;
        update();
    }
}
function buyTetherGarage()
{
    if(clicksCount >= ((broughtTetherGarage+1) * 4500))
    {
        i = i + 1.4;
        clicksCount = clicksCount - ((broughtTetherGarage+1) * 4500);
        broughtTetherGarage = broughtTetherGarage + 1;
        update();
    }
}
function buyEtheriumGarage()
{
    if(clicksCount >= ((broughtEtheriumGarage+1) * 6000))
    {
        i = i + 1.6;
        clicksCount = clicksCount - ((broughtEtheriumGarage+1) * 6000);
        broughtEtheriumGarage = broughtEtheriumGarage + 1;
        update();
    }
}
function buyBitcoinGarage()
{
    if(clicksCount >= ((broughtBitcoinGarage+1) * 7500))
    {
        i = i + 1.8;
        clicksCount = clicksCount - ((broughtBitcoinGarage+1) * 7500);
        broughtBitcoinGarage = broughtBitcoinGarage + 1;
        update();
    }
}
function buyIlluminatiMansion()
{
    if(clicksCount >= ((broughtIlluminatiMansion+1) * 10000))
    {
        i = i + 2;
        clicksCount = clicksCount - ((broughtIlluminatiMansion+1) * 10000);
        broughtIlluminatiMansion = broughtIlluminatiMansion + 1;
        update();
    } 
}


//buildingUpgrades


//progressMessagesAndBackgrounds
function getMessage()
{
    let mess1 = "Nice to meet you, I am your bot-friend (｡◕‿◕｡)";
    let mess2 = "You are starting your surfing journey pretty well ಠ‿ಠ";
    let mess3 = "Got the hand of it didn't you (╬ ಠ益ಠ)";
    let mess4 = "1010100101010000111...101010101010011";
    let mess5 = "Алмосt killed me you motherfucker";
    let mess6 = "YOU ARE ALREADY THERE ???!";
    let mess7 = "Welcome to TOR Browser !";

    if(progressCount < 30)
    {
        document.getElementById("innerMessage").innerHTML = mess1;
    }
    else if(progressCount < 50)
    {
        document.getElementById("innerMessage").innerHTML = mess2;
    }
    else if(progressCount < 60)
    {
        document.getElementById("innerMessage").innerHTML = mess3;
    }
    else if(progressCount < 70)
    {
        document.getElementById("innerMessage").innerHTML = mess4;
    }
    else if(progressCount < 80)
    {
        document.getElementById("innerMessage").innerHTML = mess5;
    }
    else if(progressCount < 90)
    {
        document.getElementById("innerMessage").innerHTML = mess6;
    }
    else if(progressCount < 100)
    {
        document.getElementById("innerMessage").innerHTML = mess7;
    }
    else if(progressCount > 100)
    {
        document.getElementById("innerMessage").innerHTML = mess7;
    }
}
function changeBg()
{
    if(progressCount < 30)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt1.gif)"; 
    }
    else if(progressCount < 50)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt2.gif)"; 
    }
    else if(progressCount < 60)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt3.gif)"; 
    }
    else if(progressCount < 70)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt4.gif)"; 
    }
    else if(progressCount < 80)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/Unbenannt5.gif)"; 
    }
    else if(progressCount < 90)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/TorBrowser1.gif)"; 
    }
    else if(progressCount < 100)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/TorBrowser1.gif)"; 
    }
    else if(progressCount > 100)
    {
        document.getElementById("desktopWindow").style.backgroundImage = "url(imgs/browsers/TorBrowser1.gif)"; 
    }
}
//progressMessagesAndBackgrounds


//achievementSection





//achievementSection
function showAchievement()
{
    if(progressCount > 10 && progressCount < 20 )
    {
        document.getElementById("ach-1").style.visibility = "visible";
    }
    else if (progressCount > 20 && progressCount < 30 )
    {
        document.getElementById("ach-2").style.visibility = "visible";
    }
    else if (progressCount > 30 && progressCount < 40 )
    {
        document.getElementById("ach-3").style.visibility = "visible";
    }
    else if (progressCount > 40 && progressCount < 60 )
    {
        document.getElementById("ach-4").style.visibility = "visible";
    }
    else if (progressCount > 60 && progressCount < 70 )
    {
        document.getElementById("ach-5").style.visibility = "visible";
    }
    else if (progressCount > 80 && progressCount < 90 )
    {
        document.getElementById("ach-6").style.visibility = "visible";
    }
    else if (progressCount > 100 && progressCount < 110 )
    {
        document.getElementById("ach-7").style.visibility = "visible";
    }
    else if (progressCount > 110 && progressCount < 120 )
    {
        document.getElementById("ach-8").style.visibility = "visible";
    }
    else if (progressCount > 120 && progressCount < 130 )
    {
        document.getElementById("ach-9").style.visibility = "visible";
    }
    else if (progressCount > 130 && progressCount < 140 )
    {
        document.getElementById("ach-10").style.visibility = "visible";
    }
    else
    {
        document.getElementById("ach-1").style.visibility = "hidden";
        document.getElementById("ach-2").style.visibility = "hidden";
        document.getElementById("ach-3").style.visibility = "hidden";
        document.getElementById("ach-4").style.visibility = "hidden";
        document.getElementById("ach-5").style.visibility = "hidden";
        document.getElementById("ach-6").style.visibility = "hidden";
        document.getElementById("ach-7").style.visibility = "hidden";
        document.getElementById("ach-8").style.visibility = "hidden";
        document.getElementById("ach-9").style.visibility = "hidden";
        document.getElementById("ach-10").style.visibility = "hidden";

    }
}

//closeButton
/*document.getElementById("closeAch1").onclick = function(){
    document.getElementById("ach-1").style.visibility = "hidden";
}
document.getElementById("closeAch2").onclick = function(){
    document.getElementById("ach-2").style.visibility = "hidden";
}*/

/*function showHideNumber()
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

}*/


//functionsSection