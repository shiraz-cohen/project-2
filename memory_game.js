
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var back4 = document.getElementById("back4");
var back5 = document.getElementById("back5");
var back6 = document.getElementById("back6");
var back7 = document.getElementById("back7");
var back8 = document.getElementById("back8");
var back9 = document.getElementById("back9");
var back10 = document.getElementById("back10");
var back11 = document.getElementById("back11");
var back12 = document.getElementById("back12");
var back13 = document.getElementById("back13");
var back14 = document.getElementById("back14");
var back15 = document.getElementById("back15");
var back16 = document.getElementById("back16");
var back17 = document.getElementById("back17");
var back18 = document.getElementById("back18");

back1.addEventListener("click", picLink);
back2.addEventListener("click", picLink);
back3.addEventListener("click", picLink);
back4.addEventListener("click", picLink);
back5.addEventListener("click", picLink);
back6.addEventListener("click", picLink);
back7.addEventListener("click", picLink);
back8.addEventListener("click", picLink);
back9.addEventListener("click", picLink);
back10.addEventListener("click", picLink);
back11.addEventListener("click", picLink);
back12.addEventListener("click", picLink);
back13.addEventListener("click", picLink);
back14.addEventListener("click", picLink);
back15.addEventListener("click", picLink);
back16.addEventListener("click", picLink);
back17.addEventListener("click", picLink);
back18.addEventListener("click", picLink);

var count = 0;
var picId1;
var pic1;
var score = 0;
var pic_backId1 = this.attributes.id.value;
var pic_back1 = document.getElementsByName(pic_backId1);
var element = document.getElementById("score");

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function picLink() {

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    var pic_backId = this.attributes.id.value;
    var pic_back = document.getElementsByName(pic_backId);
    document.getElementById("score").innerHTML = "הניקוד שצברת: " + score;

    if (pic.className === "hide") {
        pic.className = "";
        count += 1;
        if (count == 2) {
            pic1 = document.getElementById(picId1);
            pic_back1 = document.getElementsByName(pic_backId1);
            console.log(pic_back1)

            if (pic1.src === pic.src) {
                await sleep(650);
                pic.className = "hide";
                pic1.className = "hide";
                pic_back[0].className = "hide_back";
                pic_back1[0].className = "hide_back";
                count = 0;
                score += 1;
                document.getElementById("score").innerHTML = "הניקוד שצברת: " + score;

            } else {
                await sleep(650);
                pic.className = "hide";
                pic1.className = "hide";
                count = 0;
            }
        }
        else {
            picId1 = this.attributes["data-img"].value;
            pic_backId1 = this.attributes.id.value;
        }
    }
    else {
        pic.className = "hide"
    }
}

/*
function clockBlock() {
    var timeNow=new Date();
     var hrs=timeNow.getHours();
     var min=timeNow.getMinutes();
     var sec=timeNow.getSeconds();
     var amPm="AM";
     if (hrs==0) {
            hrs=12;
     }
     if (hrs>12) {
             amPm="PM";
             hrs=hrs-12;
     }

     if (hrs<10) {
             hrs="0"+hrs;
     }

     if (min<10) {
             min="0"+min;
     }

     if (sec<10) {
             sec="0"+sec;
     }

    var printClock=document.getElementById('clockDisplay');
    printClock.textContent=hrs+":"+min+":"+sec+" "+amPm;
    printClock.innerText=/*hrs+":"+min+ ":"+":"+sec+" ";
     setTimeout('clockBlock()',1000);
} */

var sec=0;
function clockBlock() {
        sec=sec+1;
        if (sec < 10) {
            sec = "0" + sec;
        }
    var printClock = document.getElementById('clockDisplay');
    printClock.textContent = /*hrs + ":" + min + ":" + */sec;
    printClock.innerText =/*hrs+":"+min+":"+*/sec + " ";
    setTimeout('clockBlock()', 1000);
} 
