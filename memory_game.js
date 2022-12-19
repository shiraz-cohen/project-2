
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

img1.addEventListener("click", picLink);

function picLink() {
    if (img1.className === "hide") {
        img1.className = "img";
    }
    else {
        img1.className = "hide"
    }

}