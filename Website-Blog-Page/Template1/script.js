// Drop Menu.
var coll = document.getElementsByClassName("collapsible");
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

// Dark Mode Switch.
const mode = document.querySelector('.mode-switch')
mode.addEventListener('click',()=>{
mode.classList.toggle('active')
document.body.classList.toggle('dark')
})
