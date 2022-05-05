const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('btn-submit');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs()
    signUp()
    
});

function checkInputs(){
    //get the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(username.value === ''){
        //show error and error class
        setErrorFor(username, 'Username cannot be empty');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if(email.value === ''){
        //show error and error class
        setErrorFor(email, 'Email cannot be empty');
    } else {
        //add success class
        setSuccessFor(email);
    }

    if(password.value === ''){
        //show error and error class
        setErrorFor(password, 'Password cannot be empty');
    } else {
        //add success class
        setSuccessFor(password);
    }
}




function setErrorFor(input, message){
    //Form-Control inPuts
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error  message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}


function setSuccessFor(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}



// Integration of backend and front-end

async function signUp() { 
    // const formData = new FormData();
    // formData.append("username", username.value)
    // formData.append("email", email.value)
    // formData.append("password", password.value)

    await fetch('https://backend-resume-app.herokuapp.com/api/auth/register/', {
        method: 'POST',
        body : JSON.stringify({
          name: username.value,
          email: email.value,
          password: password.value
      }),
      headers : {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(resp => resp.json())
    .then(res => {
        console.log(res)
        alert(res)
        location.reload()
    })
}
// fetch('https://backend-resume-app.herokuapp.com/api/posts')
//     .then(response => {
//         // handle the response
//         console.log(response)
//     })
//     .catch(error => {
//         // handle the error
//     });