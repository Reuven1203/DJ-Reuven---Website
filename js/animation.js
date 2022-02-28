function startAnimation(id) {
    var elmnt = document.getElementById(id);
    elmnt.classList.toggle("a-animation");

}

window.addEventListener("scroll", function(){
    if (window.pageYOffset-document.body.scrollTop == 350){
        startAnimation("gal-heading")
    }
})