// let api_key = "cce80dd4-ab49-48cf-b8c5-e549dc5146a9";
// import { api_key } from "./const.js";
let comments = [];

// function for axios get
function getComments() {
    axios
        .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
        .then((response) => {
            console.log(response.data);
            let sortedComments = [];
            console.log(response.data.length);
            //*** TRY NEXT
            for (let i = 0; i < response.data.length; i++) {
                //*** What if you were delete 1 of the 3 original comments?
                if (i < 3) {
                    console.log("PREVIOUS DATA");
                    console.log(response.data[i]);
                    sortedComments[i] = response.data[i];
                }
                else {
                    console.log("MY OWN DATA")
                    console.log(response.data[i]);
                    sortedComments.unshift(response.data[i]);
                }
            }
            comments = sortedComments;
            console.log(comments);
            displayComments(sortedComments);

            // displayComments(response.data);
            // comments = response.data;
            // console.log(comments);
        }
        ).catch((error) => {
            console.log(error);
        }
    );
}
getComments();

// function for axios put
function putComments(id, likes) {
    axios
        .put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=${api_key}`, {
            likes: (likes+1)
        }
        ).then((result) => {
            console.log(result.data);
            console.log(result.data.id);
            console.log(comments);
            for (let i = 0; i < comments.length; i++) {
                console.log(comments[i].id);
            }
            getComments();
        }
        ).catch((error) => {
            console.log(error);
            console.log("ID does not exist");
        }
    );
}

// funciton for axios delete
function deleteComments(id) {
    axios
        .delete(`https://project-1-api.herokuapp.com/comments/${id}?api_key=${api_key}`)
        .then((result) => {
            console.log(result.data);
            console.log(result.data.id);
            console.log(comments);

            //*** Remove the comment object with that specific id
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].id === result.data.id) {
                    console.log("COMMENTS array and RESULT.DATA match ids");
                    comments.splice(i, 1);
                }
            }
            console.log("COMMENTS array now: ");
            console.log(comments);
            getComments();
        }
        ).catch((error) => {
            console.log(error);
            console.log("ID does not exist");
        }
    );
}

// axios
//     .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
//     .then((response) => {
//         console.log(response.data);
//         displayComments(response.data);
//         comments = response.data;

//         // for (let j = 0; j < comments.length; j++) {
//         //     // let likeButtonIndicator = document.getElementsByClassName("fa-thumbs-up");
//         //     // likeButtonIndicator[j].addEventListener("click", function() {
//         //     //     console.log("Clicked on like button");
//         //     // });
//         //     let likeButtonIndicator = document.getElementById(comments[j].id);
//         //     likeButtonIndicator.addEventListener("click", function() {
//         //         console.log("Clicked on like button");
//         //         console.log("Id of clicked comment is: " + comments[j].id);
//         //         axios
//         //             .put(`https://project-1-api.herokuapp.com/comments/${comments[j].id}/like?api_key=${api_key}`, {
//         //                 likes: (comments[j].likes.value+1)
//         //             }
//         //             ).then((result) => {
//         //                 console.log(result.data);
//         //             }
//         //             ).catch((error) => {
//         //                 console.log(error);
//         //                 console.log("ID does not exist");
//         //             }
//         //         );
//         //     });
//         // }

//         // let likeButtonIndicator = document.getElementsByClassName("fa-thumbs-up");
//         // for (let i = 0; i < likeButtonIndicator.length; i++) {
//         //     likeButtonIndicator[i].addEventListener("click", function() {
//         //         console.log("Clicked on like button");
//         //     });
//         // }
//     }
//     ).catch((error) => {
//         console.log(error);
//     }
// );


// axios
//     .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
//         name: "",
//         comment: ""
//     }) 
//     .then((response) => {
//         console.log(response.data);
//         displayComment(response.data);
//     }
//     ).catch((error) => {
//         console.log(error);
//     }
// );

function createCommentCard(commentInfo) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("comment-object");

    let hrElTop = document.createElement("hr");
    hrElTop.classList.add("comment-object__divider");
    cardEl.appendChild(hrElTop);

    const cardEl2 = document.createElement("div");
    cardEl2.classList.add("comment-object__content");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("comment-object__avatar");
    cardEl2.appendChild(imgContainer);

    let textContainer = document.createElement("div");
    textContainer.classList.add("comment-object__data-section");

    let nameDateContainer = document.createElement("div");
    nameDateContainer.classList.add("comment-object__personalData-section");
    let commenterName = document.createElement("h3");
    commenterName.innerText = commentInfo.name;
    console.log(commenterName.innerText);
    commenterName.classList.add("comment-object__text", "comment-object__text--commenter");
    let dateOfComment = document.createElement("p");
  
    const userDate = new Date(commentInfo.timestamp);
    console.log("user date is: " + userDate);
    let userDateFormatted = `${((userDate.getUTCMonth()+1) < 10 ? '0' : '') + (userDate.getUTCMonth()+1)}/${(userDate.getUTCDate() < 10 ? '0' : '') + userDate.getUTCDate()}/${userDate.getUTCFullYear()}`;
    console.log("formatted user date is: " + userDateFormatted);

    dateOfComment.innerText = userDateFormatted;
    console.log(dateOfComment.innerText);
   
    dateOfComment.classList.add("comment-object__text", "comment-object__text--time");
    nameDateContainer.appendChild(commenterName);
    nameDateContainer.appendChild(dateOfComment);
    
    let commenterText = document.createElement("p");
    commenterText.innerText = commentInfo.comment;
    console.log(commenterText.innerText);
    commenterText.classList.add("comment-object__text");

    //***
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("comment-object__icon-container");

    let likeContainer = document.createElement("div");
    likeContainer.classList.add("comment-object__like-container");

    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-solid", "fa-thumbs-up");
    let likeCounter = document.createElement("span");
    likeIcon.id = commentInfo.id;
    // likeCounter.innerText = commentInfo.likes;
    //Addeventlistener?? **
    // for (let j = 0; j < comments.length; j++) {
    //     let likeButtonIndicator = document.getElementById(comments[j].id);
    likeIcon.addEventListener("click", function() {
        console.log("Clicked on like button");
        console.log(likeIcon.id);
            //console.log("Id of clicked comment is: " + comments[j].id);
        putComments(likeIcon.id, commentInfo.likes);
    });
    // }
    // likeCounter.classList.add
    likeCounter.innerText = commentInfo.likes;
    // commenterName.innerText = commentInfo.name;
    likeContainer.append(likeIcon, likeCounter);

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    //*** Add an event listener
    trashIcon.id = commentInfo.id;
    trashIcon.addEventListener("click", function() {
        console.log("Clicked on delete button");
        console.log(trashIcon.id);
        deleteComments(trashIcon.id);
    });

    iconContainer.append(likeContainer, trashIcon);

    // let iconContainer = document.createElement("i");
    // iconContainer.classList.add("comment-object__icon", "fa-solid", "fa-thumbs-up");

    textContainer.appendChild(nameDateContainer);
    textContainer.appendChild(commenterText);
    
    //***
    textContainer.appendChild(iconContainer);

    cardEl2.appendChild(textContainer);

    //***
    // let iconContainer = document.createElement("i");
    // iconContainer.classList.add("comment-object__icon", "fa-solid", "fa-thumbs-up");
    // cardEl2.appendChild(iconContainer);

    cardEl.appendChild(cardEl2);

    return cardEl;
}

function displayComments(commentListings) {
    console.log(commentListings);
    console.log("Type of commentListings?: " + typeof commentListings);
    console.log("Is commentListings an array?: " + Array.isArray(commentListings));
    console.log("Is commentListings NOT an array?: " + !Array.isArray(commentListings));
    // let commentListingsArray = [];
    if (!Array.isArray(commentListings)) {
        commentListings = displayComment(commentListings);
    }
    console.log("What is commentListings now?: >>>>>>>>>>>>>>");
    console.log(commentListings);
    console.log("Is commentListings STILL not an array?: " + !Array.isArray(commentListings));

    const conversationsEl = document.querySelector("#conversations");
    conversationsEl.innerHTML = "";

    const commentsEl = document.createElement("div");
    commentsEl.classList.add("comments");

    const commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment-container");
    // for (let i = commentListings.length; i >= 0; i--) {
    for (let i = 0; i < commentListings.length; i++) {
        const card = createCommentCard(commentListings[i]);
        commentContainerEl.appendChild(card);
    }

    let hrElBottom = document.createElement("hr");
    hrElBottom.classList.add("comment-object__divider");
    commentContainerEl.appendChild(hrElBottom);
    commentsEl.appendChild(commentContainerEl);
    
    conversationsEl.appendChild(commentsEl);
}

function displayComment(commentObject) {
    console.log("In the displayComment function!>>>>>>>>");
    console.log(commentObject);
    console.log("Length of COMMENTS array: " + comments.length);
    // comments[comments.length] = commentObject; //Change to below code
    comments.unshift(commentObject);
    console.log("NEW length of COMMENTS array: " + comments.length);

    let commentArray = [];
    for (let i = 0; i < comments.length; i++) {
        commentArray[i] = comments[i];
    }
    console.log("What is the commentArray now?");
    console.log(commentArray);
    return commentArray;
}

function handleFormSubmit(event) {
    event.preventDefault();

    console.log("Name: " + event.target.name.value);
    console.log("Comment: " + event.target.comment.value);

    axios
        .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
            name: event.target.name.value,
            comment: event.target.comment.value
        }
        ).then((result) => {
            console.log(result.data);
            displayComments(result.data);
            //displayComment(result.data);
        }
        ).catch((error) => {
            console.log(error);
        }
    );   
    event.preventDefault();
    formEl.reset();

    //Fall back on
    /* const nameInputStatus = document.querySelector("#name");
    const commentInputStatus = document.querySelector("#comment");

    console.log("Name: " + event.target.name.value);
    console.log("Comment: " + event.target.comment.value);

    let inputSpacesRGEX = /^[\s]+$/;
    let nameRGEX = /^[A-Z]([a-z]+-?)?[A-Z]?[a-z]+\s[A-Z][a-z]?[A-Z]?[a-z]+([-\s][A-Z][a-z]+(([-][A-Z][a-z]+)|\.)?)?$/;
    
    let nameSpacesResult = inputSpacesRGEX.test(event.target.name.value);
    let nameResult = nameRGEX.test(event.target.name.value);
    let commentSpacesResult = inputSpacesRGEX.test(event.target.comment.value);

    if (event.target.name.value.length === 0 || nameSpacesResult == true) {
        nameInputStatus.classList.add("comments__nameInput--errorState");
        alert('Invalid data! Please enter valid data for the name.');
        return;
    } else if (nameResult == false) {
        nameInputStatus.classList.add("comments__nameInput--errorState");
        alert('Invalid name! Please enter a full proper name with an optional middle name (e.g. Taylor Swift, Bruce Springsteen).\nYou may use a \'.\' at the end of your name in cases of Jr and Sr names (e.g. Gary Clark Jr.).\nYou may also use only one additional letter in cases of names like McCartney as well as dashes (\'-\') in case of first/last names being combined together (e.g. Guy-Manuel De Homem-Christo).\nNo apostrophes in names are allowed either (e.g. O\'Shea Jackson, Sinead O\'Connor). Sorry...');
        return;
    }

    if (event.target.comment.value.length === 0 || commentSpacesResult == true) {
        commentInputStatus.classList.add("comments__nameInput--errorState");
        alert('Invalid data! Please enter a proper comment preferably one without starting spaces');
        return;
    }

    if (nameInputStatus.classList.contains("comments__nameInput--errorState") || commentInputStatus.classList.contains("comments__nameInput--errorState")) {
        nameInputStatus.classList.remove("comments__nameInput--errorState");
        commentInputStatus.classList.remove("comments__nameInput--errorState");
    }

    const date = new Date();
    console.log(date);
    let currentDate = `${((date.getMonth()+1) < 10 ? '0' : '') + (date.getMonth()+1)}/${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${date.getFullYear()}`;
    console.log(currentDate);

    const cardData = {
        name: event.target.name.value,
        timestamp: currentDate,
        comment: event.target.comment.value,
    };

    formEl.reset();
    commentListings.push(cardData);
    console.log(commentListings); */

    // displayComment();
}

const formEl = document.querySelector('#comment-form');
console.log(formEl);
formEl.addEventListener('submit', handleFormSubmit);
// displayComment();




// let likeButtonIndicator = document.getElementsByClassName("fa-thumbs-up");
// for (let i = 0; i < likeButtonIndicator.length; i++) {
//     likeButtonIndicator[i].addEventListener("click", function() {
//         console.log("Clicked on like button");
//     });
// }
/* let sC = document.getElementsByClassName("shows__content");
for (let i = 0; i < sC.length; i++) {
    sC[i].addEventListener("click", function() {
        console.log("Clicked on like button");
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
} */