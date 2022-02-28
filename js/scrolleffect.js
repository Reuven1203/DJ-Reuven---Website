var content = document.getElementsByTagName("body")[0];
function parallax(id,speed) {
    var s = document.getElementById(id)
  var yPos = 0 - window.pageYOffset/speed;  
  s.style.top = 0 + yPos + "%"; 
  
}

window.addEventListener("scroll", function(){
    parallax("mp",30);
    if(window.pageYOffset-document.body.scrollTop < 200){
         parallax("gal",30); 
    }else{

    }
   
});