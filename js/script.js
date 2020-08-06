var modal = document.getElementsById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.oneclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
    window.onclick = function(event) {
        modal.style.display = "none";
    }
}