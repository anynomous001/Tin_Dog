// Remember to import the data and Dog class!
//import dogs from 'data.js'

import {dogsData} from  './data.js'
import {displayLike,displayDisLike} from  './utils.js'
import {Character} from  './Dog.js'
 




/*const likeBtn = document.getElementById('heart-btn')
const dislikeBtn = document.getElementById('cross-btn')*/





function getNewDog(){
    let nextDog = dogsData.shift()
    return new Character(nextDog)
}


/*likeBtn.addEventListener('click',function(){
    displayLike()
    dogChar.hasBeenLiked= true
    dislikeBtn.disabled = true
})
    
dislikeBtn.addEventListener('click', function() {
    displayDisLike();
    dogChar.hasBeenSwiped = true;
    likeBtn.disabled = true;
    setTimeout(function() {
        dogChar = getNewDog();
        render();
        document.getElementById('container').classList.add('dog-char-transition');
    }, 2000);
});*/

const container = document.getElementById('container');

function render() {
  // Fade out the current dogChar
  container.classList.add('fade-out');

  setTimeout(() => {
    // Remove the current dogChar and add the new one
    container.innerHTML = dogChar.renderHtml();
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
  }, 500);

  setTimeout(() => {
    container.classList.remove('fade-in');
  }, 1000);
}

let dogChar = getNewDog()

const btnDiv = document.getElementById('btn-div')

btnDiv.addEventListener('click', function(event){
    dogChar.display(event.target.id)
    if(dogChar.hasBeenSwiped){
        document.getElementById('heart-btn').disabled = false
        document.getElementById('cross-btn').disabled = false
         setTimeout(function(){
        dogChar = getNewDog();
        render();
        document.getElementById('container').classList.add('dog-char-transition');
    }, 2000);
    }
})

render()