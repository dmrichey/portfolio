var coll = document.getElementsByClassName("open-details");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("loading").style.display = "flex";
        document.querySelector("web").style.display = "none";
    } else {
        document.querySelector("loading").style.display = "none";
        document.querySelector("web").style.display = "flex";
    }
};