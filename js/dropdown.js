const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navLinks')[0];
const navTag = document.getElementsByTagName('nav')[0];
const content = document.getElementsByTagName('body')[0];
const bClicked = false;
const hrefs = navBarLinks.getElementsByTagName('p'); 
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    navTag.classList.toggle('active');
    content.classList.toggle('active');
    toggleButton.classList.toggle('active');
    for (let i= 0; i < hrefs.length; i++) {
      hrefs[i].classList.toggle('active');
        
    }
   
  
})



