const dogsData = [
    {
        name: "Rex",
        avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }

,{
        name: "Bella",
        avatar: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Lady",
        avatar: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        age: 13,
        bio: "Hello, There how are you ?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Jacky",
        avatar: "https://images.unsplash.com/photo-1477936432016-8172ed08637e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        age: 20,
        bio: "What have you been up to ?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]

// Remember to export the data!//
export  {dogsData}

/*
 `
    <div class="profile-container">
                    <img id="profile-pic" src=${avatar}>
                    <img class="overlay" id="liked" src="./images/badge-like.png" >
                    <img class="overlay" id="disliked" src="./images/badge-nope.png" >
                </div>
                <div id="profile-inner-text">
                        <h1>${name}, ${age}</h1>
                        <p>${bio}</p>
                    </div>`
                    */
