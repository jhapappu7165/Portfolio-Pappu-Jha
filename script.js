var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
  for (tablink of tablinks){
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add("active-tab");
}




let navLinks = document.getElementById("sidemenu");

function openmenu() {
  navLinks.style.right = "0";
}

function closemenu() {
  navLinks.style.right = "-200px";
}

const navItems = navLinks.querySelectorAll("li a"); 
navItems.forEach(item => {
  item.addEventListener("click", () => {
    closemenu();
  });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbxlOjo8Sn1xsJAi2hRdN3YojUuNKivQO_3MeylTMyBpXeqT20nLJDbrjmHQIlRzDmsb/exec';
const form = document.forms['submit-to-google-sheet']

const msg =document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {

      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    }
    
  )
    .catch(error => console.error('Error!', error.message))
})






var sidemenu = document.getElementById("sidemenu");
      
function openmenu(){
  sidemenu.style.right = '0';
}
function closemenu(){
  sidemenu.style.right = '-200px';
}

// Project scrolling function with smooth animation
let isScrolling = false; // Prevent multiple scrolls at once

function scrollProjects(direction) {
  const projectList = document.querySelector('.project-list');
  if (!projectList || isScrolling) return; // Prevent overlapping animations
  
  // Get the first visible card to calculate width dynamically
  const firstCard = projectList.querySelector('.project-list > div');
  if (!firstCard) return;
  
  // Calculate scroll amount based on actual card width + gap
  const cardWidth = firstCard.offsetWidth;
  const gap = 40; // gap between cards (matches CSS)
  const scrollAmount = cardWidth + gap;
  
  // Get current scroll position
  const startPosition = projectList.scrollLeft;
  const targetPosition = direction === 'left' 
    ? startPosition - scrollAmount 
    : startPosition + scrollAmount;
  
  // Ensure we don't scroll beyond boundaries
  const maxScroll = projectList.scrollWidth - projectList.clientWidth;
  const finalPosition = Math.max(0, Math.min(targetPosition, maxScroll));
  
  // Smooth scroll animation using requestAnimationFrame
  const duration = 1000; // Slower animation - 1 second
  const startTime = performance.now();
  isScrolling = true;
  
  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 to 1
    
    // Smoother easing function (ease-in-out-quad) for more gradual motion
    const easeInOutQuad = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    // Calculate current scroll position with easing
    const currentPosition = startPosition + (finalPosition - startPosition) * easeInOutQuad;
    projectList.scrollLeft = currentPosition;
    
    // Continue animation if not complete
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false; // Animation complete
    }
  }
  
  // Start the animation
  requestAnimationFrame(animateScroll);
}
