function logOut() {
    document.getElementById("logOut").className = "hide";
    document.getElementById("login").className = "button_login";
    localStorage.removeItem("userNow");
}

function logIn() {
    document.getElementById("logOut").className = "button_logOut";
    document.getElementsByName("logIn").className = "hide";

    if (localStorage.getItem('userNow') != null) {
        document.getElementById("user").innerText = " שלום " + localStorage.getItem('userNow');
    }
}