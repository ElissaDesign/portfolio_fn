fetch('https://backend-resume-app.herokuapp.com/api/users')
.then( (resp) => resp.json())
.then(data =>{
    // console.log(data)
    const values = data.Users
    console.log(values)
    let user = '';
    values.map((value) =>{
        user +=`<tr>
        <td>${value.name}</td>
        <td>${value.email}</td>
    </tr>`
    })
    
    document.getElementById("user-data").innerHTML=user
})
fetchData()