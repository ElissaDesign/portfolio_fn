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
const option = document.getElementById('prices');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');
const username = localStorage.getItem('name');

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
    Messages()
});

// Fetching API's from backend 

async function Messages() {
    let token = localStorage.getItem('token')
    await fetch('https://backend-resume-app.herokuapp.com/api/messages/message',{
        method: 'POST',
        body: JSON.stringify({
            name: username,
            email: email.value,
            option: option.value,
            message: message.value
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `bearer ${token}`
        },

    })
    .then(Response => Response.json())
    .then(res =>{
        console.log(res)
        alert(res)
        location.reload()
    })
   
}
