var navContainer = document.getElementById("navContainer");

        function showMenu(){
            navContainer.style.top = "0";
        }
        function hideMenu(){
            navContainer.style.top = "-80vh";
        }



        var scroll = new SmoothScroll('a[href*="#"]', {
	    speed: 1000,
	    speedAsDuration: true
});
// const uploadImage = document.getElementById('uploadImage')
const title = document.getElementById('title');
const story = document.getElementById('story');
const form = document.getElementById('form');
const errorTitle = document.getElementById('error-title');
const errorStory = document.getElementById('error-story');
const updateBtn = document.getElementById('updateBtn');

form.addEventListener('submit', (e) => {

    if(title.value === '' || title.value == null){
        errorTitle.innerHTML = 'Title is Required!';
    } else {
        errorTitle.innerHTML = '';
    }

    if(story.value === '' || story.value == null){
        errorStory.innerHTML = 'You can not Publish without a story!';
    } else{
        errorStory.innerHTML = '';
    }
    
    e.preventDefault();
    createPost();
    // console.log(title.value)
});
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updatePost();
})

//Integration of data

async function createPost() {
    const image = document.getElementById('uploadImage').files[0]; 
    const formData = new FormData();
    formData.append("image", image)
    formData.append("title", title.value)
    formData.append("body", story.value)

    await fetch('https://backend-resume-app.herokuapp.com/api/posts/post/', {
      method: 'POST',
      body : formData,
    })
    .then(res => res.json())
    .then(response => {
        console.log(response)
        location.reload()
    })
}

// Update a Post

// async function loadUpdate(id){
//     const image = document.getElementById('uploadImage').files[0];
//     createBtn.style.display = "none";
//     updateBtn.style.display = "block";
//     image.style.display = "none"
//     await fetch (`http://localhost:1000/api/posts/post/${id}`)
//     .then(res => res.json())
//     .then(response => {
//       localStorage.setItem('PostID', response.post._id)
//       localStorage.setItem('PostImage', response.post.image)
//       title.value = response.post.title;
//       body.value = response.post.body;
//       console.log(response)
//     })

//   }

async function updatePost(){
    const err = document.getElementById('error')
    let image = document.getElementById('uploadImage').files[0];;
    const id = localStorage.getItem('post-id')
    // const formData = new FormData();
    // formData.append("title", Title.value)
    // formData.append("descr", description.value)
    // formData.append("author", localStorage.getItem('user'))
    // formData.append("image", imageURL)
  
    await fetch (`https://backend-resume-app.herokuapp.com/api/posts/post/${id}`, {
      method:'PATCH',
      body : JSON.stringify({
        title: title.value,
        body: body.value
      }),
    })
    .then(res => res.json())
    .then(resp => {
      if (resp.message.includes('successfully')){
        alert(resp.message)
        location.reload()
      }else {
        errorStory.innerHTML = resp.message
       }
    })
}