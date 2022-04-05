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

const title = document.getElementById('title');
const story = document.getElementById('story');
const form = document.getElementById('form');
const errorTitle = document.getElementById('error-title');
const errorStory = document.getElementById('error-story');

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
});