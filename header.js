function logOut() {
    document.getElementById("logOut").className = "hide";
    document.getElementById("logIn1").className = "button_login";
    document.getElementById("logIn2").className = "button_login";
    localStorage.removeItem("userNow");
}

function logIn() {
    if (localStorage.getItem('userNow') != null) {
        document.getElementById("logOut").className = "button_logOut";
        document.getElementById("logIn1").className = "hide";
        document.getElementById("logIn2").className = "hide";
        document.getElementById("user").innerHTML = " שלום " + localStorage.getItem("userNow");
    }
}