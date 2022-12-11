//let showsEl = document.querySelector(".shows__content");
// let showsEl = document.querySelector(".shows__section");

//let divEl = document.createElement("div");
// divEl.setAttribute("background-color", "red");
// divEl.setAttribute("stroke-width", "1px");
// divEl.setAttribute("fill", "blue");

let showListings = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
    { date: "Mon Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
    { date: "Mon Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { date: "Mon Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
    { date: "Mon Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" },
];


function createShowCard(show) {
    const divEl = document.createElement("div");
    divEl.classList.add("shows__show");

    const divEl2 = document.createElement("div");
    divEl2.classList.add("shows__content");

    let dateLabelEl = document.createElement("p");
    dateLabelEl.innerText = "Date";
    dateLabelEl.classList.add("shows__label");
    console.log(dateLabelEl.innerText);

    let dateContentEl = document.createElement("p");
    dateContentEl.innerText = show.date;
    dateContentEl.classList.add("shows__data--date");
    console.log(dateContentEl.innerText);

    let venueLabelEl = document.createElement("p");
    venueLabelEl.innerText = "Venue";
    venueLabelEl.classList.add("shows__label");
    console.log(venueLabelEl.innerText);
    
    let venueContentEl = document.createElement("p");
    venueContentEl.innerText = show.venue;
    venueContentEl.classList.add("shows__data");
    console.log(venueContentEl.innerText);

    let locationLabelEl = document.createElement("p");
    locationLabelEl.innerText = "Location";
    locationLabelEl.classList.add("shows__label");
    console.log(locationLabelEl.innerText);

    let locationContentEl = document.createElement("p");
    locationContentEl.innerText = show.location;
    locationContentEl.classList.add("shows__data");
    console.log(locationContentEl.innerText);

    let hrEl = document.createElement("hr");

    // divEl.appendChild(dateLabelEl);
    // divEl.appendChild(dateContentEl);
    // divEl.appendChild(venueLabelEl);
    // divEl.appendChild(venueContentEl);
    // divEl.appendChild(locationLabelEl);
    // divEl.appendChild(locationContentEl);
    divEl2.appendChild(dateLabelEl);
    divEl2.appendChild(dateContentEl);
    divEl2.appendChild(venueLabelEl);
    divEl2.appendChild(venueContentEl);
    divEl2.appendChild(locationLabelEl);
    divEl2.appendChild(locationContentEl);

    divEl.appendChild(divEl2);
    console.log(divEl2);

    divEl.appendChild(hrEl);

    console.log(divEl);

    return divEl;
}

function renderShows() {
    let showsEl = document.querySelector(".shows__section");
    console.log(showsEl);

    showsEl.innerHTML = "";

    for (let i = 0; i < showListings.length; i++) {
        const card = createShowCard(showListings[i]);
        showsEl.appendChild(card);
        //Need to set up 'createAppointmentCard' w/ return value
        //myAppointmentsEl.appendChild(createAppointmentCard(appointments[i]));
    }
}

renderShows();


// Object.keys(showListings).forEach(key => {
//     console.log(key[0]);
//     console.log(showListings[key].date);
// });

// Object.entries(showListings).forEach(([key, value]) => {
//     // let itemEl = document.createElement("li");
//     // itemEl.innerText = item;
//     // itemEl.classList.add('todo-list__item');
//     // toDoList.appendChild(itemEl);
//     console.log(key);
//     console.log(showListings[key]);
//     let dateLabelEl = document.createElement("p");
//     dateLabelEl.innerText = "Date";
//     dateLabelEl.classList.add("shows__label");
//     console.log(dateLabelEl.innerText);
//     divEl.appendChild(dateLabelEl);
    
//     let dateContentEl = document.createElement("p");
//     dateContentEl.innerText = value.date;
//     //console.log(value.date);
//     dateContentEl.classList.add("shows__data--date");
//     console.log(dateContentEl.innerText);


//     let venueLabelEl = document.createElement("p");
//     //venueLabelEl.innerText = value.key;
//     //console.log(value.venue.name);
//     venueLabelEl.innerText = "Venue";
//     venueLabelEl.classList.add("shows__label");
//     console.log(venueLabelEl.innerText);
    
//     let venueContentEl = document.createElement("p");
//     venueContentEl.innerText = value.venue;
//     //console.log(value.venue);
//     venueContentEl.classList.add("shows__data");
//     console.log(venueContentEl.innerText);


//     let locationLabelEl = document.createElement("p");
//     //locationLabelEl.innerText = value.key;
//     //console.log(value.location.name);
//     locationLabelEl.innerText = "Location";
//     locationLabelEl.classList.add("shows__label");
//     console.log(locationLabelEl.innerText);

//     let locationContentEl = document.createElement("p");
//     locationContentEl.innerText = value.location;
//     //console.log(value.location);
//     locationContentEl.classList.add("shows__data");
//     console.log(locationContentEl.innerText);

//     // let strokeFill = document.createElement("div");
//     // strokeFill.setAttribute("stroke-width", "1px");
//     // strokeFill.setAttribute("fill", "blue");

//     let hrEl = document.createElement("hr");

//     let divEl2 = document.createElement("div");
//     divEl2.classList.add("shows__show");

//     divEl2.appendChild(dateLabelEl);
//     divEl2.appendChild(dateContentEl);
//     divEl2.appendChild(venueLabelEl);
//     divEl2.appendChild(venueContentEl);
//     divEl2.appendChild(locationLabelEl);
//     divEl2.appendChild(locationContentEl);
//     divEl2.appendChild(hrEl);
//     // divEl.appendChild(strokeFill);

//     //showsEl.appendChild(divEl);
//     divEl.appendChild(divEl2);
// });

// showsEl.appendChild(divEl);

// const showListings = {
//     show1: {
//         date: "Mon Sept 06 2021",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA",
//     },
//     show2: {
//         date: "Tue Sept 21 2021",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA",
//     },
//     show3: {
//         date: "Mon Oct 15 2021",
//         venue: "View Lounge",
//         location: "San Francisco, CA",
//     },
//     show4: {
//         date: "Mon Nov 06 2021",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA",
//     },
//     show5: {
//         date: "Mon Nov 26 2021",
//         venue: "Moscow Center",
//         location: "San Francisco, CA",
//     },
//     show6: {
//         date: "Mon Dec 15 2021",
//         venue: "Press Club",
//         location: "San Francisco, CA",
//     },  
// }
// Object.keys(showListings).forEach(key => {
//     console.log(key);
//     console.log(showListings[key].date);
// });

// Object.entries(showListings).forEach(([key, value]) => {
//     //const showDetail = document.createElement("p");
//     //showDetail.innerHTML = value.date;
//     //showsEvent.appendChild(showDetail);
//     console.log(value.date);
//     console.log(key);
// });


// for(let i = 0; i < locations.length; i++) {
//     let blockScope = "hey" + i;
//     console.log(locations[i]);
// }
// for(let i = 0; i < locations.length; i++) {
//     let blockScope = "hey" + i;
//     console.log(locations[i]);
// }