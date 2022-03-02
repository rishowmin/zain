// navbar  
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
     nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
     nav.removeAttribute("style");
   }
} 



// multi-step form
$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });



  // captcha

  const captcha = document.querySelector(".captcha"),
  reloadBtn = document.querySelector(".reload-btn"),
  inputField = document.querySelector(".input-area input"),
  checkBtn = document.querySelector(".check-btn"),
  statusTxt = document.querySelector(".status-text");
  //storing all captcha characters in array
  let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                       'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                       'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                       't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function getCaptcha(){
    for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
      let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
    }
  }
  getCaptcha(); //calling getCaptcha when the page open
  //calling getCaptcha & removeContent on the reload btn click
  reloadBtn.addEventListener("click", ()=>{
    removeContent();
    getCaptcha();
  });
  checkBtn.addEventListener("click", e =>{
    e.preventDefault(); //preventing button from it's default behaviour
    statusTxt.style.display = "block";
    //adding space after each character of user entered values because I've added spaces while generating captcha
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText){ //if captcha matched
      statusTxt.style.color = "#4db2ec";
      statusTxt.innerText = "Nice! You don't appear to be a robot.";
      setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
        removeContent();
        getCaptcha();
      }, 2000);
    }else{
      statusTxt.style.color = "#ff0000";
      statusTxt.innerText = "Captcha not matched. Please try again!";
    }
  });
  function removeContent(){
   inputField.value = "";
   captcha.innerText = "";
   statusTxt.style.display = "none";
  }



