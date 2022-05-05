function fetchData() {
    fetch('https://backend-resume-app.herokuapp.com/api/messages')
    .then( (resp) => resp.json())
    .then(data =>{
        // console.log(data)
        const values = data.messages
        console.log(values)
        let user = '';
        values.map((value) =>{
            user +=`<tr>
            <td>${value.name}</td>
            <td>${value.option}</td>
            <td>${value.email}</td>
            <td>${value.message}</td>
        </tr>`
        })
        
        document.getElementById("message-data").innerHTML=user
    })
}
fetchData()