const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('btn-submit');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
    signIn();
    
});


function checkInputs(){
    //get the values from the inputs

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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

async function signIn() { 
    await fetch('https://backend-resume-app.herokuapp.com/api/auth/login/', {
      method: 'POST',
      body : JSON.stringify({
          email: email.value,
          password: password.value
      }),
      headers : {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(resp => resp.json())
    .then(res => {
        console.log(res)
        const isAdmin = res.others.isAdmin;
        console.log(isAdmin)
        if((res.message.includes('You have successfully Logged in')) && (isAdmin) ){
            localStorage.setItem('token', res.token)
            localStorage.setItem('name', res.others.name)

            alert(res.message)
            window.location.href = './admin.html'
        }else
        {
            window.location.href = './index.html'
            alert(res.message)
            console.log(res.message)
        }
    })
}