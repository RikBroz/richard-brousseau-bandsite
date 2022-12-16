// let commentListings = [
//     { name: "Connor Walton", 
//         timestamp: "02/17/2021", 
//         comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." 
//     },
//     { name: "Emilie Beach", 
//         timestamp: "01/09/2021", 
//         comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." 
//     },
//     { name: "Miles Acosta", 
//         timestamp: "12/20/2020", 
//         comment: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." 
//     },
// ];

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

console.log(commentListings);

function createCommentCard(commentInfo) {
    //const cardEl = document.createElement('article');
    const cardEl = document.createElement("div");
    //cardEl.classList.add("comments__object");
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

    // textContainer.appendChild(commenterName);
    // textContainer.appendChild(dateOfComment);
    textContainer.appendChild(nameDateContainer);
    textContainer.appendChild(commenterText);
    cardEl2.appendChild(textContainer);
    cardEl.appendChild(cardEl2);

    // let hrElBottom = document.createElement("hr");
    // hrElBottom.classList.add("comment-object__divider");
    // cardEl.appendChild(hrElBottom);

    return cardEl;
}

function renderComments() {
    const conversationsEl = document.querySelector("#conversations");

    conversationsEl.innerHTML = "";

    const commentsEl = document.createElement("div");
    commentsEl.classList.add("comments");
    // conversationsEl.appendChild(commentsEl);

    for (let i = 0; i < commentListings.length; i++) {
        const card = createCommentCard(commentListings[i]);
        //conversationsEl.appendChild(card);
        commentsEl.appendChild(card);
    }

    let hrElBottom = document.createElement("hr");
    hrElBottom.classList.add("comment-object__divider");
    commentsEl.appendChild(hrElBottom);

    conversationsEl.appendChild(commentsEl);
}

renderComments();