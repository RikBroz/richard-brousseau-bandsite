let comments = [];

// function for axios GET request
function getComments() {
    axios
        .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
        .then((response) => {
            let sortedComments = [];
            for (let i = 0; i < response.data.length; i++) {
                // Biggest timestamp of the 3 default/stock comments is 1613538000000 (for Connor Walton) [Emilie Beach: 1610168400000; Miles Acosta: 1608440400000]
                if (response.data[i].timestamp <= 1613538000000) {
                    sortedComments[i] = response.data[i];
                }
                else {
                    sortedComments.unshift(response.data[i]);
                }
            }
            comments = sortedComments;
            displayComments(sortedComments);
        }
        ).catch((error) => {
            console.error(error);
        }
    );
}

getComments();

// function for axios PUT request
function putComments(id, likes) {
    axios
        .put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=${api_key}`, {
            likes: (likes+1)
        }
        ).then(() => {
            getComments();
        }
        ).catch((error) => {
            console.error(error);
        }
    );
}

// function for axios DELETE request
function deleteComments(id) {
    axios
        .delete(`https://project-1-api.herokuapp.com/comments/${id}?api_key=${api_key}`)
        .then((result) => {
            // Remove the comment object with that specific id
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].id === result.data.id) {
                    comments.splice(i, 1);
                }
            }

            getComments();
        }
        ).catch((error) => {
            console.error(error);
        }
    );
}

function createCommentCard(commentInfo) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("comment-object");

    const hrElTop = document.createElement("hr");
    hrElTop.classList.add("comment-object__divider");
    cardEl.appendChild(hrElTop);

    const cardEl2 = document.createElement("div");
    cardEl2.classList.add("comment-object__content");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("comment-object__avatar");
    cardEl2.appendChild(imgContainer);

    const textContainer = document.createElement("div");
    textContainer.classList.add("comment-object__data-section");

    const nameDateContainer = document.createElement("div");
    nameDateContainer.classList.add("comment-object__personalData-section");
    let commenterName = document.createElement("h3");
    commenterName.innerText = commentInfo.name;
    commenterName.classList.add("comment-object__text", "comment-object__text--commenter");

    let dateOfComment = document.createElement("p");
    const userDate = new Date(commentInfo.timestamp);
    const userDateFormatted = `${((userDate.getUTCMonth()+1) < 10 ? '0' : '') + (userDate.getUTCMonth()+1)}/${(userDate.getUTCDate() < 10 ? '0' : '') + userDate.getUTCDate()}/${userDate.getUTCFullYear()}`;
    dateOfComment.innerText = userDateFormatted;
    dateOfComment.classList.add("comment-object__text", "comment-object__text--time");
    
    nameDateContainer.appendChild(commenterName);
    nameDateContainer.appendChild(dateOfComment);
    
    let commenterText = document.createElement("p");
    commenterText.innerText = commentInfo.comment;
    commenterText.classList.add("comment-object__text");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("comment-object__icon-container");

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("comment-object__like-container");

    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-solid", "fa-thumbs-up");
    let likeCounter = document.createElement("span");
    // Adding an event listener for the like button
    likeIcon.id = commentInfo.id;
    likeIcon.addEventListener("click", function() {
        putComments(likeIcon.id, commentInfo.likes);
    });
    likeCounter.innerText = commentInfo.likes;
    likeContainer.append(likeIcon, likeCounter);

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    // Adding an event listener for the delete button
    trashIcon.id = commentInfo.id;
    trashIcon.addEventListener("click", function() {
        deleteComments(trashIcon.id);
    });

    iconContainer.append(likeContainer, trashIcon);

    textContainer.appendChild(nameDateContainer);
    textContainer.appendChild(commenterText);
    textContainer.appendChild(iconContainer);

    cardEl2.appendChild(textContainer);
    cardEl.appendChild(cardEl2);

    return cardEl;
}

function displayComments(commentListings) {
    if (!Array.isArray(commentListings)) {
        commentListings = displayComment(commentListings);
    }

    const conversationsEl = document.querySelector("#conversations");
    conversationsEl.innerHTML = "";

    const commentsEl = document.createElement("div");
    commentsEl.classList.add("comments");

    const commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment-container");
    for (let i = 0; i < commentListings.length; i++) {
        const card = createCommentCard(commentListings[i]);
        commentContainerEl.appendChild(card);
    }

    const hrElBottom = document.createElement("hr");
    hrElBottom.classList.add("comment-object__divider");
    commentContainerEl.appendChild(hrElBottom);
    commentsEl.appendChild(commentContainerEl);
    
    conversationsEl.appendChild(commentsEl);
}

function displayComment(commentObject) {
    comments.unshift(commentObject);

    let commentArray = [];
    for (let i = 0; i < comments.length; i++) {
        commentArray[i] = comments[i];
    }
    
    return commentArray;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const postedName = event.target.name.value;
    const postedComment = event.target.comment.value;

    const nameInputStatus = document.querySelector("#name");
    const commentInputStatus = document.querySelector("#comment");
    const inputSpacesRGEX = /^[\s]+$/;
    const nameSpacesResult = inputSpacesRGEX.test(postedName);
    const commentSpacesResult = inputSpacesRGEX.test(postedComment);
    if (postedName.length === 0 || nameSpacesResult == true) {
        nameInputStatus.classList.add("comments__nameInput--errorState");
        alert('Invalid data! Please enter valid data for the name.');
        return;
    } else if (postedComment.length === 0 || commentSpacesResult == true) {
        commentInputStatus.classList.add("comments__nameInput--errorState");
        alert('Invalid data! Please enter a proper comment preferably one without starting spaces');
        return;
    } else {
       if (nameInputStatus.classList.contains("comments__nameInput--errorState") || commentInputStatus.classList.contains("comments__nameInput--errorState")) {
        nameInputStatus.classList.remove("comments__nameInput--errorState");
        commentInputStatus.classList.remove("comments__nameInput--errorState");
       }
        
        // axios POST request
        axios
            .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
                name: postedName,
                comment: postedComment
            }
            ).then((result) => {
                displayComments(result.data);
            }
            ).catch((error) => {
                console.error(error);
            }
        );   
    }
    
    event.preventDefault();
    formEl.reset();
}

const formEl = document.querySelector('#comment-form');
formEl.addEventListener('submit', handleFormSubmit);