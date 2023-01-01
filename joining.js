
var user = {
    userName: "",
    password: "",
    animateScore: [],
    memoryTime: [],
};

function myFunction() {
    let p1 = document.forms["myForm"]["password1"].value;
    let p2 = document.forms["myForm"]["password2"].value;
    let name = document.forms["myForm"]["fname"].value;

    var _user = JSON.parse(localStorage.getItem(name));
    if (_user != null) {
        alert("שם משתמש כבר קיים. בחר שם אחר");
    }

    if (p1.length < 6 /*&& p1*/) {
        alert("סיסמא צריכה להיות באורך 6 תווים לפחות");
    }
    if (p1 != "" && p2 != "" && p1 === p2) {
        /* localStorage.clear();*/
        localStorage.setItem("userNow", name);

        localStorage.setItem(name, JSON.stringify(user));
        var u = JSON.parse(localStorage.getItem(name));
        u.userName = name;
        u.password = p1;
        localStorage.setItem(name, JSON.stringify(u));
    } else {
        alert("שגיאה באימות סיסמא ");
    }
}
