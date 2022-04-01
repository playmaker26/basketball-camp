//nav code

var nav = function() {
    let box = document.querySelector('.box');
    let ul = document.querySelector('ul');
    let nav = false;
    box.addEventListener("click", () => {
if(!nav) {
    document.querySelector("ul").style.opacity = 1;
    nav = true;
}else {
document.querySelector('ul').style.opacity = 0;
nav = false;
}
    });
}
nav();