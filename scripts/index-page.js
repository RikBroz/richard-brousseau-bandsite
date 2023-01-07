let commentListings = [
    {   
        name: "Miles Acosta", 
        timestamp: "12/20/2020", 
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." 
    },
    {   
        name: "Emilie Beach", 
        timestamp: "01/09/2021", 
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." 
    },
    {   
        name: "Connor Walton", 
        timestamp: "02/17/2021", 
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." 
    },
];

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
    dateOfComment.innerText = commentInfo.timestamp;
    console.log(dateOfComment.innerText);
    dateOfComment.classList.add("comment-object__text", "comment-object__text--time");
    nameDateContainer.appendChild(commenterName);
    nameDateContainer.appendChild(dateOfComment);
    
    let commenterText = document.createElement("p");
    commenterText.innerText = commentInfo.comment;
    console.log(commenterText.innerText);
    commenterText.classList.add("comment-object__text");

    textContainer.appendChild(nameDateContainer);
    textContainer.appendChild(commenterText);
    cardEl2.appendChild(textContainer);
    cardEl.appendChild(cardEl2);

    return cardEl;
}

function displayComment() {
// function renderComments() {
    const conversationsEl = document.querySelector("#conversations");
    conversationsEl.innerHTML = "";

    const commentsEl = document.createElement("div");
    commentsEl.classList.add("comments");

    const commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comment-container");

    for (let i = commentListings.length - 1; i >= 0; i--) {
        const card = createCommentCard(commentListings[i]);
        commentContainerEl.appendChild(card);
    }

    let hrElBottom = document.createElement("hr");
    hrElBottom.classList.add("comment-object__divider");
    commentContainerEl.appendChild(hrElBottom);
    commentsEl.appendChild(commentContainerEl);
    
    conversationsEl.appendChild(commentsEl);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInputStatus = document.querySelector("#name");
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
    // let currentDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    let currentDate = `${((date.getMonth()+1) < 10 ? '0' : '') + (date.getMonth()+1)}/${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${date.getFullYear()}`;
    console.log(currentDate);
    // let currentDate = `${date.getMonth()+1}/${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${date.getFullYear()}`;
    console.log(currentDate);

    const cardData = {
        name: event.target.name.value,
        timestamp: currentDate,
        comment: event.target.comment.value,
    };

    formEl.reset();
    commentListings.push(cardData);
    console.log(commentListings);

    displayComment();
    // renderComments();
}

const formEl = document.querySelector('#comment-form');
console.log(formEl);
formEl.addEventListener('submit', handleFormSubmit);
displayComment();
// renderComments();