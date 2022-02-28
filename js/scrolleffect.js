function parallax(id,speed) {
    var s = document.getElementById(id)
  var yPos = 0 - window.pageYOffset/speed;  
  s.style.top = 0 + yPos + "%"; 
  console.log(window.pageYOffset-document.body.scrollTop);
}

window.addEventListener("scroll", function(){
    parallax("mp",30);
    if(window.pageYOffset-document.body.scrollTop < 350){
         parallax("gal",30); 
    }
   
});