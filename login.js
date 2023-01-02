/*function sleep(ms) {
      return new Promise((resolve, reject) => {
          setTimeout(resolve, ms);
      });
  }*/

var count = 0;

function check() {
    let p = document.forms["myForm"]["password"].value;
    let name = document.forms["myForm"]["fname"].value;
    var user = JSON.parse(localStorage.getItem(name));
    /* בדיקה אם משתמש חסום*/
    if (user == null) {
        alert("שם משתמש לא קיים במערכת.אנא הירשם");
    }
    else {
        /*
            if (count == 3) {
                alert("סיסמא שגויה אנא המתן 30 שניות");
                document.getElementById("submit").nodeType = "button";
                sleep(1000);
            } else{*/
        if (p != user.password) {
            alert("סיסמא שגויה. אנא נסה שוב");
            /*  let text="סיסמא שגויה. אנא נסה שוב";
                document.getElementById("p_pass").innerHTML=text;*/
            count += 1;
        } else {
            localStorage.setItem("userNow", name);
        }        
    }
}