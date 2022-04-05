var navContainer = document.getElementById("navContainer");

        function showMenu(){
            navContainer.style.top = "0";
        }
        function hideMenu(){
            navContainer.style.top = "-80vh";
        }


        //Smoooth scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
	    speed: 1000,
	    speedAsDuration: true
})


// swipper portifolio

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });






//Message Validation form

const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {

    if(email.value === '' || email.value == null){
        errorEmail.innerHTML = 'Email is Required!';
    } else {
        errorEmail.innerHTML = '';
    }

    if(message.value === '' || message.value == null){
        errorMessage.innerHTML = 'Message is Empty!';
    } else{
        errorMessage.innerHTML = '';
    }
    
    e.preventDefault()
});