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
    let _pos1 = 0;
    let _pos2 = 0;
    let _pos3 = 0;
    let _pos4 = 0;

    let pos2 = 120;
    let pos3 = 250;
    let pos4 = 400;


  /*  clearInterval(id); */
    elem1.className = "color";
    id1 = setInterval(frame1, 20);
    await sleep(2000);
    elem2.className = "color";
    id2 = setInterval(frame2, 20);
    await sleep(1000);
    elem3.className = "color";
    id3 = setInterval(frame3, 20);
    await sleep(1500);
    elem4.className = "color";
    id4 = setInterval(frame4, 20);
    await sleep(2500);
    elem5.className = "color";
    id5 = setInterval(frame5, 20);
    await sleep(900);
    elem6.className = "color";
    id6 = setInterval(frame6, 20);
    await sleep(3000);
    elem7.className = "color";
    id7 = setInterval(frame7, 20);
    await sleep(1000);
    elem8.className = "color";
    id8 = setInterval(frame8, 20);
    await sleep(2000);
    elem9.className = "color";
    id9 = setInterval(frame9, 20);
    await sleep(2000);
    elem10.className = "color";
    id10 = setInterval(frame10, 20);
    await sleep(2700);

    function frame1() {
        if (pos == 450) {
            elem1.className = "hide";
            clearInterval(id1);
        } else {
            pos++;
            elem1.style.top = pos + "px";
        }
    }

    function frame2() {
        if (pos1 == 450) {
            elem2.className = "hide";
            clearInterval(id2);
        } else {
            pos1++;
            elem2.style.top = pos1 + "px";
            elem2.style.right = pos2 + "px";
        }
    }

    function frame3() {
        if (_pos3 == 450) {
            elem3.className = "hide";
            clearInterval(id3);
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
        } else {
            _pos4++;
            elem4.style.top = _pos4 + "px";
            elem4.style.right = pos4 + "px";
        }
    }

    function frame5() {
        if (pos1 == 450) {
            elem5.className = "hide";
            clearInterval(id5);
        } else {
            pos1++;
            elem5.style.top = pos1 + "px";
            elem5.style.right = pos2 + "px";
        }
    }

    function frame6() {
        if (pos1 == 450) {
            elem6.className = "hide";
            clearInterval(id6);
        } else {
            pos1++;
            elem6.style.top = pos1 + "px";
            elem6.style.right = pos2 + "px";
        }
    }

    function frame7() {
        if (pos1 == 450) {
            elem7.className = "hide";
            clearInterval(id7);
        } else {
            pos1++;
            elem7.style.top = pos1 + "px";
            elem7.style.right = pos2 + "px";
        }
    }

    function frame8() {
        if (pos1 == 450) {
            elem8.className = "hide";
            clearInterval(id8);
        } else {
            pos1++;
            elem8.style.top = pos1 + "px";
            elem8.style.right = pos2 + "px";
        }
    }

    function frame9() {
        if (pos1 == 450) {
            elem9.className = "hide";
            clearInterval(id9);
        } else {
            pos1++;
            elem9.style.top = pos1 + "px";
            elem9.style.right = pos2 + "px";
        }
    }

    function frame10() {
        if (pos1 == 450) {
            elem10.className = "hide";
            clearInterval(id10);
        } else {
            pos1++;
            elem10.style.top = pos1 + "px";
            elem10.style.right = pos2 + "px";
        }
    }
}

var score = 0;

function Click1() {
    elem1.className = "hide";
    score += 1;
    console.log(score);
    clearInterval(id);
}

function Click2() {
    elem2.className = "hide";
    score += 1;
    console.log(score);
    clearInterval(id1);

}