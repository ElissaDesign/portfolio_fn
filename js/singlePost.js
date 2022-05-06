const comment = document.getElementById('comment');
const yourname = document.getElementById('yourname');
const form = document.getElementById('form');
const submitForm = document.getElementById('submitForm');
const id = localStorage.getItem('post-id');
const Name = localStorage.getItem('name');



function fetchData() {
    fetch(`https://backend-resume-app.herokuapp.com/api/posts/post/${id}`)
    .then( (resp) => resp.json())
    .then(data =>{
        // console.log(data.post)
        // console.log(data.post.comment)
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
        // console.log(name)
        const comments =data.post.comment
        // console.log(comments)
        function generateComments(arg){
            let comment = '';
            for( let i = 0; i < arg.length; i++){
                comment +=`<div class="CommentItems"><img src="images/about-blog-1.png" alt="" class="comment-profile">
                <div class="comment-text">
                    <h4>Unknown</h4>
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
};

function createComment() {
    let token = localStorage.getItem('token') 
    console.log(token)
    fetch(`http://localhost:1000/api/posts/post/comment/${id}`, {
      method: 'PATCH',
      body : JSON.stringify({
             comment: comment.value
      }),
      headers : {
          "Content-Type": "application/json;charset=UTF-8", 
          "Authorization": `bearer ${token}`
        },
      
    })
    .then(resp => resp.json(),
    )
    .then(res => {
        let message = res.message
        alert(message)
    })
}

fetchData();

form.addEventListener('submit', (e) => {
    e.preventDefault(),
    createComment();
})