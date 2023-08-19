var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.left = cursor2.style.left = e.clientX + "px";
    cursor.style.top = cursor2.style.top = e.clientY + "px";
});