const comment = document.getElementById('comment');
const yourname = document.getElementById('yourname');
const submitForm = document.getElementById('submitForm');



function fetchData() {
    const id = localStorage.getItem('post-id')
    fetch(`https://backend-resume-app.herokuapp.com/api/posts/post/${id}`)
    .then( (resp) => resp.json())
    .then(data =>{
        console.log(data.post)
        console.log(data.post.comment)
        const post = data.post

           let DataPost =`<div>
            <img src=${post.image} alt="news-image" class="hit-news-img">
            <div class="author-time">
                <h5>Elissa Design</h5>
                <p>${post.createdAt}</p>
            </div>
            <h1>${post.title} </h1>
            <p>${post.body}</p>

            <hr>

            <div class="comments-section" id="comments-section">
                
            </div>
           
            </div>`

        document.getElementById("hitnews").innerHTML = DataPost;

        const name = localStorage.getItem('others')
        console.log(name)
        const comments =data.post.comment
        // console.log(comments)
        function generateComments(arg){
            let comment = '';
            for( let i = 0; i < arg.length; i++){
                comment +=`<div class="CommentItems"><img src="images/about-blog-1.png" alt="" class="comment-profile">
                <div class="comment-text">
                    <h4>Elissa Design</h4>
                    <p>${arg[i]}</p>
                </div></div>`;
                // console.log(comment)
            }
            return comment;
            

        }
        document.getElementById('comments-section').innerHTML= `
        <div>
        ${generateComments(comments)}
        </div>
        `
    })
}



async function createComment() {
    await fetch(`https://backend-resume-app.herokuapp.com/api/posts/post/comment/${id}`, {
      method: 'PATCH',
      body : JSON.stringify({
          comment: comment.value
      }),
      "Authorization" : `bearer: ${localStorage.getItem('token')}`,
      headers : {"Content-type": "application/json;charset=UTF-8"}
    })
    console.log(comment.value)

    .then(res => res.json())
    .then(res => {
        console.log(res)
        alert(res)
        location.reload()
    })
}

fetchData()


submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createComment();
})