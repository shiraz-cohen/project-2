function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
const elem1 = document.getElementById("animate1");
const elem2 = document.getElementById("animate2");
const elem3 = document.getElementById("animate3");
const elem4 = document.getElementById("animate4");
const elem5 = document.getElementById("animate5");
const elem6 = document.getElementById("animate6");
const elem7 = document.getElementById("animate7");
const elem8 = document.getElementById("animate8");
const elem9 = document.getElementById("animate9");
const elem10 = document.getElementById("animate10");

const newG = document.getElementById("div1Button");
const nextG = document.getElementById("div2Button");

let id1;
let id2;
let id3;
let id4;
let id5;
let id6;
let id7;
let id8;
let id9;
let id10;

async function myMove() {
    document.getElementById("divButton").className="hide";
    let _pos1 = 0;
    let _pos2 = 0;
    let _pos3 = 0;
    let _pos4 = 0;
    let _pos5 = 0;
    let _pos6 = 0;
    let _pos7 = 0;
    let _pos8 = 0;
    let _pos9 = 0;
    let _pos10 = 0;

    let pos2 = 120;
    let pos3 = 250;
    let pos4 = 750;
    let pos5 = 600;
    let pos6 = 350;
    let pos7 = 800;
    let pos8 = 700;
    let pos9 = 550;
    let pos10 = 300;

    var count = 0;

  /*  clearInterval(id); */
    elem1.className = "color";
    id1 = setInterval(frame1, 20);
    await sleep(1000);
    elem2.className = "color";
    id2 = setInterval(frame2, 20);
    await sleep(700);
    elem3.className = "color";
    id3 = setInterval(frame3, 20);
    await sleep(1500);
    elem4.className = "color";
    id4 = setInterval(frame4, 20);
    await sleep(600);
    elem5.className = "color";
    id5 = setInterval(frame5, 20);
    await sleep(900);
    elem6.className = "color";
    id6 = setInterval(frame6, 20);
    await sleep(800);
    elem7.className = "color";
    id7 = setInterval(frame7, 20);
    await sleep(500);
    elem8.className = "color";
    id8 = setInterval(frame8, 20);
    await sleep(600);
    elem9.className = "color";
    id9 = setInterval(frame9, 20);
    await sleep(800);
    elem10.className = "color";
    id10 = setInterval(frame10, 20);
    await sleep(700);

    function frame1() {
        if (_pos1 == 450) {
            elem1.className = "hide";
            clearInterval(id1);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
                

            }
        } else {
            _pos1++;
            elem1.style.top = _pos1 + "px";
        }
    }

    function frame2() {
        if (_pos2 == 450) {
            elem2.className = "hide";
            clearInterval(id2);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
                
            }
        } else {
            _pos2++;
            elem2.style.top = _pos2 + "px";
            elem2.style.right = pos2 + "px";
        }
    }

    function frame3() {
        if (_pos3 == 450) {
            elem3.className = "hide";
            clearInterval(id3);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos3++;
            elem3.style.top = _pos3 + "px";
            elem3.style.right = pos3 + "px";
        }
    }

    function frame4() {
        if (_pos4 == 450) {
            elem4.className = "hide";
            clearInterval(id4);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos4++;
            elem4.style.top = _pos4 + "px";
            elem4.style.right = pos4 + "px";
        }
    }

    function frame5() {
        if (_pos5 == 450) {
            elem5.className = "hide";
            clearInterval(id5);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos5++;
            elem5.style.top = _pos5 + "px";
            elem5.style.right = pos5 + "px";
        }
    }

    function frame6() {
        if (_pos6 == 450) {
            elem6.className = "hide";
            clearInterval(id6);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos6++;
            elem6.style.top = _pos6 + "px";
            elem6.style.right = pos6 + "px";
        }
    }

    function frame7() {
        if (_pos7 == 450) {
            elem7.className = "hide";
            clearInterval(id7);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos7++;
            elem7.style.top = _pos7 + "px";
            elem7.style.right = pos7 + "px";
        }
    }

    function frame8() {
        if (_pos8 == 450) {
            elem8.className = "hide";
            clearInterval(id8);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos8++;
            elem8.style.top = _pos8 + "px";
            elem8.style.right = pos8 + "px";
        }
    }

    function frame9() {
        if (_pos9 == 450) {
            elem9.className = "hide";
            clearInterval(id9);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos9++;
            elem9.style.top = _pos9 + "px";
            elem9.style.right = pos9 + "px";
        }
    }

    function frame10() {
        if (_pos10 == 450) {
            elem10.className = "hide";
            clearInterval(id10);
            count+=1;
            if(count==2){
                document.getElementById("container").className = "end_game";
                document.getElementById("container").innerHTML = "game over";
                newG.className="";
            }
        } else {
            _pos10++;
            elem10.style.top = _pos10 + "px";
            elem10.style.right = pos10 + "px";
        }
    }
}

var score = 0;


function Click1() {
    elem1.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id1);
    
}

function Click2() {
    elem2.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id2);
    

}
function Click3() {
    elem3.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id3);
    

}
function Click4() {
    elem4.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id4);
    

}
function Click5() {
    elem5.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id5);
    

}
function Click6() {
    elem6.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id6);
    

}
function Click7() {
    elem7.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id7);
    

}
function Click8() {
    elem8.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id8);
    

}
function Click9() {
    elem9.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id9);
    

}
function Click10() {
    elem10.className = "hide";
    score += 1;
    document.getElementById("gameScore").innerHTML = "הניקוד שצברת: " + score;
    clearInterval(id10);
    finish(score);

}

function finish(score){
 if(score > 7){
    document.getElementById("container").className = "end_game";
    document.getElementById("container").innerHTML = "כל הכבוד";
    nextG.className="";
    newG.className="";
 }
}