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

// Fetching API's from backend 

async function Messages() {
    let url = 'Messages.json';
    try {
        let res = await fetch('http://localhost:1000/api/messages');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
