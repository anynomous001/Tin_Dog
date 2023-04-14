import {dogsData} from './data.js'


export function displayLike(){
    const liked = document.getElementById('liked')
    liked.style.display='block';
}
export function displayDisLike(){
    const disliked = document.getElementById('disliked')
    disliked.style.display='block';  
}
