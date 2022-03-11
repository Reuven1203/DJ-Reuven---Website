var galCard = document.getElementById('gal');

function startAnimation(id) {
    var elmnt = document.getElementById(id);
    elmnt.classList.add("a-animation");

}
// window.pageYOffset-document.body.scrollTop >= 553
window.addEventListener("scroll", function(){
    console.log(galCard.style.top);
    if (window.pageYOffset-document.body.scrollTop >= 425){
        startAnimation("gal-heading")
        startAnimation("gal")
        startAnimation("gal-msg");
        startAnimation("img-box");
    }
})

