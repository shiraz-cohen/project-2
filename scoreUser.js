var records = [];
var userNameKey;
var timeUser;

function memoryTables() {
    var nameNow = localStorage.getItem("userNow");
    document.getElementById("userRecoedsTable").innerHTML = "טבלת השיאים של  " + nameNow;
    timeUser= JSON.parse(localStorage.getItem(nameNow)).memoryTime[0]
    if ( timeUser!= null)
    document.getElementById("userTimeRecord1").innerHTML = timeUser;
    timeUser= JSON.parse(localStorage.getItem(nameNow)).memoryTime[1];
    if ( timeUser!= null)
    document.getElementById("userTimeRecord2").innerHTML = timeUser;
    timeUser= JSON.parse(localStorage.getItem(nameNow)).memoryTime[2];
    if ( timeUser!= null)
    document.getElementById("userTimeRecord3").innerHTML = timeUser;

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
    console.log(records);

    document.getElementById("userName1").innerHTML = records[0][0];
    document.getElementById("timeRecord1").innerHTML = records[0][1];

    document.getElementById("userName2").innerHTML = records[1][0];
    document.getElementById("timeRecord2").innerHTML = records[1][1];

    document.getElementById("userName3").innerHTML = records[2][0];
    document.getElementById("timeRecord3").innerHTML = records[2][1];
}
