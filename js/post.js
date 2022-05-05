function fetchData() {
    fetch('https://backend-resume-app.herokuapp.com/api/posts/')
    .then( (resp) => resp.json())
    .then(data =>{
        const values = data.post
        let post = '';
        values.map((value) =>{
            let id = value._id
            post +=`<div class="news-1" post-id= "${id}">
            <a href="singlePageBlog.html"> <img src=${value.image} alt="news-image" class="image-news"></a>
             <div class="author-time">
                 <h5>Elissa Design</h5>
                 <p>${value.createdAt}</p>
             </div>
             <h3 onclick = "storeId(this.parentElement.getAttribute('post-id'))"><a href="singlePageBlog.html">${value.title}</a></h3>
             <p>${value.body}</p>
         </div>`
        })
        document.getElementById("news-container").innerHTML = post;
    })
}
function storeId(id) {
    localStorage.setItem('post-id', id)
}
fetchData()
