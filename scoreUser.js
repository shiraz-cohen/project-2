var records = [];
var recordsAnimate = [];
var userNameKey;
var timeUser;
var scoreUser;
let min = 0;
let sec = 0;
var nameNow = localStorage.getItem("userNow");

function memoryTables() {

    /*-----------------משחק הזיכרון-טבלאות ------------------------ */
    document.getElementById("userRecoedsTable").innerHTML = "טבלת השיאים של  " + nameNow;

    timeUser = JSON.parse(localStorage.getItem(nameNow)).memoryTime[0]
    if (timeUser != null) {
        sec = timeUser;
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("userTimeRecord1").innerHTML = min + ":" + sec + " דקות";
    }

    timeUser = JSON.parse(localStorage.getItem(nameNow)).memoryTime[1];
    if (timeUser != null) {
        sec = timeUser;
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        } document.getElementById("userTimeRecord2").innerHTML = min + ":" + sec + " דקות";
    }
    timeUser = JSON.parse(localStorage.getItem(nameNow)).memoryTime[2];
    if (timeUser != null) {
        sec = timeUser;
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        } document.getElementById("userTimeRecord3").innerHTML = min + ":" + sec + " דקות";
    }

    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "userNow") {
            userNameKey = localStorage.key(i);
            timeUser = JSON.parse(localStorage.getItem(userNameKey)).memoryTime[0];
            if (timeUser != null) {
                records.push([userNameKey, timeUser]);
            }
        }
    }
    records.sort(function (a, b) { return a[1] - b[1] });

    if (records[0] != null) {
        sec = records[0][1];
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("userName1").innerHTML = records[0][0];
        document.getElementById("timeRecord1").innerHTML = min + ":" + sec + " דקות";
    }
    if (records[1] != null) {
        sec = records[1][1];
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("userName2").innerHTML = records[1][0];
        document.getElementById("timeRecord2").innerHTML = min + ":" + sec + " דקות";
    }
    if (records[2] != null) {
        sec = records[2][1];
        if (sec > 59) {
            sec = sec - 60;
            min = 1;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("userName3").innerHTML = records[2][0];
        document.getElementById("timeRecord3").innerHTML = min + ":" + sec + " דקות";
    }

    /*-----------------משחק האותיות-טבלאות ------------------------ */
    document.getElementById("userRecoedsTable2").innerHTML = "טבלת השיאים של  " + nameNow;

    scoreUser = JSON.parse(localStorage.getItem(nameNow)).animateScore[0]
    if (scoreUser != null)
        document.getElementById("userScoreRecord1").innerHTML = scoreUser + " נקודות";

    scoreUser = JSON.parse(localStorage.getItem(nameNow)).animateScore[1]
    if (scoreUser != null)
        document.getElementById("userScoreRecord2").innerHTML = scoreUser + " נקודות";

    scoreUser = JSON.parse(localStorage.getItem(nameNow)).animateScore[2]
    if (scoreUser != null)
        document.getElementById("userScoreRecord3").innerHTML = scoreUser + " נקודות";

    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "userNow") {
            userNameKey = localStorage.key(i);
            scoreUser = JSON.parse(localStorage.getItem(userNameKey)).animateScore[0];
            if (scoreUser != null) {
                recordsAnimate.push([userNameKey, scoreUser]);
            }
        }
    }
    recordsAnimate.sort(function (a, b) { return b[1] - a[1] });

    if (recordsAnimate[0] != null) {
        document.getElementById("user_Name1").innerHTML = recordsAnimate[0][0];
        document.getElementById("scoreRecord1").innerHTML = recordsAnimate[0][1] + " נקודות";
    }

    if (recordsAnimate[1] != null) {
        document.getElementById("user_Name2").innerHTML = recordsAnimate[1][0];
        document.getElementById("scoreRecord2").innerHTML = recordsAnimate[1][1] + " נקודות";
    }

    if (recordsAnimate[2] != null) {
        document.getElementById("user_Name3").innerHTML = recordsAnimate[2][0];
        document.getElementById("scoreRecord3").innerHTML = recordsAnimate[2][1] + " נקודות";
    }
}
