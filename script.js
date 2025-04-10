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



const scriptURL = 'https://script.google.com/macros/s/AKfycbxlOjo8Sn1xsJAi2hRdN3YojUuNKivQO_3MeylTMyBpXeqT20nLJDbrjmHQIlRzDmsb/exec'
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



button = document.getElementById("mode");

button.onclick = function() {
  document.body.classList.toggle("light-mode");
};



var project1 = document.getElementsByClassName('project1')[0];

project1.addEventListener('click', function() {
  window.open("https://github.com/jhapappu7165/Adversarial-ML-Password-Classification", "_blank");
})


var project2 = document.getElementsByClassName('project2')[0];

project2.addEventListener('click', function() {
  window.open("https://smttt-my.sharepoint.com/:w:/g/personal/w10168315_usm_edu/EX4N5dstDoFJkUWUMlo-x8cBbh6UBUYJhXzT9mssadefAQ", "_blank");
})


var project3 = document.getElementsByClassName('project3')[0];

project3.addEventListener('click', function() {
  window.open("https://github.com/jhapappu7165/Dormitory-Operations-with-C-plus-plus", "_blank");
})
