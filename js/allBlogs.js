function fetchData() {
    fetch('https://backend-resume-app.herokuapp.com/api/posts/')
    .then( (resp) => resp.json())
    .then(data =>{
        const values = data.post
        console.log(values)
        let post = '';
        values.map((value) =>{
            let id = value._id
            post +=`<div class="news-1" post-id= "${id}">
            <img src=${value.image} alt="news-image" class="image-news">
            <div class="author-time">
                <div class="likes">
                    <p>Likes:</p>
                    <p>100</p>
                </div>
                <div class="comments">
                    <p>comments:</p>
                    <p>20</p>
                </div>   
            </div>
            <p onclick = "storeId(this.parentElement.getAttribute('post-id'))"><a href="addBlog.html"><i class="fa fa-pencil-square-o"></i></a></p>
            <p onclick = "storeId(this.parentElement.getAttribute('post-id')), Post(this.parentElement.getAttribute('post-id'))"><i class="fa fa-trash delete"></i></p>
            <h3>${value.title}</h3>
            <p>${value.body}</p>
        </div>`
        })
        document.getElementById("news-container").innerHTML=post
    })
}
function storeId(id) {
    localStorage.setItem('post-id', id)
}
fetchData()



async function Post(id) {
  let token = localStorage.getItem('token')
    await fetch (`https://backend-resume-app.herokuapp.com/api/posts/post/${id}`, {
      method: 'DELETE',
      headers : { 
        "Authorization": `bearer ${token}`
      },
    })
    .then(resp => resp.json())
    .then(res => {
      alert(res.message)
      location.reload()
    })
  }

  async function loadUpdate(id){
    const image = document.getElementById('uploadImage').files[0];
    createBtn.style.display = "none";
    updateBtn.style.display = "block";
    image.style.display = "none"
    await fetch (`https://backend-resume-app.herokuapp.com/api/posts/post/${id}`)
    .then(res => res.json())
    .then(response => {
      localStorage.setItem('PostID', response.post._id)
      localStorage.setItem('PostImage', response.post.image)
      title.value = response.post.title;
      body.value = response.post.body;
      console.log(response)
    })

  }  