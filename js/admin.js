function fetchData() {
    fetch('https://backend-resume-app.herokuapp.com/api/messages')
    .then( (resp) => resp.json())
    .then(data =>{
        // console.log(data)
        const values = data.messages.length
        console.log(values)
        document.getElementById('messages').innerHTML=values

        const recentMessage = data.messages
        console.log(recentMessage)
        let user = '';
        recentMessage.map((value) =>{
            user +=`<tr>
            <td>${value.name}</td>
            <td>${value.option}</td>
            <td>${value.email}</td>
            <td>${value.message}</td>
        </tr>`
        })
        
        document.getElementById("message-data").innerHTML=user
        
        
    });

    fetch('https://backend-resume-app.herokuapp.com/api/users')
    .then( (resp) => resp.json())
    .then(data =>{
        // console.log(data)
        const values = data.Users.length
        console.log(values)
        document.getElementById('users').innerHTML=values
    });

    fetch('https://backend-resume-app.herokuapp.com/posts/')
    .then( (resp) => resp.json())
    .then(data =>{
        const values = data.post.length
        console.log(values)
        document.getElementById('posts').innerHTML=values
    })
}
fetchData()