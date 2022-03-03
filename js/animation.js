function startAnimation(id) {
    var elmnt = document.getElementById(id);
    elmnt.classList.add("a-animation");

}

window.addEventListener("scroll", function(){
    if (window.pageYOffset-document.body.scrollTop >= 553){
        startAnimation("gal-heading")
        startAnimation("gal")
    }
})