
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var back4 = document.getElementById("back4");
var back5 = document.getElementById("back5");

back1.addEventListener("click", picLink);
back2.addEventListener("click", picLink);
back3.addEventListener("click", picLink);
back4.addEventListener("click", picLink);
back5.addEventListener("click", picLink);


function picLink() {
    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);

    if (pic.className === "hide") {
        pic.className = "";
    }
    else {
        pic.className = "hide"
    }
}