// Create the Dog class here
import {displayLike,displayDisLike} from  './utils.js'
import {dogsData} from  './data.js'

export  {Character}


   function Character(data){
       Object.assign(this,data)
       
       this.display = function(targetId){
           this.hasBeenSwiped = true
    
           
           if (targetId === 'heart-btn') {
                        displayLike();
                        } else if (targetId === 'cross-btn') {
                        displayDisLike();
                        } else {
                        targetId = ''; // or do nothing
                        }
  }
       
    this.renderHtml = function (){
    const {name,avatar,age,bio,hasBeenLiked,hasBeenSwiped} = this
    
    
    let html = `
    <div class="profile-container">
        <img id="profile-pic" src=${avatar}>
        <img class="overlay" id="liked" src="./images/badge-like.png">
        <img class="overlay" id="disliked" src="./images/badge-nope.png">
    </div>
    <div id="profile-inner-text">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
    </div>`
     
     
     return html
}
   }
