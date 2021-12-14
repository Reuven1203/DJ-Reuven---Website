const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navLinks')[0];
const navTag = document.getElementsByTagName('nav')[0];
const content = document.getElementsByTagName('body')[0];

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    navTag.classList.toggle('active');
    content.classList.toggle('active');
})